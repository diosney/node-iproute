import { JSONSchemaType } from 'ajv';

import { AddLinkRmnetTypeArgs } from './rmnet.interfaces';

export const AddLinkRmnetArgsSchema: JSONSchemaType<AddLinkRmnetTypeArgs> = {
  type                : 'object',
  required            : ['mux_id'],
  additionalProperties: false,
  properties          : {
    mux_id: {
      type   : 'integer',
      minimum: 1,
      maximum: 254
    }
  }
};