import { JSONSchemaType } from 'ajv';

import { DontFragmentFlagValues } from '../add.constants';
import { SchemaIds }              from '../../../../common/constants/schemas';

import {
  LinkVxlanTypeOptions
} from './vxlan.interfaces';

export const LinkVxlanOptionsSchema: JSONSchemaType<LinkVxlanTypeOptions> = {
  $id                 : SchemaIds.LinkAddVxlanOptions,
  type                : 'object',
  required            : ['id'],
  additionalProperties: false,
  properties          : {
    id              : {
      type   : 'number',
      minimum: 1,
      maximum: 16777215
    },
    dev             : {
      type     : 'string',
      minLength: 1,
      nullable : true
    },
    group           : {
      type    : 'string',
      format  : 'ip',
      nullable: true
    },
    remote          : {
      type    : 'string',
      format  : 'ip',
      nullable: true
    },
    local           : {
      type    : 'string',
      format  : 'ip',
      nullable: true
    },
    ttl             : {
      type    : 'number',
      minimum : 0,
      nullable: true
    },
    tos             : {
      type    : 'number',
      nullable: true,
      minimum : 0,
      maximum : 255
    },
    df              : {
      type    : 'string',
      enum    : Object.values(DontFragmentFlagValues) as DontFragmentFlagValues[],
      nullable: true
    },
    flowlabel       : {
      type    : 'number',
      nullable: true,
      minimum : 0,
      maximum : 1048575
    },
    dstport         : {
      type    : 'number',
      nullable: true,
      minimum : 1,
      maximum : 65535
    },
    srcport         : {
      type    : 'array',
      nullable: true,
      items   : [
        {
          type   : 'number',
          minimum: 1,
          maximum: 65535
        },
        {
          type   : 'number',
          minimum: 1,
          maximum: 65535
        }
      ],
      minItems: 2,
      maxItems: 2
    },
    learning        : {
      type    : 'boolean',
      nullable: true
    },
    nolearning      : {
      type    : 'boolean',
      nullable: true
    },
    rsc             : {
      type    : 'boolean',
      nullable: true
    },
    norsc           : {
      type    : 'boolean',
      nullable: true
    },
    proxy           : {
      type    : 'boolean',
      nullable: true
    },
    noproxy         : {
      type    : 'boolean',
      nullable: true
    },
    l2miss          : {
      type    : 'boolean',
      nullable: true
    },
    nol2miss        : {
      type    : 'boolean',
      nullable: true
    },
    l3miss          : {
      type    : 'boolean',
      nullable: true
    },
    nol3miss        : {
      type    : 'boolean',
      nullable: true
    },
    udpcsum         : {
      type    : 'boolean',
      nullable: true
    },
    noudpcsum       : {
      type    : 'boolean',
      nullable: true
    },
    udp6zerocsumtx  : {
      type    : 'boolean',
      nullable: true
    },
    noudp6zerocsumtx: {
      type    : 'boolean',
      nullable: true
    },
    udp6zerocsumrx  : {
      type    : 'boolean',
      nullable: true
    },
    noudp6zerocsumrx: {
      type    : 'boolean',
      nullable: true
    },
    ageing          : {
      type    : 'number',
      nullable: true,
      minimum : 0
    },
    maxaddress      : {
      type    : 'number',
      nullable: true,
      minimum : 0
    },
    external        : {
      type    : 'boolean',
      nullable: true
    },
    noexternal      : {
      type    : 'boolean',
      nullable: true
    },
    gbp             : {
      type    : 'boolean',
      nullable: true
    },
    gpe             : {
      type    : 'boolean',
      nullable: true
    }
  }
};