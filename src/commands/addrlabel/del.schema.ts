import { JSONSchemaType } from 'ajv';

import { SchemaIds } from '../../common/constants/schemas';
import { AddrlabelDelOptions } from './del.interfaces';

export const AddrlabelDelSchema: JSONSchemaType<AddrlabelDelOptions> = {
  $id:        SchemaIds.AddrlabelDel,
  type:       'object',
  required:   ['prefix'],
  properties: {
    prefix: {
      type:      'string',
      minLength: 1,
      format:    'ip-with-required-mask'
    },
    dev:    {
      type:      'string',
      minLength: 1,
      nullable:  true
    },
    label:  {
      type:     'integer',
      minimum:  0,
      nullable: true
    }
  }
};