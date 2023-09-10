import { JSONSchemaType }                        from 'ajv';
import { ChildProcessWithoutNullStreams, spawn } from 'child_process';
import { EventEmitter }                          from 'events';

import { SchemaIds }          from '../constants/schemas';
import { GlobalOptions }      from '../interfaces/common';
import Command                from './command';
import { MonitorObjects }     from '../../commands/monitor.constants';
import { MonitorEmittedData } from '../interfaces/monitor';

/**
 * Class to group common behavior among monitor commands.
 *
 * @category Classes
 * @internal
 */
export default class MonitorCommand<T_CommandOptions extends {
  [index: string]: any;
}> extends Command<T_CommandOptions> {

  private emitter = new EventEmitter();
  private spawnedProcess: ChildProcessWithoutNullStreams | undefined;

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

  override async exec(): Promise<this> {
    if (this.globalOptions.dryRun) {
      return this;
    }

    let [command, ...args] = this._cmdToExec.trim().split(' ');

    this.spawnedProcess = spawn(command as string, args);

    this.spawnedProcess.stdout.setEncoding('utf8');
    this.spawnedProcess.stdout.on('data', (data) => {
      const output         = data.split('\n');
      const sectionPattern = /\[\w+\]/;

      for (let line = 0, outputLength = output.length - 1; line < outputLength; line++) {
        if (output[line].search(sectionPattern) === -1) {
          continue;
        }

        const dataLines = [];
        const objectId  = ((sectionPattern.exec(output[line]) || ['[unknown]'])[0])
          .split('[')[1]
          .split(']')[0]
          .toLowerCase();

        dataLines.push(output[line].split(sectionPattern)[1].trim());

        for (let line2 = line + 1; line2 < outputLength; line2++) {
          if (output[line2].search(sectionPattern) !== -1) {
            break;
          }
          dataLines.push(output[line2].trim());
        }

        let toEmit: MonitorEmittedData = {
          object: objectId.toLowerCase(),
          lines:  dataLines
        };

        this.emitter.emit(MonitorObjects.All, toEmit);

        if (this.options.object !== MonitorObjects.All) {
          this.emitter.emit(this.options.object, toEmit);
        }
      }
    });

    this.spawnedProcess.stderr.setEncoding('utf8');
    this.spawnedProcess.stderr.on('data', (data) => {
      this.emitter.emit('error', data);
      this.close();
    });

    return this;
  }

  /** Listens to the events triggered by the monitor. */
  on(event: MonitorObjects | 'error', cb: (data?: any) => void) {
    this.emitter.on.call(this.emitter, event, cb);
  }

  /** Closes the monitor. */
  close() {
    if (this.spawnedProcess) {
      this.spawnedProcess.kill();
    }
    this.emitter.removeAllListeners();
  }
}