export interface GlobalOptions {
  [index: string]: any;

  sudo?: boolean;
  dryRun?: boolean;

  '-details'?: true;
  '-statistics'?: true;
  '-json'?: true;
}