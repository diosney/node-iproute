/**
 * Link set xdp pinned options.
 * @category Interfaces
 */
export interface LinkSetXdpPinnedOptions {
  /**
   * Attaches a XDP/BPF program to the given device.
   * The FILE points to an already pinned BPF program in the BPF file system.
   * The option section doesn't apply here, but otherwise semantics are the same as with the option object described
   * already.
   */
  pinned: string;
}