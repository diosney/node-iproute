/** `off` detaches any currently attached XDP/BPF program from the given device. */
// TODO: Error: reference "#link-set-xdp-off" resolves to more than one schema
export interface LinkSetXdpOffOptions {
  off: true;
}