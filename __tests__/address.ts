import {describe, it} from "mocha";
import {expect} from 'chai';

import {
  add,
  change,
  replace,
  del,
  flush,
  save,
  restore,
  show
} from '../src/commands/address';

import {Tests as addressAddTests} from './fixtures/address-add';
import {Tests as addressChangeTests} from './fixtures/address-change';
import {Tests as addressReplaceTests} from './fixtures/address-replace';
import {Tests as addressDeleteTests} from './fixtures/address-delete';
import {Tests as addressFlushTests} from './fixtures/address-flush';
import {Tests as addressSaveTests} from './fixtures/address-save';
import {Tests as addressRestoreTests} from './fixtures/address-restore';
import {Tests as addressShowTests} from './fixtures/address-show';

describe('address', function () {
  describe('add', function () {
    addressAddTests.forEach((test) => {
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

  describe('change', function () {
    addressChangeTests.forEach((test) => {
      describe(test.description, function () {
        it('should build the proper cmd array & string', async function () {
          let ipCommand = await change(test.options, {
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

  describe('replace', function () {
    addressReplaceTests.forEach((test) => {
      describe(test.description, function () {
        it('should build the proper cmd array & string', async function () {
          let ipCommand = await replace(test.options, {
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
    addressDeleteTests.forEach((test) => {
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

  describe('flush', function () {
    addressFlushTests.forEach((test) => {
      describe(test.description, function () {
        it('should build the proper cmd array & string', async function () {
          let ipCommand = await flush(test.options, {
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
    addressSaveTests.forEach((test) => {
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
    addressRestoreTests.forEach((test) => {
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

  describe('show', function () {
    addressShowTests.forEach((test) => {
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