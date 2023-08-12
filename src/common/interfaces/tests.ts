import { TestEnum }           from '../constants/tests';
import { GlobalOptions }      from './common';
import { AddressShowOptions } from '../../commands/address/show.interfaces';

export interface Empty {
}

export interface ComplexIpCommandTestOptions extends ComplexIpCommandTestArgsOptions {
  nestedInvisibleKey_: ComplexIpCommandTestArgsOptions;
}

export interface ComplexIpCommandTestArgsOptions {
  aString: string;
  aNumber: number;
  anEnum: TestEnum;

  aFlag: boolean;
  noaFlag: boolean;

  number_?: number;

  aTuple: [ number, number ];

  anArray: Array<{
    aNumber: number;
    aStringWithDefaultValue?: string;
  }>;
}

export interface TestFixture<T_Options, T_GlobalOptions = GlobalOptions> {
  description: string;
  options: T_Options;
  globalOptions?: T_GlobalOptions;
  expectedCmd: Array<number | string>;
  expectedCmdToExec: string;
}

export interface TestDefinition {
  [index: string]: Array<{
    operator: string;
    testBattery: TestFixture<any>[];
    method: Function;
  }>;
}