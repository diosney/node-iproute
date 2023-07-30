import { JSONSchemaType } from 'ajv';

import { SchemaIds }                                from '../../../../common/constants/schemas';
import { DontFragmentFlagValues, TtlSpecialValues } from '../add.constants';
import { LinkBareudpTypeOptions }                   from './bareup.interfaces';
import { LinkGeneveTypeOptions }                    from './geneve.interfaces';

export const LinkBareudpOptionsSchema: JSONSchemaType<LinkBareudpTypeOptions> = {
  $id                 : SchemaIds.LinkAddBareupOptions,
  type                : 'object',
  required            : ['dstport', 'ethertype'],
  additionalProperties: false,
  properties          : {
    dstport     : {
      type   : 'number',
      minimum: 1,
      maximum: 65535
    },
    ethertype   : {
      type : ['string', 'number'],
      oneOf: [
        {
          type: 'string'
        },
        {
          type   : 'number',
          minimum: 0,
          maximum: 255
        }
      ]
    },
    srcportmin  : {
      type    : 'number',
      nullable: true,
      minimum : 1,
      maximum : 65535
    },
    multiproto  : {
      type    : 'boolean',
      nullable: true
    },
    nomultiproto: {
      type    : 'boolean',
      nullable: true
    }
  }
};