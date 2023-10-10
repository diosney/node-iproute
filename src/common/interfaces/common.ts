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
  /** Required for certain commands that need `stdin` input. */
  stdin?: string;
  /**
   * Shortcut for `-family inet`.
   *
   * @remarks
   * Specifies the protocol family to use.
   */
  '-4'?: true;
  /**
   * Shortcut for `-family inet6`.
   *
   * @remarks
   * Specifies the protocol family to use.
   */
  '-6'?: true;
  /**
   * Shortcut for `-family bridge`.
   *
   * @remarks
   * Specifies the protocol family to use.
   */
  '-B'?: true;
  /**
   * Shortcut for `-family mpls`.
   *
   * @remarks
   * Specifies the protocol family to use.
   */
  '-M'?: true;
  /**
   * Shortcut for `-family link`.
   *
   * @remarks
   * Specifies the protocol family to use.
   */
  '-0'?: true;
  /**
   * Output more detailed information.
   * @hidden
   */
  '-details'?: true;
  /**
   * Output more information.
   * @hidden
   */
  '-statistics'?: true;
  /**
   * Output results in JavaScript Object Notation (JSON).
   * @hidden
   */
  '-json'?: true;
  /**
   * Output each record on a single line, replacing line feeds with the '\' character.
   * This is convenient when you want to count records with `wc(1)` or to `grep(1)` the output.
   * @hidden
   */
  '-oneline'?: true;
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

/**
 * Global options with required stdin.
 * @category Interfaces
 */
export type StdinRequiredGlobalOption = Required<Pick<GlobalOptions, 'stdin'>>;

/**
 * Global options with required stdin.
 * @category Interfaces
 */
export type GlobalOptionsWithRequiredStdin = GlobalOptions & StdinRequiredGlobalOption;