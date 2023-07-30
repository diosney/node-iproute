import { JSONSchemaType } from 'ajv';

import { SchemaIds }            from '../../../../common/constants/schemas';
import { LinkRmnetTypeOptions } from './rmnet.interfaces';

export const LinkRmnetOptionsSchema: JSONSchemaType<LinkRmnetTypeOptions> = {
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