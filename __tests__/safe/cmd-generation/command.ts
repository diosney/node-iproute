import {describe, it} from "mocha";
import { expect } from 'chai';

import Command from '../../../src/common/classes/command';

import {
  EmptySchema,
  IpCommandTestOptionsSchema,
  SchemaIds
} from '../../../src/common/constants/schemas';

import { TestEnum }      from '../../../src/common/constants/tests';
import { GlobalOptions } from '../../../src/common/interfaces/common';

import {
  ComplexIpCommandTestOptions,
  Empty
} from '../../../src/common/interfaces/tests';

describe('ip command', function () {
  describe('when testing a simple command with `sudo` set', function () {
    it('should build the proper cmd string', async function () {
      const cmd                          = ['test'];
      const globalOptions: GlobalOptions = {
        sudo  : true,
        dryRun: true
      };

      const options: Empty = {};

      let ipCommand = new Command<Empty>(
        SchemaIds.Empty,
        EmptySchema,
        options,
        globalOptions,
        cmd);

      expect(ipCommand.cmd)
        .to.be.an('array')
        .and.to.be.deep.eq([
          'sudo',
          'test'
        ]
      );

      expect(ipCommand.cmdToExec)
        .to.be.a('string').and.to.be.eq('sudo test');
    });
  });

  describe('when testing a simple command with some `ip` global options set (`-details, -json`)', function () {
    it('should build the proper cmd string', async function () {
      const cmd                          = ['test_a', 'test_b'];
      const globalOptions: GlobalOptions = {
        dryRun    : true,
        '-details': true,
        '-json'   : true
      };

      const options: Empty = {};

      let ipCommand = new Command<Empty>(
        SchemaIds.Empty,
        EmptySchema,
        options,
        globalOptions,
        cmd);

      expect(ipCommand.cmd)
        .to.be.an('array')
        .and.to.be.deep.eq([
          '',
          'test_a',
          '-details',
          '-json',
          'test_b'
        ]
      );

      expect(ipCommand.cmdToExec)
        .to.be.a('string').and.to.be.eq(' test_a -details -json test_b');
    });
  });

  describe('when testing a command with all parameter types', function () {
    it('should build the proper cmd string', async function () {
      const cmd                          = ['test'];
      const globalOptions: GlobalOptions = {
        dryRun: true
      };

      const options: ComplexIpCommandTestOptions = {
        aString: 'a-string',
        aNumber: 1,
        anEnum : TestEnum.ValueA,

        aFlag  : true,
        noaFlag: true,

        number_: 2,

        aTuple : [0, 1],
        anArray: [
          {
            aNumber: 25
          }
        ],

        nestedInvisibleKey_: {
          aString: 'b-string',
          aNumber: 2,
          anEnum : TestEnum.ValueB,

          aFlag  : false,
          noaFlag: false,

          aTuple: [2, 3],

          anArray: [
            {
              aNumber                : 15,
              aStringWithDefaultValue: 'c-string'
            }
          ]
        }
      };

      let ipCommand = new Command<ComplexIpCommandTestOptions>(
        SchemaIds.ComplexIpCommandTestOptions,
        IpCommandTestOptionsSchema,
        options,
        globalOptions,
        cmd);

      expect(ipCommand.cmd)
        .to.be.an('array')
        .and.to.be.deep.eq([
          // No `sudo` or `sudo: false`.
          '',
          // Made up command.
          'test',
          'aString',
          'a-string',
          'aNumber',
          1,
          'anEnum',
          'value-a',
          'aFlag',
          'noaFlag',
          2,
          'aTuple',
          0,
          1,
          'anArray',
          'aNumber',
          25,
          'aStringWithDefaultValue',
          'default-value',
          // `type_` now.
          'aString',
          'b-string',
          'aNumber',
          2,
          'anEnum',
          'value-b',
          'noaFlag',
          'aFlag',
          'aTuple',
          2,
          3,
          'anArray',
          'aNumber',
          15,
          'aStringWithDefaultValue',
          'c-string'
        ]
      );

      expect(ipCommand.cmdToExec)
        .to.be.a('string')
        .and.to.be.eq(
        ' test aString a-string aNumber 1 anEnum value-a aFlag noaFlag 2 aTuple 0 1 anArray aNumber 25 aStringWithDefaultValue default-value aString b-string aNumber 2 anEnum value-b noaFlag aFlag aTuple 2 3 anArray aNumber 15 aStringWithDefaultValue c-string');
    });
  });
});