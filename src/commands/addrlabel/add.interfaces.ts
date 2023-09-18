/**
 * Addrlabel add options.
 * @category Interfaces
 */
export interface AddrlabelAddOptions {
  /** The address prefix. */
  prefix: string;
  /** The outgoing interface. */
  dev?: string;
  /** The label for the prefix. `0xffffffff` is reserved. */
  label: number;
}