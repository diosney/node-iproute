import { JSONSchemaType } from 'ajv';
import { promisify }      from 'util';
import { exec }           from 'child_process';

import { GlobalOptionsSchema, SchemaIds } from '../constants/schemas';
import { CommandError }                   from '../errors/command';
import { ParametersError }                from '../errors/parameters';
import { GlobalOptions }                  from '../interfaces/common';
import ajv                                from '../validator';

const promisifiedExec = promisify(exec);

export default class IpCommand<T_CommandOptions extends { [index: string]: any; }> {
  private _cmd: Array<string | number> = [];
  private _cmdToExec: string           = '';

  // Useful for testing.
  get cmd(): Array<string | number> {
    return this._cmd;
  }

  // Useful for testing.
  get cmdToExec(): string {
    return this._cmdToExec;
  }

  constructor(private schemaId: SchemaIds,
              private schema: JSONSchemaType<T_CommandOptions>,
              private options: T_CommandOptions,
              private globalOptions: GlobalOptions,
              private ipCmd: string[]) {

    // TODO: Tried to merge into one generic function but generic types gave me trouble.
    this.validateOptions();
    this.validateGlobalOptions();

    this.buildCmd();
  }

  private validateOptions() {
    const validate = ajv.getSchema(this.schemaId)
                     || ajv.compile(this.schema);

    const isValid = validate(this.options);

    if (!isValid) {
      throw new ParametersError(ParametersError.message, validate.errors);
    }
  }

  private validateGlobalOptions() {
    const validate = ajv.getSchema(SchemaIds.GlobalOptions)
                     || ajv.compile(GlobalOptionsSchema);

    const isValid = validate(this.globalOptions);

    if (!isValid) {
      throw new ParametersError(ParametersError.message, validate.errors);
    }
  }

  private buildCmd() {
    const hasSudo = (this.options.sudo)
                    ? 'sudo'
                    : '';

    let cmd: Array<string | number> = [hasSudo, ...this.ipCmd];

    // Add regular arguments to cmd.
    Object
      .keys(this.options)
      .forEach((key) => {
        // It doesn't make sense do a `.filter` for only so few specific exceptions.
        if (key.search(/^sudo$/) !== -1) {
          return;
        }
        if (key.search(/_args$/) !== -1) {
          // Add nested arguments to cmd.
          let argsKeys = Object.keys(this.options[key]);

          if (argsKeys.length > 0) {
            argsKeys.forEach((nestedKey) => {
              cmd.push(...this.getCmdArgsFromOptions(nestedKey, this.options[key][nestedKey]));
            });
          }
          return;
        }
        cmd.push(...this.getCmdArgsFromOptions(key, this.options[key]));
      });

    this._cmd       = cmd;
    this._cmdToExec = cmd.join(' ');
  }

  // TODO: Throw error if value is undefined or null?
  private getCmdArgsFromOptions(key: string, value: any): Array<string | number> {
    let result: Array<string | number> = [];

    if (Array.isArray(value)) {
      result.push(key, ...value);
      return result;
    }

    switch (typeof value) {
      case 'string':
      case 'number':
        result.push(key, value);
        break;

      case 'boolean':
        if (value) {
          result.push(key);
          break;
        }

        // Is `false`.
        let invertedKey = (/^no/.test(key))
                          ? key.replace(/^no/, '')
                          : `no${key}`;

        result.push(invertedKey);
        break;

      default:
        result.push(key, value);
        break;
    }

    return result;
  }

  async exec(): Promise<this> {
    if (this.globalOptions.dryRun) {
      return this;
    }

    let cmdToExec = this._cmd.join(' ');

    const { stderr } = await promisifiedExec(cmdToExec);

    if (!stderr) {
      return this;
    }

    const message = stderr.replace(/\n/g, '');
    throw new CommandError(message, cmdToExec);
  }
}