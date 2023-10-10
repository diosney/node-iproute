import { JSONSchemaType } from 'ajv';
import { promisify } from 'util';
import { exec } from 'child_process';

import { FilePathGlobalOptionSchema, SchemaIds } from '../constants/schemas';
import { CommandError } from '../errors/command';
import { GlobalOptionsWithRequiredFilePath } from '../interfaces/common';
import Command from './command';
import { validate } from '../misc';

const promisifiedExec = promisify(exec);

export default class CommandWithFilepath<T_CommandOptions extends {
  [index: string]: any;
}> extends Command<T_CommandOptions> {

  constructor(protected schemaId: SchemaIds,
              protected schema: JSONSchemaType<T_CommandOptions>,
              protected options: T_CommandOptions,
              protected globalOptions: GlobalOptionsWithRequiredFilePath,
              protected ipCmd: string[]) {

    super(schemaId,
      schema,
      options,
      globalOptions,
      ipCmd);

    validate<GlobalOptionsWithRequiredFilePath>(SchemaIds.FilePathGlobalOption, FilePathGlobalOptionSchema, globalOptions);
    this.buildCmd();
  }

  protected override buildCmd() {
    super.buildCmd();

    this._cmd       = this.cmd.concat(...[`${ this.globalOptions.filePath }`]);
    this._cmdToExec = this.cmd.join(' ');
  }

  override async exec(): Promise<this> {
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