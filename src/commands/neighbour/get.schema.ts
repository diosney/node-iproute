import { JSONSchemaType } from 'ajv';

import { SchemaIds } from '../../common/constants/schemas';
import { NeighbourGetOptions } from './get.interfaces';

export const NeighbourGetSchema: JSONSchemaType<NeighbourGetOptions> = {
  $id:        SchemaIds.RouteGet,
  type:       'object',
  required:   ['to', 'dev'],
  properties: {
    proxy: {
      type:     'boolean',
      enum:     [true],
      nullable: true
    },
    to:    {
      type:      'string',
      minLength: 1,
      format:    'ip'
    },
    dev:   {
      type:      'string',
      minLength: 1
    }
  }
};