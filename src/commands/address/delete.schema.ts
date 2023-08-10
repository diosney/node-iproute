import { JSONSchemaType } from 'ajv';

import { SchemaIds }            from '../../common/constants/schemas';
import { AddressDeleteOptions } from './delete.interfaces';
import { AddressScopes }        from '../address.constants';

export const AddressDeleteSchema: JSONSchemaType<AddressDeleteOptions> = {
  $id:        SchemaIds.AddressDelete,
  type:       'object',
  required:   [ 'local', 'dev' ],
  properties: {
    local:      {
      type:   'string',
      format: 'ip-with-optional-mask'
    },
    peer:       {
      type:     'string',
      format:   'ip-with-optional-mask',
      nullable: true
    },
    broadcast:  {
      type:     'string',
      format:   'ip-with-optional-mask',
      nullable: true
    },
    anycast:    {
      type:     'string',
      format:   'ip-with-optional-mask',
      nullable: true
    },
    label:      {
      type:      'string',
      minLength: 1,
      maxLength: 15,
      nullable:  true
    },
    scope:      {
      type:     [ 'string', 'integer' ],
      nullable: true,
      oneOf:    [
        {
          type:     'string',
          enum:     Object.values(AddressScopes) as AddressScopes[],
          nullable: true
        },
        {
          type:     'integer',
          minimum:  0,
          nullable: true
        }
      ]
    },
    dev:        {
      type:      'string',
      minLength: 1,
      maxLength: 15
    },
    mngtmpaddr: {
      type:     'boolean',
      enum:     [ true ],
      nullable: true
    }
  }
};