import { TestEnum } from '../constants/tests';
import { GlobalOptions } from './common';

export interface ComplexIpCommandTestOptions extends ComplexIpCommandTestArgsOptions {
  nestedInvisibleKey: ComplexIpCommandTestArgsOptions;
}

export interface ComplexIpCommandTestArgsOptions {
  aString: string;
  aNumber: number;
  anEnum: TestEnum;

  aFlag: boolean;
  noaFlag: boolean;

  number?: number;

  aTuple: [number, number];

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
    skipOptions?: boolean;
  }>;
}