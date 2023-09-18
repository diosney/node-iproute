import { AddrlabelAddOptions } from './add.interfaces';

/**
 * Addrlabel delete options.
 * @category Interfaces
 */
export type AddrlabelDelOptions = Partial<Pick<AddrlabelAddOptions, 'label'>> & Omit<AddrlabelAddOptions, 'label'>;
