import { JSONSchemaType } from 'ajv';

import { SchemaIds }                from '../../../../common/constants/schemas';
import { AddLinkVethVxcanTypeArgs } from './veth-vxcan.interfaces';

export const AddLinkVethVxcanArgsSchema: JSONSchemaType<AddLinkVethVxcanTypeArgs> = {
  $id                 : SchemaIds.LinkAddVethVxcanOptions,
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