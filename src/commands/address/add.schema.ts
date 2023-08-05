import { JSONSchemaType } from 'ajv';

import { SchemaIds }         from '../../common/constants/schemas';
import { AddressScopes }     from './add.constants';
import { AddressAddOptions } from './add.interfaces';

export const AddressAddSchema: JSONSchemaType<AddressAddOptions> = {
  $id       : SchemaIds.AddressAdd,
  type      : 'object',
  required  : ['local', 'dev'],
  properties: {
    local        : {
      type  : 'string',
      format: 'ip-with-optional-mask'
    },
    dev          : {
      type     : 'string',
      minLength: 1,
      maxLength: 15
    },
    peer         : {
      type    : 'string',
      format  : 'ip-with-optional-mask',
      nullable: true
    },
    broadcast    : {
      type    : 'string',
      format  : 'ip-with-optional-mask',
      nullable: true
    },
    label        : {
      type     : 'string',
      minLength: 1,
      maxLength: 15,
      nullable : true
    },
    scope        : {
      type    : ['string', 'number'],
      nullable: true,
      oneOf   : [
        {
          type    : 'string',
          enum    : Object.values(AddressScopes) as AddressScopes[],
          nullable: true
        },
        {
          type    : 'number',
          minimum : 0,
          nullable: true
        }
      ]
    },
    metric       : {
      type    : 'number',
      minimum : 0,
      nullable: true
    },
    valid_lft    : {
      type    : ['string', 'number'],
      nullable: true,
      oneOf   : [
        {
          type    : 'string',
          enum    : ['forever'],
          nullable: true
        },
        {
          type    : 'number',
          minimum : 0,
          nullable: true
        }
      ]
    },
    preferred_lft: {
      type    : ['string', 'number'],
      nullable: true,
      oneOf   : [
        {
          type    : 'string',
          enum    : ['forever'],
          nullable: true
        },
        {
          type    : 'number',
          minimum : 0,
          nullable: true
        }
      ]
    },
    home         : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    mngtmpaddr   : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    nodad        : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    optimistic   : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    noprefixroute: {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    autojoin     : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    }
  }
};