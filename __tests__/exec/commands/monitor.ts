import { describe, it } from 'mocha';
import { expect } from 'chai';

import { monitor } from '../../../src/commands/monitor';
import { MonitorObjects } from '../../../src/commands/monitor.constants';
import { MonitorEmittedData } from '../../../src/common/interfaces/monitor';
import { AddressAddOptions } from '../../../src/commands/address/add.interfaces';
import { add, del } from '../../../src/commands/address';
import MonitorCommand from '../../../src/common/classes/monitor-command';
import { MonitorOptions } from '../../../src/commands/monitor/monitor.interfaces';

describe('monitor', function () {
  let command: MonitorCommand<MonitorOptions>;

  let newAddress: AddressAddOptions = {
    local: '2001:db8:85a3::370:7334/128',
    dev  : 'lo'
  };

  after(async function () {
    await del(newAddress, {
      sudo: true
    });
  });

  it('should watch events in `all` channel', function (done) {
    let hasDoneBeenCalled = false;

    let safeDone = (error?: any) => {
      if (!hasDoneBeenCalled) {
        hasDoneBeenCalled = true;

        if (command) {
          command.close();
        }
        done(error);
      }
    };

    monitor({
      object: MonitorObjects.All
    }, {
      sudo: true
    })
      .then((_command) => {
        command = _command;

        command.on(MonitorObjects.All, (data: MonitorEmittedData) => {
          expect(data).to.be.an('object');
          expect(data).to.have.keys([
            'timestamp',
            'nsid',
            'object',
            'lines',
            'originalLine'
          ]);
          expect(data.timestamp).to.be.a('string');
          expect(data.nsid).to.be.a('string');
          expect(data.object).to.be.a('string');
          expect(data.lines).to.be.an('array').with.lengthOf.at.least(1);
          expect(data.originalLine).to.be.a('string');

          safeDone();
        });

        command.on('error', safeDone);
      });

    add(newAddress, {
      sudo: true
    });
  });
});