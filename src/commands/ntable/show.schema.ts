import { JSONSchemaType } from 'ajv';

import { SchemaIds } from '../../common/constants/schemas';
import { NtableShowOptions } from './show.interfaces';

export const NtableShowSchema: JSONSchemaType<NtableShowOptions> = {
  $id       : SchemaIds.NtableShow,
  type      : 'object',
  required  : [],
  properties: {
    dev : {
      type     : 'string',
      minLength: 1,
      nullable : true
    },
    name: {
      type     : 'string',
      minLength: 1,
      nullable : true
    }
  }
};