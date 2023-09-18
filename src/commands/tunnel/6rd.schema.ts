import { JSONSchemaType } from 'ajv';

import { SchemaIds } from '../../common/constants/schemas';
import { Tunnel6rdOptions } from './6rd.interfaces';

export const Tunnel6rdSchema: JSONSchemaType<Tunnel6rdOptions> = {
  $id       : SchemaIds.Tunnel6rd,
  type      : 'object',
  required  : ['dev'],
  properties: {
    dev               : {
      type     : 'string',
      minLength: 1
    },
    '6rd-prefix'      : {
      type     : 'string',
      format   : 'ip-or-any',
      minLength: 1,
      nullable : true
    },
    '6rd-relay_prefix': {
      type     : 'string',
      format   : 'ip-or-any',
      minLength: 1,
      nullable : true
    },
    '6rd-reset'       : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    }
  }
};