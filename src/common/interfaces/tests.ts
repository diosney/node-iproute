import { TestEnum } from '../constants/tests';

export interface EmptyIpCommandTestOptions {
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

export interface TestFixture<T_CommandOptions> {
  description: string;
  options: T_CommandOptions;
  expectedCmd: Array<number | string>;
  expectedCmdToExec: string;
}