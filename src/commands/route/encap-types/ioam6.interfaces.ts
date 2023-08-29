/**
 * Add route ioam6 encap arguments.
 * @category Interfaces
 */
export interface AddRouteIoam6EncapArgs {
  /** XXX */
  ioam6: true;
  /** XXX */
  trace: true;
  /** XXX */
  prealloc: true;
  /**  List of IOAM data required in the trace, represented by a bitfield (24 bits). */
  type: number;
  /**
   * Numerical value to represent an IOAM namespace.
   * See `ip-ioam(8)`.
   */
  ns: number;
  /** Size, in octets, of the pre-allocated trace data block. */
  size: number;
}