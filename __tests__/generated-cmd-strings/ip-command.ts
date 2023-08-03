import { expect } from 'chai';
import IpCommand  from '../../src/common/classes/ip-command';

import {
  EmptyIpCommandTestOptionsSchema,
  IpCommandTestOptionsSchema,
  SchemaIds
} from '../../src/common/constants/schemas';

import { TestEnum }      from '../../src/common/constants/tests';
import { GlobalOptions } from '../../src/common/interfaces/common';

import {
  ComplexIpCommandTestOptions,
  EmptyIpCommandTestOptions
} from '../../src/common/interfaces/tests';

describe('ip command', function () {
  describe('when testing a simple command with `sudo` set', function () {
    it('should build the proper cmd string', async function () {
      const cmd                          = ['test'];
      const globalOptions: GlobalOptions = {
        sudo  : true,
        dryRun: true
      };

      const options: EmptyIpCommandTestOptions = {};

      let ipCommand = new IpCommand<EmptyIpCommandTestOptions>(
        SchemaIds.EmptyIpCommandTestOptions,
        EmptyIpCommandTestOptionsSchema,
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

      const options: EmptyIpCommandTestOptions = {};

      let ipCommand = new IpCommand<EmptyIpCommandTestOptions>(
        SchemaIds.EmptyIpCommandTestOptions,
        EmptyIpCommandTestOptionsSchema,
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
        a_string : 'a-string',
        a_number : 1,
        a_tuple  : [0, 1],
        a_flag   : true,
        noa_flag : true,
        an_enum  : TestEnum.ValueA,
        type_arg : 2,
        type_args: {
          a_string: 'b-string',
          a_number: 2,
          a_tuple : [2, 3],
          a_flag  : false,
          noa_flag: false,
          an_enum : TestEnum.ValueB
        }
      };

      let ipCommand = new IpCommand<ComplexIpCommandTestOptions>(
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
          'a_string',
          'a-string',
          'a_number',
          1,
          'a_tuple',
          0,
          1,
          'a_flag',
          'noa_flag',
          'an_enum',
          'value-a',
          '',
          2,
          // `type_args` now.
          'a_string',
          'b-string',
          'a_number',
          2,
          'a_tuple',
          2,
          3,
          'noa_flag',
          'a_flag',
          'an_enum',
          'value-b'
        ]
      );

      expect(ipCommand.cmdToExec)
        .to.be.a('string')
        .and.to.be.eq(
        ' test a_string a-string a_number 1 a_tuple 0 1 a_flag noa_flag an_enum value-a  2 a_string b-string a_number 2 a_tuple 2 3 noa_flag a_flag an_enum value-b');
    });
  });
});