import { JSONSchemaType } from 'ajv';

import { AddLinkVethVxcanTypeArgs } from './veth-vxcan.interfaces';

export const AddLinkVethVxcanArgsSchema: JSONSchemaType<AddLinkVethVxcanTypeArgs> = {
  type                : 'object',
  required            : [],
  additionalProperties: false,
  properties          : {
    'peer name': {
      type     : 'string',
      minLength: 1,
      nullable : true
    }
  }
};