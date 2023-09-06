import { JSONSchemaType } from 'ajv';

import { ErspanDirections }               from '../../link.constants';
import { AddLinkErspanIp6erspanTypeArgs } from './erspan-ip6erspan.interfaces';

export const AddLinkErspanIp6ErspanArgsSchema: JSONSchemaType<AddLinkErspanIp6erspanTypeArgs> = {
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
      type   : 'integer',
      minimum: 0,
      maximum: 4294967295
    },
    erspan_ver           : {
      type   : 'integer',
      minimum: 0,
      maximum: 2
    },
    erspan               : {
      type    : 'integer',
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
      type    : 'integer',
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