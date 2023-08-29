/**
 * Global options for all commands.
 * @category Interfaces
 */
export interface GlobalOptions {
  /** @hidden */
  [index: string]: boolean | string | undefined;
  /**
   * When provided, will prepend the command with `sudo`, which effectively instructs
   * the OS to execute the command with elevated privileges.
   */
  sudo?: boolean;
  /**
   * If set, the command won't be executed, just the command line will be built.
   * Useful for debugging since the command will return a Command class, which provides access
   * to Command.cmdToExec for debugging.
   */
  dryRun?: boolean;
  /** Required for certain commands that need a file path to create a file or consume it. */
  filePath?: string;

  /** @hidden */
  '-details'?: true;
  /** @hidden */
  '-statistics'?: true;
  /** @hidden */
  '-json'?: true;
}

/**
 * An empty interface.
 * @category Interfaces
 */
export interface Empty {
}

/**
 * Global options with required file path.
 * @category Interfaces
 */
export type FilePathRequiredGlobalOption = Required<Pick<GlobalOptions, 'filePath'>>;
/**
 * Global options with required file path.
 * @category Interfaces
 */
export type GlobalOptionsWithRequiredFilePath = GlobalOptions & FilePathRequiredGlobalOption;