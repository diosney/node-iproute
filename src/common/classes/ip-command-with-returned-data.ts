import { JSONSchemaType } from 'ajv';
import { promisify }      from 'util';
import { exec }           from 'child_process';

import { SchemaIds }     from '../constants/schemas';
import { CommandError }  from '../errors/command';
import { GlobalOptions } from '../interfaces/common';
import IpCommand         from './ip.command';

const promisifiedExec = promisify(exec);

export default class IpCommandWithReturnedData<T_CommandOptions extends { [index: string]: any; }> extends IpCommand<T_CommandOptions> {
  constructor(protected schemaId: SchemaIds,
              protected schema: JSONSchemaType<T_CommandOptions>,
              protected options: T_CommandOptions,
              protected globalOptions: GlobalOptions,
              protected ipCmd: string[]) {

    super(schemaId,
      schema,
      options,
      globalOptions,
      ipCmd);
  }

  override async exec<T_ReturnData>(): Promise<this | T_ReturnData> {
    if (this.globalOptions.dryRun) {
      return this;
    }

    const {
            stderr,
            stdout
          } = await promisifiedExec(this._cmdToExec);

    if (!stderr) {
      return JSON.parse(stdout);
    }

    const message = stderr.replace(/\n/g, '');
    throw new CommandError(message, this._cmdToExec);
  }
}