import { JSONSchemaType } from 'ajv';

import { IpoIbModes }           from '../../link.constants';
import { AddLinkIpoibTypeArgs } from './ipoib.interfaces';

export const AddLinkIpoibArgsSchema: JSONSchemaType<AddLinkIpoibTypeArgs> = {
  type                : 'object',
  required            : [],
  additionalProperties: false,
  properties          : {
    pkey: {
      type    : 'string',
      format  : '4-hex',
      nullable: true
    },
    mode: {
      type    : 'string',
      enum    : Object.values(IpoIbModes) as IpoIbModes[],
      nullable: true
    }
  }
};