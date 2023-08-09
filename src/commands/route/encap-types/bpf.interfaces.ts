export interface AddRouteBpfEncapArgs {
  /** XXX */
  bpf: true;
  /** BPF program to execute for incoming packets. */
  in?: string;
  /** BPF program to execute for outgoing packets. */
  out?: string;
  /** BPF program to execute for transmitted packets. */
  xmit?: string;
  /** Size of header BPF program will attach (xmit). */
  headroom?: number;
}