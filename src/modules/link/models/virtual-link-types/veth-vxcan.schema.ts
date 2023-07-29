import { JSONSchemaType } from 'ajv';

import { SchemaIds }                from '../../../../common/constants/schemas';
import { LinkVethVxcanTypeOptions } from './veth-vxcan.interfaces';

export const LinkVethVxcanOptionsSchema: JSONSchemaType<LinkVethVxcanTypeOptions> = {
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