import IpCommand          from '../../common/classes/ip-command';
import { SchemaIds }      from '../../common/constants/schemas';
import { GlobalOptions }  from '../../common/interfaces/common';
import { LinkAddOptions } from './models/add.interfaces';
import { LinkAddSchema }  from './models/add.schemas';

/**
 * Adds a virtual link.
 *
 * @param options        - Parameters options to be passed down to `ip link add`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 *
 * @throws {@link ParametersError} - Throws when passed parameters are invalid.
 * @throws {@link CommandError}    - Throws when the executed command fails.
 */
export async function add(options: LinkAddOptions,
                          globalOptions: GlobalOptions = {}): Promise<IpCommand<LinkAddOptions>> {

  const cmd = ['ip', 'link', 'add'];

  const linkAdd = new IpCommand<LinkAddOptions>(
    SchemaIds.LinkAdd,
    LinkAddSchema,
    options,
    globalOptions,
    cmd);

  await linkAdd.exec();
  return linkAdd;
}

export default {
  add
};
