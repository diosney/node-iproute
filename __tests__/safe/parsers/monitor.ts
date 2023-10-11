import { describe, it } from 'mocha';
import { expect } from 'chai';

import MonitorCommand from '../../../src/common/classes/monitor-command';
import { generatedFromTests } from './monitor.fixtures';

describe('monitor', () => {
  describe('parseOutput', () => {
    it('should properly return a parsed object', () => {
      const line = generatedFromTests.split('\n');

      for (let lineNumber = 0, outputLength = line.length - 1;
           lineNumber < outputLength;
           lineNumber++) {

        let parsedData = MonitorCommand.parseLineOutput(line[lineNumber]);

        expect(parsedData).to.be.an('object');
        expect(parsedData).to.have.keys([
          'timestamp',
          'nsid',
          'object',
          'lines',
          'originalLine'
        ]);

        expect(parsedData.timestamp).to.be.a('string');
        expect(parsedData.nsid).to.be.a('string');
        expect(parsedData.object).to.be.a('string');
        expect(parsedData.lines).to.be.an('array').with.lengthOf.at.least(1);
        expect(parsedData.originalLine).to.be.a('string');
      }
    });
  });
});