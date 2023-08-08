import { JSONSchemaType } from 'ajv';

import { EnableDisableAsStringToggle }    from '../../common/constants/attribute-values';
import { SchemaIds }                      from '../../common/constants/schemas';
import { AddressFamilies, AddressScopes } from '../address/add.constants';
import { RoutePreferences }               from './add.constants';
import { RouteAddOptions }                from './add.interfaces';
import { RouteBpfEncapArgsSchema }        from './encap-types/bpf.schema';
import { RouteIoam6EncapArgsSchema }      from './encap-types/ioam6.schema';
import { RouteIpEncapArgsSchema }         from './encap-types/ip.schema';
import { RouteMplsEncapArgsSchema }       from './encap-types/mpls.schema';
import { RouteSeg6EncapArgsSchema }       from './encap-types/seg6.schema';
import { RouteSeg6LocalEncapArgsSchema }  from './encap-types/seg6local.schema';

import {
  RouteRoutingTables,
  RoutingTableProtocols,
  RoutingTableTypes
} from './show.constants';

export const RouteAddSchema: JSONSchemaType<RouteAddOptions> = {
  $id       : SchemaIds.RouteAdd,
  type      : 'object',
  required  : ['to_'],
  properties: {
    type_          : {
      type    : 'string',
      enum    : Object.values(RoutingTableTypes) as RoutingTableTypes[],
      default : RoutingTableTypes.Unicast,
      nullable: true
    },
    to_            : {
      type  : 'string',
      format: 'ip-with-optional-mask-and-all-and-default-values'
    },
    tos               : {
      type    : 'integer',
      nullable: true,
      minimum : 0,
      maximum : 255
    },
    dsfield           : {
      type    : 'integer',
      nullable: true,
      minimum : 0,
      maximum : 255
    },
    table             : {
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
    proto             : {
      type    : ['string', 'integer'],
      nullable: true,
      oneOf   : [
        {
          type     : 'string',
          enum     : Object.values(RoutingTableProtocols) as RoutingTableProtocols[],
          minLength: 1,
          nullable : true
        },
        {
          type    : 'integer',
          minimum : 0,
          nullable: true
        }
      ]
    },
    protocol          : {
      type    : ['string', 'integer'],
      nullable: true,
      oneOf   : [
        {
          type     : 'string',
          enum     : Object.values(RoutingTableProtocols) as RoutingTableProtocols[],
          minLength: 1,
          nullable : true
        },
        {
          type    : 'integer',
          minimum : 0,
          nullable: true
        }
      ]
    },
    scope             : {
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
    metric            : {
      type    : 'integer',
      minimum : 0,
      nullable: true
    },
    preference        : {
      type    : 'integer',
      minimum : 0,
      nullable: true
    },
    'ttl-propagate'   : {
      type    : 'string',
      enum    : Object.values(EnableDisableAsStringToggle) as EnableDisableAsStringToggle[],
      nullable: true
    },
    encap             : {
      type    : 'object',
      nullable: true,
      oneOf   : [
        RouteBpfEncapArgsSchema,
        RouteIoam6EncapArgsSchema,
        RouteIpEncapArgsSchema,
        RouteMplsEncapArgsSchema,
        RouteSeg6EncapArgsSchema,
        RouteSeg6LocalEncapArgsSchema
      ]
    },
    via               : {
      type      : 'object',
      required  : ['address'],
      nullable  : true,
      properties: {
        family : {
          type    : 'string',
          enum    : Object.values(AddressFamilies) as AddressFamilies[],
          nullable: true
        },
        address: {
          type  : 'string',
          format: 'ip-with-optional-mask'
        }
      }
    },
    dev               : {
      type     : 'string',
      minLength: 1,
      nullable : true
    },
    weight            : {
      type    : 'number',
      minimum : 1,
      nullable: true
    },
    onlink            : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    pervasive         : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    nhid              : {
      type    : 'integer',
      minimum : 0,
      nullable: true
    },
    mtu               : {
      type    : 'integer',
      minimum : 1,
      nullable: true
    },
    advmss            : {
      type    : 'integer',
      minimum : 1,
      nullable: true
    },
    as                : {
      type      : 'object',
      required  : ['address'],
      nullable  : true,
      properties: {
        to     : {
          type    : 'boolean',
          enum    : [true],
          nullable: true
        },
        address: {
          type  : 'string',
          format: 'ip'
        }
      }
    },
    rtt               : {
      type    : ['string', 'integer'],
      nullable: true,
      oneOf   : [
        {
          type    : 'string',
          format  : 'time-with-unit',
          nullable: true
        },
        {
          type    : 'integer',
          minimum : 0,
          nullable: true
        }
      ]
    },
    rttvar            : {
      type    : ['string', 'integer'],
      nullable: true,
      oneOf   : [
        {
          type    : 'string',
          format  : 'time-with-unit',
          nullable: true
        },
        {
          type    : 'integer',
          minimum : 0,
          nullable: true
        }
      ]
    },
    reordering        : {
      type    : 'integer',
      minimum : 0,
      nullable: true
    },
    window            : {
      type    : 'integer',
      minimum : 0,
      nullable: true
    },
    cwnd              : {
      type    : 'integer',
      minimum : 0,
      nullable: true
    },
    ssthresh          : {
      type    : 'integer',
      minimum : 0,
      nullable: true
    },
    realms            : {
      type     : 'string',
      minLength: 1,
      nullable : true
    },
    rto_min           : {
      type    : ['string', 'integer'],
      nullable: true,
      oneOf   : [
        {
          type    : 'string',
          format  : 'time-with-unit',
          nullable: true
        },
        {
          type    : 'integer',
          minimum : 0,
          nullable: true
        }
      ]
    },
    initcwnd          : {
      type    : 'integer',
      minimum : 0,
      nullable: true
    },
    initrwnd          : {
      type    : 'integer',
      minimum : 0,
      nullable: true
    },
    features          : {
      type      : 'object',
      required  : ['ecn'],
      nullable  : true,
      properties: {
        ecn: {
          type: 'boolean',
          enum: [true]
        }
      }
    },
    quickack          : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    congctl           : {
      type     : 'string',
      minLength: 1,
      nullable : true
    },
    pref              : {
      type    : 'string',
      enum    : Object.values(RoutePreferences) as RoutePreferences[],
      nullable: true
    },
    expires           : {
      type    : 'integer',
      minimum : 0,
      nullable: true
    },
    fastopen_no_cookie: {
      type    : 'boolean',
      nullable: true
    },
    nexthops_     : {
      type    : 'array',
      nullable: true,
      minItems: 1,
      items   : {
        type      : 'object',
        properties: {
          nexthop: {
            type    : 'boolean',
            enum    : [true],
            default : true,
            nullable: true
          },
          via    : {
            type      : 'object',
            required  : ['address'],
            nullable  : true,
            properties: {
              family : {
                type    : 'string',
                enum    : Object.values(AddressFamilies) as AddressFamilies[],
                nullable: true
              },
              address: {
                type  : 'string',
                format: 'ip-with-optional-mask'
              }
            }
          },
          dev    : {
            type     : 'string',
            minLength: 1,
            nullable : true
          },
          weight : {
            type    : 'number',
            minimum : 1,
            nullable: true
          }
        }
      }
    }
  },
  // TODO: Due `JSONSchema` bug. See https://github.com/ajv-validator/ajv/issues/2317
  anyOf: []
};