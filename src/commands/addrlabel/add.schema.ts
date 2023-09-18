import { JSONSchemaType } from 'ajv';

import { SchemaIds } from '../../common/constants/schemas';
import { AddrlabelAddOptions } from './add.interfaces';

export const AddrlabelAddSchema: JSONSchemaType<AddrlabelAddOptions> = {
  $id:        SchemaIds.AddrlabelAdd,
  type:       'object',
  required:   ['prefix', 'label'],
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
    }
  }
};