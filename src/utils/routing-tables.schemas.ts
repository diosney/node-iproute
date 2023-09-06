import { JSONSchemaType } from 'ajv';

import { SchemaIds } from '../common/constants/schemas';
import { RoutingTableOptions } from './routing-tables.interfaces';

export const RoutingTableOptionsSchema: JSONSchemaType<RoutingTableOptions> = {
  $id:        SchemaIds.RoutingTablesOptions,
  type:       'object',
  required:   [],
  properties: {
    id:   {
      type:     'integer',
      minimum:  0,
      nullable: true
    },
    name: {
      type:      'string',
      minLength: 1,
      nullable:  true
    }
  }
};