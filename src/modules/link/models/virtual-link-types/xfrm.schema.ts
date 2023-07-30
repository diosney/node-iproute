import { JSONSchemaType } from 'ajv';

import { SchemaIds }           from '../../../../common/constants/schemas';
import { LinkXfrmTypeOptions } from './xfrm.interfaces';

export const LinkXfrmOptionsSchema: JSONSchemaType<LinkXfrmTypeOptions> = {
  $id                 : SchemaIds.LinkAddXfrmOptions,
  type                : 'object',
  required            : ['dev'],
  additionalProperties: false,
  properties          : {
    dev  : {
      type     : 'string',
      minLength: 1
    },
    if_id: {
      type    : 'number',
      minimum : 1,
      maximum : 4294967295,
      nullable: true
    }
  }
};