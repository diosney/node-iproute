/**
 * Link set xdp off options.
 * @category Interfaces
 */
// TODO: Error: reference "#link-set-xdp-off" resolves to more than one schema
export interface LinkSetXdpOffOptions {
  /** `off` detaches any currently attached XDP/BPF program from the given device. */
  off: true;
}