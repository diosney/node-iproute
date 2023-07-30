import { JSONSchemaType } from 'ajv';

import { SchemaIds }            from '../../../../common/constants/schemas';
import { AddLinkRmnetTypeArgs } from './rmnet.interfaces';

export const AddLinkRmnetArgsSchema: JSONSchemaType<AddLinkRmnetTypeArgs> = {
  $id                 : SchemaIds.LinkAddRmnetOptions,
  type                : 'object',
  required            : ['mux_id'],
  additionalProperties: false,
  properties          : {
    mux_id: {
      type   : 'number',
      minimum: 1,
      maximum: 254
    }
  }
};