import { JSONSchemaType } from 'ajv';

import { AddLinkVrfTypeArgs } from './vrf.interfaces';

export const AddLinkVrfArgsSchema: JSONSchemaType<AddLinkVrfTypeArgs> = {
  type                : 'object',
  required            : ['table'],
  additionalProperties: false,
  properties          : {
    table: {
      type   : 'integer',
      minimum: 1,
      maximum: 4294967295
    }
  }
};