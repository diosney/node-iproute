import { ErrorObject } from 'ajv';

/**
 * Error class to be used when the provided options are invalid.
 * @category Errors
 */
export class ParametersError extends Error {
  /** Code to identify the error in `catch` clauses. */
  code = 'ERR_INVALID_PARAMETERS';

  /**
   * Detailed introspection on the encountered errors, useful to know exactly
   * what failed in the options.
   */
  errors?: ErrorObject[] | null;

  static message: string = 'Invalid parameters. Catch `e.errors` for details.';

  constructor(message: string, errors?: ErrorObject[] | null) {
    // 'Error' breaks prototype chain here.
    super(message);
    // Fixing the break.
    Object.setPrototypeOf(this, ParametersError.prototype);

    this.errors = errors;
  }
}
