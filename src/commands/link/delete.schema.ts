import { JSONSchemaType } from 'ajv';

import { SchemaIds } from '../../common/constants/schemas';
import { LinkDeleteOptions } from './delete.interfaces';
import { typePropertiesSchema } from './add.schema';

export const LinkDeleteSchema: JSONSchemaType<LinkDeleteOptions> = {
  $id:        SchemaIds.LinkDelete,
  type:       'object',
  required:   [],
  properties: {
    dev:   {
      type:      'string',
      minLength: 1,
      keyless:   true,
      nullable:  true
    },
    group: {
      type:     'integer',
      minimum:  0,
      nullable: true
    },
    type:  {
      type:       'object',
      nullable:   true,
      properties: typePropertiesSchema
    }
  }
};