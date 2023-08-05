import { JSONSchemaType } from 'ajv';

import { SchemaIds }            from '../../../common/constants/schemas';
import { AddressDeleteOptions } from './delete.interfaces';

export const AddressDeleteSchema: JSONSchemaType<AddressDeleteOptions> = {
  $id       : SchemaIds.AddressDelete,
  type      : 'object',
  required  : ['local', 'dev'],
  properties: {
    local: {
      type  : 'string',
      format: 'ip-with-optional-mask'
    },
    dev  : {
      type     : 'string',
      minLength: 1,
      maxLength: 15
    }
  }
};