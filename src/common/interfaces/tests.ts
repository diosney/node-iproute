import { TestEnum }      from '../constants/tests';
import { GlobalOptions } from './common';

export interface Empty {
}

export interface ComplexIpCommandTestOptions extends ComplexIpCommandTestArgsOptions {
  type_args: ComplexIpCommandTestArgsOptions;
}

export interface ComplexIpCommandTestArgsOptions {
  a_string: string;
  a_number: number;
  a_tuple: [number, number];
  a_flag: boolean;
  noa_flag: boolean;
  an_enum: TestEnum;
  type_arg?: number;
}

export interface TestFixture<T_Options, T_GlobalOptions = GlobalOptions> {
  description: string;
  options: T_Options;
  globalOptions?: T_GlobalOptions;
  expectedCmd: Array<number | string>;
  expectedCmdToExec: string;
}