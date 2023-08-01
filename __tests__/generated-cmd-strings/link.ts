import { expect } from 'chai';

import { deleteLink }               from '../../src/modules/link';
import { add }                      from '../../src/modules/link';
import { Tests as linkAddTests }    from '../fixtures/link-add';
import { Tests as linkDeleteTests } from '../fixtures/link-delete';

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

  describe('delete', function () {
    linkDeleteTests.forEach((test) => {
      describe(test.description, function () {
        it('should build the proper cmd array & string', async function () {
          let ipCommand = await deleteLink(test.options, {
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