import { JSONSchemaType } from 'ajv';

import { SchemaIds }            from '../common/constants/schemas';
import { RoutingTablesOptions } from './routing-tables.interfaces';

export const RoutingTablesOptionsSchema: JSONSchemaType<RoutingTablesOptions> = {
  $id:        SchemaIds.RoutingTablesOptions,
  type:       'object',
  required:   [],
  properties: {
    id:   {
      type:     'number',
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