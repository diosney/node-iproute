import { JSONSchemaType } from 'ajv';

import { SchemaIds }            from '../../../common/constants/schemas';
import { IpoIbModes }           from '../add.constants';
import { AddLinkIpoibTypeArgs } from './ipoib.interfaces';

export const AddLinkIpoIbArgsSchema: JSONSchemaType<AddLinkIpoibTypeArgs> = {
  $id                 : SchemaIds.LinkAddIpoibOptions,
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