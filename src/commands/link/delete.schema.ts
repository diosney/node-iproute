import { JSONSchemaType } from 'ajv';

import { VirtualLinkTypes }  from '../link.constants';
import { SchemaIds }         from '../../common/constants/schemas';
import { LinkDeleteOptions } from './delete.interfaces';
import { typeArgsSchemas }   from './add.schema';

export const LinkDeleteSchema: JSONSchemaType<LinkDeleteOptions> = {
  $id:        SchemaIds.LinkDelete,
  type:       'object',
  required:   [ 'type' ],
  properties: {
    dev_:  {
      type:      'string',
      minLength: 1,
      nullable:  true
    },
    group: {
      type:     'integer',
      minimum:  0,
      nullable: true
    },
    type:  {
      type: 'string',
      enum: Object.values(VirtualLinkTypes) as VirtualLinkTypes[]
    },
    type_: {
      type:     'object',
      nullable: true,
      anyOf:    typeArgsSchemas
    }
  }
};