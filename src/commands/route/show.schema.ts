import { JSONSchemaType } from 'ajv';

import { SchemaIds }     from '../../common/constants/schemas';
import { AddressScopes } from '../address/add.constants';

import {
  RouteRoutingTables,
  RoutingTableProtocols,
  RoutingTableTypes
} from './show.constants';

import { RouteShowOptions } from './show.interfaces';

export const RouteShowSchema: JSONSchemaType<RouteShowOptions> = {
  $id       : SchemaIds.RouteShow,
  type      : 'object',
  required  : [],
  properties: {
    to      : {
      type    : 'string',
      format  : 'ip-with-required-mask-and-all-and-default-values',
      nullable: true
    },
    root    : {
      type    : 'string',
      format  : 'ip-with-required-mask-and-all-and-default-values',
      nullable: true
    },
    match   : {
      type    : 'string',
      format  : 'ip-with-required-mask-and-all-and-default-values',
      nullable: true
    },
    exact   : {
      type    : 'string',
      format  : 'ip-with-required-mask-and-all-and-default-values',
      nullable: true
    },
    tos     : {
      type    : 'integer',
      nullable: true,
      minimum : 0,
      maximum : 255
    },
    dsfield : {
      type    : 'integer',
      nullable: true,
      minimum : 0,
      maximum : 255
    },
    table   : {
      type    : ['string', 'integer'],
      nullable: true,
      oneOf   : [
        {
          type    : 'string',
          enum    : Object.values(RouteRoutingTables) as RouteRoutingTables[],
          nullable: true
        },
        {
          type    : 'integer',
          minimum : 0,
          nullable: true
        }
      ]
    },
    vrf     : {
      type     : 'string',
      minLength: 1,
      nullable : true
    },
    cloned  : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    cached  : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    from    : {
      type    : 'string',
      format  : 'ip-with-required-mask-and-all-and-default-values',
      nullable: true
    },
    protocol: {
      type    : ['string', 'integer'],
      nullable: true,
      oneOf   : [
        {
          type    : 'string',
          enum    : Object.values(RoutingTableProtocols) as RoutingTableProtocols[],
          nullable: true
        },
        {
          type    : 'integer',
          minimum : 0,
          nullable: true
        }
      ]
    },
    proto   : {
      type    : ['string', 'integer'],
      nullable: true,
      oneOf   : [
        {
          type    : 'string',
          enum    : Object.values(RoutingTableProtocols) as RoutingTableProtocols[],
          nullable: true
        },
        {
          type    : 'integer',
          minimum : 0,
          nullable: true
        }
      ]
    },
    type    : {
      type    : 'string',
      enum    : Object.values(RoutingTableTypes) as RoutingTableTypes[],
      nullable: true
    },
    scope   : {
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
    dev     : {
      type     : 'string',
      minLength: 1,
      nullable : true
    },
    via     : {
      type     : 'string',
      format   : 'ip-with-optional-family-prefix',
      minLength: 1,
      nullable : true
    },
    src     : {
      type    : 'string',
      format  : 'ip',
      nullable: true
    },
    realm   : {
      type    : 'integer',
      minimum : 0,
      nullable: true
    },
    realms  : {
      type    : 'string',
      pattern : '^[0-9]+(/[0-9]+)?$',
      nullable: true
    }
  }
};