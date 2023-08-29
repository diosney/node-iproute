import { OnOffToggle }                 from '../../../common/constants/attribute-values';
import { MacsecValidationModeOptions } from '../../link.constants';

/**
 * Add link macsec type arguments.
 * @category Interfaces
 */
export interface AddLinkMacsecTypeArgs {
  /** Sets the system identifier component of secure channel for this MACsec device. */
  address?: string;
  /**
   * Sets the port number component of secure channel for this MACsec device, in a range
   * from 1 to 65535 inclusive.
   *
   * Numbers with a leading " 0 " or " 0x " are interpreted as octal and hexadecimal, respectively.
   */
  port?: number;
  /**
   * Sets the secure channel identifier for this MACsec device.
   * SCI is a 64bit wide number in hexadecimal format.
   */
  sci?: string;
  /** Defines the cipher suite to use. */
  cipher?: string;
  /** Sets the length of the Integrity Check Value (ICV). */
  icvlen?: number;
  /** Switches between authenticated encryption, or authenticity mode only. */
  encrypt?: OnOffToggle;
  /** Specifies whether the SCI is included in every packet, or only when it is necessary. */
  send_sci?: OnOffToggle;
  /** Sets the End Station bit. */
  end_station?: OnOffToggle;
  /**  Sets the Single Copy Broadcast bit. */
  scb?: OnOffToggle;
  /** Enables MACsec protection on the device. */
  protect?: OnOffToggle;
  /** Enables replay protection on the device. */
  replay?: OnOffToggle;
  /** Sets the size of the replay window. */
  window?: number;
  /** Sets the validation mode on the device. */
  validate?: MacsecValidationModeOptions;
  /** Sets the active secure association for transmission. */
  encodingsa?: number;
}
