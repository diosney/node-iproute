import { JSONSchemaType } from 'ajv';

import { SchemaIds } from '../../common/constants/schemas';
import { TunnelPrlOptions } from './prl.interfaces';

export const TunnelPrlSchema: JSONSchemaType<TunnelPrlOptions> = {
  $id       : SchemaIds.TunnelPrl,
  type      : 'object',
  required  : ['dev'],
  properties: {
    dev            : {
      type     : 'string',
      minLength: 1
    },
    'prl-default'  : {
      type     : 'string',
      format   : 'ip-or-any',
      minLength: 1,
      nullable : true
    },
    'prl-nodefault': {
      type     : 'string',
      format   : 'ip-or-any',
      minLength: 1,
      nullable : true
    },
    'prl-delete'   : {
      type     : 'string',
      format   : 'ip-or-any',
      minLength: 1,
      nullable : true
    }
  }
};