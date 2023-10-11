import { JSONSchemaType } from 'ajv';
import { ChildProcessWithoutNullStreams, spawn } from 'child_process';
import { EventEmitter } from 'events';

import { SchemaIds } from '../constants/schemas';
import { GlobalOptions } from '../interfaces/common';
import Command from './command';
import { MonitorObjects } from '../../commands/monitor.constants';
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

  static parseLineOutput(eventLine: string): MonitorEmittedData {
    const bracketsSectionRegex     = /^\[.*?\](?: (\[.*?\])*)?/;
    const textsInsideBracketsRegex = /\[([^\]]+)\]/g;

    const bracketsSectionMatch = eventLine.match(bracketsSectionRegex);
    const bracketsSection      = (bracketsSectionMatch)
                                 ? bracketsSectionMatch[0]
                                 : '';

    const dataLines = eventLine
      .split(/\\\s+/g)
      .map((line) => line.trim());

    const bracketMatches = dataLines[0].match(textsInsideBracketsRegex);
    const brackets       = (bracketMatches)
                           ? bracketMatches.map(b => b.slice(1, -1))
                           : [];

    // Extracting the rest of the line that isn't wrapped in [].
    const firstLineRest = dataLines[0].replace(textsInsideBracketsRegex, '').trim();

    return {
      timestamp   : brackets[0],
      nsid        : brackets[1].split(' ')[1],
      object      : (brackets[2] === 'ADDR')
                    ? MonitorObjects.Address
                    : brackets[2].toLowerCase() as MonitorObjects,
      originalLine: eventLine,
      lines       : [
        bracketsSection,
        firstLineRest,
        ...dataLines.slice(1)
      ]
    };
  }

  private emitter = new EventEmitter();
  private spawnedProcess: ChildProcessWithoutNullStreams | undefined;

  constructor(protected schemaId: SchemaIds,
              protected schema: JSONSchemaType<T_CommandOptions>,
              protected options: T_CommandOptions,
              protected globalOptions: GlobalOptions,
              protected ipCmd: string[]) {

    super(schemaId,
      schema,
      {
        ...options,
        // Override options to maximize output.
        label     : true,
        'all-nsid': true
      },
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
      const output = data.split('\n');

      for (let lineNumber = 0, outputLength = output.length - 1;
           lineNumber < outputLength;
           lineNumber++) {

        let toEmit: MonitorEmittedData = MonitorCommand.parseLineOutput(output[lineNumber]);

        this.emitter.emit(MonitorObjects.All, toEmit);

        if (this.options.object_ !== MonitorObjects.All) {
          this.emitter.emit(this.options.object_, toEmit);
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
  on(event: MonitorObjects | 'error', cb: (data?: any) => void): this {
    this.emitter.on.call(this.emitter, event, cb);
    return this;
  }

  /** Closes the monitor. */
  close() {
    if (this.spawnedProcess) {
      this.spawnedProcess.removeAllListeners();
      this.spawnedProcess.kill('SIGKILL');
    }
    this.emitter.removeAllListeners();
  }
}