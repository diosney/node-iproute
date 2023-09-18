import { JSONSchemaType } from 'ajv';

import { SchemaIds } from '../../common/constants/schemas';
import { TunnelAddOptions } from './add.interfaces';
import { TunnelModes } from '../tunnel.constants';

export const TunnelAddSchema: JSONSchemaType<TunnelAddOptions> = {
  $id       : SchemaIds.TunnelAdd,
  type      : 'object',
  required  : [],
  properties: {
    name                 : {
      type     : 'string',
      minLength: 1,
      nullable : true
    },
    mode                 : {
      type    : 'string',
      enum    : Object.values(TunnelModes) as TunnelModes[],
      nullable: true
    },
    remote               : {
      type     : 'string',
      format   : 'ip-or-any',
      minLength: 1,
      nullable : true
    },
    local                : {
      type     : 'string',
      format   : 'ip-or-any',
      minLength: 1,
      nullable : true
    },
    seq                  : {
      type    : 'boolean',
      nullable: true
    },
    iseq                 : {
      type    : 'boolean',
      nullable: true
    },
    oseq                 : {
      type    : 'boolean',
      nullable: true
    },
    key                  : {
      type    : ['string', 'integer'],
      nullable: true,
      oneOf   : [
        {
          type    : 'string',
          format  : 'ipv4',
          nullable: true
        },
        {
          type    : 'integer',
          minimum : 0,
          maximum : 4294967295,
          nullable: true
        }
      ]
    },
    ikey                 : {
      type    : ['string', 'integer'],
      nullable: true,
      oneOf   : [
        {
          type    : 'string',
          format  : 'ipv4',
          nullable: true
        },
        {
          type    : 'integer',
          minimum : 0,
          maximum : 4294967295,
          nullable: true
        }
      ]
    },
    okey                 : {
      type    : ['string', 'integer'],
      nullable: true,
      oneOf   : [
        {
          type    : 'string',
          format  : 'ipv4',
          nullable: true
        },
        {
          type    : 'integer',
          minimum : 0,
          maximum : 4294967295,
          nullable: true
        }
      ]
    },
    csum                 : {
      type    : 'boolean',
      nullable: true
    },
    icsum                : {
      type    : 'boolean',
      nullable: true
    },
    ocsum                : {
      type    : 'boolean',
      nullable: true
    },
    encaplimit           : {
      type    : ['string', 'integer'],
      nullable: true,
      oneOf   : [
        {
          type    : 'string',
          enum    : ['none'],
          nullable: true
        },
        {
          type    : 'integer',
          minimum : 0,
          maximum : 255,
          nullable: true
        }
      ]
    },
    ttl                  : {
      type    : ['string', 'integer'],
      nullable: true,
      oneOf   : [
        {
          type    : 'string',
          enum    : ['inherit'],
          nullable: true
        },
        {
          type    : 'integer',
          minimum : 0,
          maximum : 255,
          nullable: true
        }
      ]
    },
    hoplimit             : {
      type    : ['string', 'integer'],
      nullable: true,
      oneOf   : [
        {
          type    : 'string',
          enum    :[ 'inherit'],
          nullable: true
        },
        {
          type    : 'integer',
          minimum : 0,
          maximum : 255,
          nullable: true
        }
      ]
    },
    tos                  : {
      type     : 'string',
      minLength: 1,
      format   : 'tos',
      nullable : true
    },
    dsfield              : {
      type     : 'string',
      minLength: 1,
      format   : 'tos',
      nullable : true
    },
    tclass               : {
      type     : 'string',
      minLength: 1,
      format   : 'tos',
      nullable : true
    },
    flowlabel            : {
      type     : 'string',
      minLength: 1,
      nullable : true
    },
    pmtudisc             : {
      type    : 'boolean',
      nullable: true
    },
    nopmtudisc           : {
      type    : 'boolean',
      nullable: true
    },
    'ignore-df'          : {
      type    : 'boolean',
      nullable: true
    },
    'noignore-df'        : {
      type    : 'boolean',
      nullable: true
    },
    'allow-localremote'  : {
      type    : 'boolean',
      nullable: true
    },
    'noallow-localremote': {
      type    : 'boolean',
      nullable: true
    },
    dev                  : {
      type     : 'string',
      minLength: 1,
      nullable : true
    }
  }
};