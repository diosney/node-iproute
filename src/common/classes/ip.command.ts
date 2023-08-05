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
  protected _cmd: Array<string | number> = [];
  protected _cmdToExec: string           = '';

  // Useful for testing.
  get cmd(): Array<string | number> {
    return this._cmd;
  }

  // Useful for testing.
  get cmdToExec(): string {
    return this._cmdToExec;
  }

  constructor(protected schemaId: SchemaIds,
              protected schema: JSONSchemaType<T_CommandOptions>,
              protected options: T_CommandOptions,
              protected globalOptions: GlobalOptions,
              protected ipCmd: string[]) {

    // TODO: Tried to merge into one generic function but generic types gave me trouble.
    this.validateOptions();
    this.validateGlobalOptions();

    this.buildCmd();
  }

  protected validateOptions() {
    const validate = ajv.getSchema(this.schemaId)
                     || ajv.compile(this.schema);

    const isValid = validate(this.options);

    if (!isValid) {
      throw new ParametersError(ParametersError.message, validate.errors);
    }
  }

  protected validateGlobalOptions() {
    const validate = ajv.getSchema(SchemaIds.GlobalOptions)
                     || ajv.compile(GlobalOptionsSchema);

    const isValid = validate(this.globalOptions);

    if (!isValid) {
      throw new ParametersError(ParametersError.message, validate.errors);
    }
  }

  protected buildCmd() {
    const hasSudo = (this.globalOptions.sudo)
                    ? 'sudo'
                    : '';

    let cmd: Array<string | number> = [hasSudo, ...this.ipCmd];

    // Add specific `ip` options to cmd.
    let ipOptions: Array<string | number> = [];

    Object
      .keys(this.globalOptions)
      .forEach((key) => {
        if (key.search(/^-/) === -1) {
          return;
        }
        ipOptions.push(...this.getCmdArgsFromOptions(key, this.globalOptions[key]));
      });

    cmd.splice(2, 0, ...ipOptions);

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
        if (key.search(/_arg$/) !== -1) {
          cmd.push(...this.getCmdArgsFromOptions('', this.options[key]));
          return;
        }
        cmd.push(...this.getCmdArgsFromOptions(key, this.options[key]));
      });

    this._cmd       = cmd;
    this._cmdToExec = cmd.join(' ');
  }

  // TODO: Throw error if value is undefined or null?
  protected getCmdArgsFromOptions(key: string, value: any): Array<string | number> {
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

  async exec<T_ReturnData = {}>(): Promise<this | T_ReturnData> {
    if (this.globalOptions.dryRun) {
      return this;
    }

    const { stderr } = await promisifiedExec(this._cmdToExec);

    if (!stderr) {
      return this;
    }

    const message = stderr.replace(/\n/g, '');
    throw new CommandError(message, this._cmdToExec);
  }
}