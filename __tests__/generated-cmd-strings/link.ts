import { expect } from 'chai';

import { deleteLink, add, show, set } from '../../src/modules/link';
import { Tests as linkAddTests }      from '../fixtures/link-add';
import { Tests as linkDeleteTests }   from '../fixtures/link-delete';
import { Tests as linkShowTests }     from '../fixtures/link-show';
import { Tests as linkSetTests }      from '../fixtures/link-set';

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

  describe('show', function () {
    linkShowTests.forEach((test) => {
      describe(test.description, function () {
        it('should build the proper cmd array & string', async function () {
          let ipCommand = await show(test.options, {
            dryRun: true
          }) as any;

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

  describe('set', function () {
    linkSetTests.forEach((test) => {
      describe(test.description, function () {
        it('should build the proper cmd array & string', async function () {
          let ipCommand = await set(test.options, {
            dryRun: true
          }) as any;

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