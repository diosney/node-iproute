import { JSONSchemaType } from 'ajv';

import { SchemaIds }                      from '../../../../common/constants/schemas';
import { ErspanDirections }               from '../add.constants';
import { LinkErspanIp6erspanTypeOptions } from './erspan-ip6erspan.interfaces';

export const LinkErspanIp6ErspanOptionsSchema: JSONSchemaType<LinkErspanIp6erspanTypeOptions> = {
  $id                 : SchemaIds.LinkAddErspanIp6erspanOptions,
  type                : 'object',
  required            : ['remote', 'local', 'seq', 'key', 'erspan_ver'],
  additionalProperties: false,
  properties          : {
    remote               : {
      type  : 'string',
      format: 'ip'
    },
    local                : {
      type  : 'string',
      format: 'ip'
    },
    seq                  : {
      type: 'boolean',
      enum: [true]
    },
    key                  : {
      type   : 'number',
      minimum: 0,
      maximum: 4294967295
    },
    erspan_ver           : {
      type   : 'number',
      minimum: 0,
      maximum: 2
    },
    erspan               : {
      type    : 'number',
      minimum : 0,
      maximum : 1048576,
      nullable: true
    },
    erspan_dir           : {
      type    : 'string',
      enum    : Object.values(ErspanDirections) as ErspanDirections[],
      nullable: true
    },
    erspan_hwid          : {
      type    : 'number',
      minimum : 0,
      maximum : 63,
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
    external             : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    }
  }
};