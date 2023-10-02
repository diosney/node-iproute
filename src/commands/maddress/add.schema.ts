import { JSONSchemaType } from 'ajv';

import { SchemaIds } from '../../common/constants/schemas';
import { MaddressAddOptions } from './add.interfaces';

export const MaddressAddSchema: JSONSchemaType<MaddressAddOptions> = {
  $id       : SchemaIds.MaddressAdd,
  type      : 'object',
  required  : ['address_', 'dev'],
  properties: {
    address_: {
      type     : 'string',
      minLength: 1,
      format   : 'mac'
    },
    dev     : {
      type     : 'string',
      minLength: 1
    }
  }
};