import { JSONSchemaType } from 'ajv';

import { SchemaIds }           from '../../../common/constants/schemas';
import { AddressFlushOptions } from './flush.interfaces';

export const AddressFlushSchema: JSONSchemaType<AddressFlushOptions> = {
  $id       : SchemaIds.AddressFlush,
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
      type     : 'string',
      minLength: 1,
      nullable : true
    },
    metric       : {
      type    : 'number',
      minimum : 0,
      nullable: true
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
    up           : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    }
  }
};