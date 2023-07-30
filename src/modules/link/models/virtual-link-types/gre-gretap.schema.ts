import { JSONSchemaType } from 'ajv';

import { SecondaryUdpEncapsulations } from '../add.constants';
import { SchemaIds }                from '../../../../common/constants/schemas';
import { AddLinkGreGretapTypeArgs } from './gre-gretap.interfaces';

export const AddGreGretapArgsSchema: JSONSchemaType<AddLinkGreGretapTypeArgs> = {
  $id                 : SchemaIds.LinkAddGreGretapOptions,
  type                : 'object',
  required            : ['remote', 'local'],
  additionalProperties: false,
  properties          : {
    remote           : {
      type  : 'string',
      format: 'ip'
    },
    local            : {
      type  : 'string',
      format: 'ip'
    },
    seq              : {
      type    : 'boolean',
      nullable: true
    },
    iseq             : {
      type    : 'boolean',
      nullable: true
    },
    noiseq           : {
      type    : 'boolean',
      nullable: true
    },
    oseq             : {
      type    : 'boolean',
      nullable: true
    },
    nooseq           : {
      type    : 'boolean',
      nullable: true
    },
    key              : {
      type    : 'number',
      minimum : 0,
      maximum : 4294967295,
      nullable: true
    },
    nokey            : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    ikey             : {
      type    : 'number',
      minimum : 0,
      maximum : 4294967295,
      nullable: true
    },
    noikey           : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    okey             : {
      type    : 'number',
      minimum : 0,
      maximum : 4294967295,
      nullable: true
    },
    nookey           : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    csum             : {
      type    : 'boolean',
      nullable: true
    },
    icsum            : {
      type    : 'boolean',
      nullable: true
    },
    noicsum          : {
      type    : 'boolean',
      nullable: true
    },
    ocsum            : {
      type    : 'boolean',
      nullable: true
    },
    noocsum          : {
      type    : 'boolean',
      nullable: true
    },
    tos              : {
      type    : 'number',
      nullable: true,
      minimum : 0,
      maximum : 255
    },
    ttl              : {
      type    : 'number',
      minimum : 0,
      maximum : 255,
      nullable: true
    },
    pmtudisc         : {
      type    : 'boolean',
      nullable: true
    },
    nopmtudisc       : {
      type    : 'boolean',
      nullable: true
    },
    'ignore-df'      : {
      type    : 'boolean',
      nullable: true
    },
    'noignore-df'    : {
      type    : 'boolean',
      nullable: true
    },
    dev              : {
      type     : 'string',
      minLength: 1,
      nullable : true
    },
    encap            : {
      type    : 'string',
      enum    : Object.values(SecondaryUdpEncapsulations) as SecondaryUdpEncapsulations[],
      nullable: true
    },
    'encap-sport'    : {
      type    : ['string', 'number'],
      nullable: true,
      oneOf   : [
        {
          type    : 'string',
          enum    : ['auto'],
          nullable: true
        },
        {
          type    : 'number',
          minimum : 0,
          maximum : 65535,
          nullable: true
        }
      ]
    },
    'encap-csum'     : {
      type    : 'boolean',
      nullable: true
    },
    'noencap-csum'   : {
      type    : 'boolean',
      nullable: true
    },
    'encap-remcsum'  : {
      type    : 'boolean',
      nullable: true
    },
    'noencap-remcsum': {
      type    : 'boolean',
      nullable: true
    },
    external         : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    }
  }
};