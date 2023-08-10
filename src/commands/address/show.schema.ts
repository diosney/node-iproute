import { JSONSchemaType } from 'ajv';

import { SchemaIds }        from '../../common/constants/schemas';
import { VirtualLinkTypes } from '../link.constants';
import { AddressScopes }    from '../address.constants';
import { AddressShowOptions } from './show.interfaces';

export const AddressShowSchema: JSONSchemaType<AddressShowOptions> = {
  $id       : SchemaIds.AddressShow,
  type      : 'object',
  required  : [],
  properties: {
    dev          : {
      type     : 'string',
      minLength: 1,
      maxLength: 15,
      nullable : true
    },
    scope        : {
      type    : ['string', 'integer'],
      nullable: true,
      oneOf   : [
        {
          type    : 'string',
          enum    : Object.values(AddressScopes) as AddressScopes[],
          nullable: true
        },
        {
          type    : 'integer',
          minimum : 0,
          nullable: true
        }
      ]
    },
    to           : {
      type    : 'string',
      format  : 'ip-with-optional-mask',
      nullable: true
    },
    permanent    : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    '-permanent' : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    dynamic      : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    '-dynamic'   : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    secondary    : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    '-secondary' : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    primary      : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    '-primary'   : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    tentative    : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    '-tentative' : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    deprecated   : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    '-deprecated': {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    dadfailed    : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    '-dadfailed' : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    temporary    : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    '-temporary' : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
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
    },
    label        : {
      type     : 'string',
      minLength: 1,
      nullable : true
    },
    master       : {
      type     : 'string',
      minLength: 1,
      nullable : true
    },
    type         : {
      type    : 'string',
      enum    : Object.values(VirtualLinkTypes) as VirtualLinkTypes[],
      nullable: true
    },
    vrf          : {
      type     : 'string',
      minLength: 1,
      nullable : true
    },
    up           : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    }
  }
};