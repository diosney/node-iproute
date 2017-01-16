import { describe, it } from 'mocha';
import { expect }       from 'chai';

import { fixtures } from './fixtures';

Object
  .keys(fixtures)
  .forEach((key) => {
    describe(key, function () {
      fixtures[key].forEach(({ operator, testBattery, method }) => {

        describe(operator, function () {
          testBattery.forEach((test) => {

            describe(test.description, function () {
              it('should build the proper cmd array & string', async function () {
                let globalOptions: any = Object
                  .assign({}, test.globalOptions || {},
                    {
                      dryRun: true
                    });

                let ipCommand = await method(test.options as any, globalOptions) as any;

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
    });
  });