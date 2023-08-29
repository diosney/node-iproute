/**
 * Represents a simple toggle state, either `on` or `off`.
 * @category Constants
 */
export enum OnOffToggle {
  On  = 'on',
  Off = 'off'
}

/**
 * Represents a binary state for enabling or disabling a feature or functionality.
 * @category Constants
 */
export enum EnableDisableToggle {
  Enable  = 1,
  Disable = 0
}

/**
 * Represents the state for enabling or disabling a feature, expressed as strings.
 * @category Constants
 */
export enum EnableDisableAsStringToggle {
  Enable  = 'enable',
  Disable = 'disable'
}

/**
 * Represents the state for enabling, disabling, or setting a feature to automatic mode.
 * @category Constants
 */
export enum EnableDisableAutoToggle {
  Enable  = 'enable',
  Disable = 'disable',
  Auto    = 'auto'
}