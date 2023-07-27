/**
 * Error class to be used when the command threw an error.
 */
export class CommandError extends Error {
  /** Code to identify the error easily in `catch` clauses. */
  code = 'ERR_IPROUTE_COMMAND_ERRORED';

  /** Command line that triggered the command error. */
  cmd: string;

  constructor(message: string, cmd: string) {
    // 'Error' breaks prototype chain here.
    super(message);
    // Fixing the break.
    Object.setPrototypeOf(this, CommandError.prototype);

    this.cmd = cmd;
  }
}
