import { JSONSchemaType } from 'ajv';

import { SchemaIds }          from '../../../../common/constants/schemas';
import { LinkVrfTypeOptions } from './vrf.interfaces';

export const LinkVrfOptionsSchema: JSONSchemaType<LinkVrfTypeOptions> = {
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