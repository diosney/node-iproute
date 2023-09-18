import { JSONSchemaType } from 'ajv';

import { SchemaIds } from '../../common/constants/schemas';
import { NtableChangeOptions } from './change.interfaces';

export const NtableChangeSchema: JSONSchemaType<NtableChangeOptions> = {
  $id       : SchemaIds.NtableChange,
  type      : 'object',
  required  : ['name'],
  properties: {
    name          : {
      type     : 'string',
      minLength: 1
    },
    dev           : {
      type     : 'string',
      minLength: 1,
      nullable : true
    },
    thresh1       : {
      type    : 'number',
      nullable: true,
      minimum : 0
    },
    thresh2       : {
      type    : 'number',
      nullable: true,
      minimum : 0
    },
    thresh3       : {
      type    : 'number',
      nullable: true,
      minimum : 0
    },
    gc_int        : {
      type    : 'number',
      nullable: true,
      minimum : 0
    },
    base_reachable: {
      type    : 'number',
      nullable: true,
      minimum : 0
    },
    retrans       : {
      type    : 'number',
      nullable: true,
      minimum : 0
    },
    gc_stale      : {
      type    : 'number',
      nullable: true,
      minimum : 0
    },
    delay_probe   : {
      type    : 'number',
      nullable: true,
      minimum : 0
    },
    queue         : {
      type    : 'number',
      nullable: true,
      minimum : 0
    },
    app_probs     : {
      type    : 'number',
      nullable: true,
      minimum : 0
    },
    ucast_probes  : {
      type    : 'number',
      nullable: true,
      minimum : 0
    },
    mcast_probes  : {
      type    : 'number',
      nullable: true,
      minimum : 0
    },
    anycast_delay : {
      type    : 'number',
      nullable: true,
      minimum : 0
    },
    proxy_delay   : {
      type    : 'number',
      nullable: true,
      minimum : 0
    },
    proxy_queue   : {
      type    : 'number',
      nullable: true,
      minimum : 0
    },
    locktime      : {
      type    : 'number',
      nullable: true,
      minimum : 0
    }
  }
};