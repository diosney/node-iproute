import { JSONSchemaType }                        from 'ajv';
import { ChildProcessWithoutNullStreams, spawn } from 'child_process';
import { EventEmitter }                          from 'events';

import { SchemaIds }     from '../constants/schemas';
import { GlobalOptions } from '../interfaces/common';
import Command           from './command';

export default class MonitorCommand<T_CommandOptions extends {
  [index: string]: any;
}> extends Command<T_CommandOptions> {
  emitter = new EventEmitter();
  spawnedProcess: ChildProcessWithoutNullStreams | undefined;

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

  override async exec<EventEmitter>(): Promise<this | EventEmitter> {
    if (this.globalOptions.dryRun) {
      return this;
    }

    this.spawnedProcess = spawn(this._cmdToExec);

    this.spawnedProcess.stdout.setEncoding('utf8');
    this.spawnedProcess.stdout.on('data', (data) => {
      const output         = data.split('\n');
      const sectionPattern = /\[\w+\]/;

      for (let line = 0, outputLength = output.length - 1; line < outputLength; line++) {
        if (output[line].search(sectionPattern) === -1) {
          continue;
        }

        const dataLines = [];
        const objectId  = ((sectionPattern.exec(output[line]) || [ '[unknown]' ])[0])
          .split('[')[1]
          .split(']')[0]
          .toLowerCase();

        dataLines.push(output[line].split(sectionPattern)[1]);

        for (let line2 = line + 1; line2 < outputLength; line2++) {
          if (output[line2].search(sectionPattern) !== -1) {
            break;
          }
          dataLines.push(output[line2]);
        }

        let toEmit = {
          object: objectId.toLowerCase(),
          data:   dataLines
        };

        if (this.options.object === 'all') {
          this.emitter.emit('all', toEmit);
        }
        else {
          this.emitter.emit(this.options.object, toEmit);
        }
      }
    });

    this.spawnedProcess.stderr.setEncoding('utf8');
    this.spawnedProcess.stderr.on('data', (data) => {
      this.emitter.emit('error', data);
      this.close();
    });

    return this.emitter as EventEmitter;
  }

  close() {
    if (this.spawnedProcess) {
      this.spawnedProcess.kill();
    }
  }
}