import { OnOffToggle } from '../../../common/constants/attribute-values';

/**
 * Add link can type arguments.
 * @category Interfaces
 */
export interface AddLinkCanTypeArgs {
  /** Sets the nominal speed of the CAN bus in bits per second for the arbitration phase. */
  bitrate?: number;
  /**
   * Specifies the sampling point as a percentage.
   * It defines at which point a bit should be sampled.
   */
  'sample-point'?: number;
  /** Time Quantum. The smallest time unit for the CAN bit timing. */
  tq?: number;
  /** Propagation Segment. The time segment needed to compensate for the physical delay of the signal. */
  'prop-seg'?: number;
  /** Phase Buffer Segment 1. The first segment of the phase buffer, used to adjust the position of the sample point. */
  'phase-seg1'?: number;
  /** Phase Buffer Segment 2. The second segment of the phase buffer, also used for sample point adjustment. */
  'phase-seg2'?: number;
  /** Synchronization Jump Width. The maximum number of time quanta that the bit timing can be adjusted to compensate for oscillator drift. */
  sjw?: number;
  /**
   * Sets the nominal speed for the data phase.
   * @see {@link[bitrate]}
   */
  dbitrate?: number;
  /** @see {@link['sample-point']} */
  'dsample-point'?: number;
  /** @see {@link[tq]} */
  dtq?: number;
  /** @see {@link['prop-seg']} */
  'dprop-seg'?: number;
  /** @see {@link['phase-seg1']} */
  'dphase-seg1'?: number;
  /** @see {@link['phase-seg2']} */
  'dphase-seg2'?: number;
  /** @see {@link[sjw]} */
  dsjw?: number;
  /**
   * Enables the internal loopback mode of the CAN controller.
   * In loopback mode, the CAN controller can send and receive messages internally without the need for an actual CAN network.
   */
  loopback?: OnOffToggle;
  /** Sets the interface to listen-only mode where it will not send any messages. */
  'listen-only'?: OnOffToggle;
  /** This enables or disables triple sampling for receiving. */
  'triple-sampling'?: OnOffToggle;
  /** If enabled, this prevents the controller from automatically retrying to send a message upon an error. */
  'one-shot'?: OnOffToggle;
  /**
   * Enables bus error reporting.
   * When enabled, the CAN interface will generate error messages in the system logs if bus errors are detected.
   */
  'berr-reporting'?: OnOffToggle;
  /** Enables or disables CAN FD support. */
  fd?: OnOffToggle;
  /** Enables or disables non-ISO CAN FD support. */
  'fd-non-iso'?: OnOffToggle;
  /** Assume that the acknowledgment for a transmitted frame is received, even if it is not actually received. */
  'presume-ack'?: OnOffToggle;

  /** Sets the automatic restart delay in milliseconds if the bus is in an error state. */
  'restart-ms'?: number;
  /**
   * Enables automatic restart of the CAN controller after a bus-off condition.
   * A bus-off condition occurs when the CAN controller detects too many errors on the bus, causing it to disconnect from the network to prevent further disruptions.
   * Enabling automatic restart allows the controller to attempt to rejoin the bus after a specified delay.
   */
  restart?: boolean;
}