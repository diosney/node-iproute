/**
 * Error class to be used when the command throws an error.
 * @category Errors
 */
export class CommandError extends Error {
  /** Code to identify the error in `catch` clauses. */
  code = 'ERR_COMMAND_ERRORED';

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
