export interface GlobalOptions {
  [index: string]: any;

  sudo?: boolean;
  dryRun?: boolean;
  filePath?: string;

  '-details'?: true;
  '-statistics'?: true;
  '-json'?: true;
}

export interface EmptyOptions {
}

export type FilePathRequiredGlobalOption = Required<Pick<GlobalOptions, 'filePath'>>;
export type GlobalOptionsWithRequiredFilePath = GlobalOptions & FilePathRequiredGlobalOption;