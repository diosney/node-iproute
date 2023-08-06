import { expect } from 'chai';

import {
  add,
  del,
  save,
  restore,
  flush,
  show
} from '../../src/commands/rule';

import { Tests as ruleAddTests }     from '../fixtures/rule-add';
import { Tests as ruleDeleteTests }  from '../fixtures/rule-delete';
import { Tests as ruleSaveTests }    from '../fixtures/rule-save';
import { Tests as ruleRestoreTests } from '../fixtures/rule-restore';
import { Tests as ruleFlushTests }   from '../fixtures/rule-flush';
import { Tests as ruleShowTests }    from '../fixtures/rule-show';

describe('rule', function () {
  describe('add', function () {
    ruleAddTests.forEach((test) => {
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
    ruleDeleteTests.forEach((test) => {
      describe(test.description, function () {
        it('should build the proper cmd array & string', async function () {
          let ipCommand = await del(test.options, {
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

  describe('save', function () {
    ruleSaveTests.forEach((test) => {
      describe(test.description, function () {
        it('should build the proper cmd array & string', async function () {
          let ipCommand = await save(test.options, Object
            .assign({}, test.globalOptions,
              {
                dryRun: true
              }));

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

  describe('restore', function () {
    ruleRestoreTests.forEach((test) => {
      describe(test.description, function () {
        it('should build the proper cmd array & string', async function () {
          let ipCommand = await restore(test.options, Object
            .assign({}, test.globalOptions,
              {
                dryRun: true
              }));

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

  describe('flush', function () {
    ruleFlushTests.forEach((test) => {
      describe(test.description, function () {
        it('should build the proper cmd array & string', async function () {
          let ipCommand = await flush(test.options,
            {
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
    ruleShowTests.forEach((test) => {
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
});