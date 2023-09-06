import { JSONSchemaType } from 'ajv';

import { AddLinkXfrmTypeArgs } from './xfrm.interfaces';

export const AddLinkXfrmArgsSchema: JSONSchemaType<AddLinkXfrmTypeArgs> = {
  type                : 'object',
  required            : ['dev'],
  additionalProperties: false,
  properties          : {
    dev  : {
      type     : 'string',
      minLength: 1
    },
    if_id: {
      type    : 'integer',
      minimum : 1,
      maximum : 4294967295,
      nullable: true
    }
  }
};