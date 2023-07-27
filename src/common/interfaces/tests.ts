import { TestEnum } from '../constants/tests';

export interface IpCommandTestOptions extends IpCommandTestArgsOptions {
  type_args: IpCommandTestArgsOptions;
}

export interface IpCommandTestArgsOptions {
  a_string: string;
  a_number: number;
  a_tuple: [number, number];
  a_flag: boolean;
  noa_flag: boolean;
  an_enum: TestEnum;
}

export interface TestFixture<T_CommandOptions> {
  description: string;
  options: T_CommandOptions;
  expectedCmd: Array<number | string>;
  expectedCmdToExec: string;
}