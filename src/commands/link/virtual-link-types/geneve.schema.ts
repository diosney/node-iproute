import { JSONSchemaType } from 'ajv';

import { SchemaIds }                                from '../../../common/constants/schemas';
import { DontFragmentFlagValues, TtlSpecialValues } from '../add.constants';
import { AddLinkGeneveTypeArgs }                    from './geneve.interfaces';

export const AddLinkGeneveArgsSchema: JSONSchemaType<AddLinkGeneveTypeArgs> = {
  $id                 : SchemaIds.LinkAddGeneveOptions,
  type                : 'object',
  required            : ['id', 'remote'],
  additionalProperties: false,
  properties          : {
    id              : {
      type   : 'number',
      minimum: 0,
      maximum: 16777215
    },
    remote          : {
      type  : 'string',
      format: 'ip'
    },
    ttl             : {
      type    : ['string', 'number'],
      nullable: true,
      oneOf   : [
        {
          type    : 'string',
          enum    : Object.values(TtlSpecialValues) as TtlSpecialValues[],
          nullable: true
        },
        {
          type    : 'number',
          minimum : 0,
          maximum : 255,
          nullable: true
        }
      ]
    },
    tos             : {
      type    : 'number',
      nullable: true,
      minimum : 0,
      maximum : 63
    },
    df              : {
      type    : 'string',
      enum    : Object.values(DontFragmentFlagValues) as DontFragmentFlagValues[],
      nullable: true
    },
    flowlabel       : {
      type    : 'number',
      minimum : 0,
      maximum : 1048575,
      nullable: true
    },
    dstport         : {
      type    : 'number',
      nullable: true,
      minimum : 1,
      maximum : 65535
    },
    external        : {
      type    : 'boolean',
      nullable: true
    },
    noexternal      : {
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
    }
  }
};