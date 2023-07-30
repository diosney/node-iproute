import { ErrorObject } from 'ajv';
import { expect }      from 'chai';

import { add }                   from '../../src/modules/link';
import { Tests as linkAddTests } from '../fixtures/link-add';

describe('link', function () {
  describe('add', function () {
    linkAddTests.forEach((test) => {
      describe(test.description, function () {
        it('should build the proper cmd array & string', async function () {
          let ipCommand = await add(test.options, {
            dryRun: true
          });

          expect(ipCommand.cmd)
            .to.be.an('array')
            .and.to.be.deep.eq(test.expectedCmd);

          expect(ipCommand.cmdToExec)
            .to.be.a('string')
            .and.to.be.eq(test.expectedCmdToExec);
        });
      });
    });
  });
});