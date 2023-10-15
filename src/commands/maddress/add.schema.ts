import { JSONSchemaType } from 'ajv';

import { SchemaIds } from '../../common/constants/schemas';
import { MaddressAddOptions } from './add.interfaces';

export const MaddressAddSchema: JSONSchemaType<MaddressAddOptions> = {
  $id:        SchemaIds.MaddressAdd,
  type:       'object',
  required:   ['address', 'dev'],
  properties: {
    address: {
      type:      'string',
      minLength: 1,
      format:    'mac',
      keyless:   true
    },
    dev:     {
      type:      'string',
      minLength: 1
    }
  }
};