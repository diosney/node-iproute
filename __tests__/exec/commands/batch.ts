import { promises as fs } from 'fs';
import { describe, it, before, after } from 'mocha';

import { fromFile, fromStdin } from '../../../src/commands/batch';

describe('batch', () => {
  describe('fromFile', () => {
    let filePath = `/tmp/batch-${ Date.now() }.commands`;

    before(async function () {
      await fs.writeFile(filePath, [
        'address add local 127.0.1.4/32 dev lo',
        'address add local 127.0.1.5/32 dev lo',

        'address del 127.0.1.4/32 dev lo',
        'address del 127.0.1.5/32 dev lo'
      ].join('\n'));
    });

    after(async function () {
      try {
        await fs.unlink(filePath);
      }
      catch (error) {
      }
    });

    it('should run the commands in the file', async () => {
      await fromFile({
        sudo: true,
        filePath
      });
    });
  });

  describe('fromStdin', () => {
    let batch = [
      'address add local 127.0.1.4/32 dev lo',
      'address add local 127.0.1.5/32 dev lo',

      'address del 127.0.1.4/32 dev lo',
      'address del 127.0.1.5/32 dev lo'
    ].join('\n');

    it('should run the commands', async () => {
      await fromStdin({
        sudo : true,
        stdin: batch
      });
    });
  });
});
