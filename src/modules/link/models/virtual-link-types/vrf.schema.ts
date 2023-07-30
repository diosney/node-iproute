import { JSONSchemaType } from 'ajv';

import { SchemaIds }          from '../../../../common/constants/schemas';
import { AddLinkVrfTypeArgs } from './vrf.interfaces';

export const AddLinkVrfArgsSchema: JSONSchemaType<AddLinkVrfTypeArgs> = {
  $id                 : SchemaIds.LinkAddVrfOptions,
  type                : 'object',
  required            : ['table'],
  additionalProperties: false,
  properties          : {
    table: {
      type   : 'number',
      minimum: 1,
      maximum: 4294967295
    }
  }
};