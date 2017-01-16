import { JSONSchemaType } from 'ajv';
import isPlainObject      from 'lodash.isplainobject';
import { promisify }      from 'util';
import { exec }           from 'child_process';

import { invisibleKeySuffix }             from '../constants/regexes';
import { GlobalOptionsSchema, SchemaIds } from '../constants/schemas';
import { CommandError }                   from '../errors/command';
import { GlobalOptions }                  from '../interfaces/common';
import { validate }                       from '../misc';

const promisifiedExec = promisify(exec);

export default class Command<T_CommandOptions extends { [index: string]: any; }> {
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

    validate<T_CommandOptions>(schemaId, schema, options);
    validate<GlobalOptions>(SchemaIds.GlobalOptions, GlobalOptionsSchema, globalOptions);

    this.buildCmd();
  }

  protected buildCmd() {
    const hasSudo = (this.globalOptions.sudo)
                    ? 'sudo'
                    : '';

    let cmd: Array<string | number> = [ hasSudo, ...this.ipCmd ];

    // Add specific `ip` options to cmd.
    let ipOptions: Array<string | number> = [];

    Object
      .keys(this.globalOptions)
      .forEach((key) => {
        if (key.search(/^-/) === -1) {
          return;
        }
        ipOptions.push(...this.getCmdFromOptions(this.globalOptions[key], key));
      });

    cmd.splice(2, 0, ...ipOptions);

    // Add regular arguments to cmd.
    cmd.push(...this.getCmdFromOptions(this.options));

    this._cmd       = cmd;
    this._cmdToExec = cmd.join(' ');
  }

  private getCmdFromOptions(value: any, key = ''): Array<string | number> {
    let cmd: Array<string | number> = [];

    let isVisibleKey = (key.search(invisibleKeySuffix) === -1);

    if (typeof value === 'string' || typeof value === 'number') {
      if (isVisibleKey && key) {
        cmd.push(key);
      }
      cmd.push(value);
      return cmd;
    }
    if (typeof value === 'boolean') {
      if (!isVisibleKey) {
        // It doesn't make sense.
        // TODO: Throw an error or skip? Skip for now.
        return cmd;
      }
      if (value && key) {
        cmd.push(key);
        return cmd;
      }
      // Is `false`.
      let invertedKey = (/^no/.test(key))
                        ? key.replace(/^no/, '')
                        : `no${ key }`;

      cmd.push(invertedKey);
      return cmd;
    }
    if (Array.isArray(value)) {
      if (isVisibleKey && key) {
        cmd.push(key);
      }
      value.forEach((nestedValue) => {
        cmd.push(...this.getCmdFromOptions(nestedValue));
      });
      return cmd;
    }
    if (isPlainObject(value)) {
      if (isVisibleKey && key) {
        cmd.push(key);
      }
      Object
        .keys(value)
        .forEach((nestedKey) => {
          cmd.push(...this.getCmdFromOptions(value[nestedKey], nestedKey));
        });
      return cmd;
    }

    // TODO: What to do if value is `undefined` or `null`? For now do nothing.
    return cmd;
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