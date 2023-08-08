import { expect } from 'chai';

import {
  flush,
  show,
  save,
  restore,
  get
} from '../src/commands/route';

import { Tests as routeFlushTests }   from './fixtures/route-flush';
import { Tests as routeShowTests }    from './fixtures/route-show';
import { Tests as routeSaveTests }    from './fixtures/route-save';
import { Tests as routeRestoreTests } from './fixtures/route-restore';
import { Tests as routeGetTests }     from './fixtures/route-get';

describe('route', function () {
  describe('flush', function () {
    routeFlushTests.forEach((test) => {
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
    routeShowTests.forEach((test) => {
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

  describe('save', function () {
    routeSaveTests.forEach((test) => {
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
    routeRestoreTests.forEach((test) => {
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
    routeGetTests.forEach((test) => {
      describe(test.description, function () {
        it('should build the proper cmd array & string', async function () {
          let ipCommand = await get(test.options, {
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