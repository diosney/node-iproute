import { JSONSchemaType } from 'ajv';

import { SchemaIds } from '../../common/constants/schemas';
import { NeighbourDelOptions } from './del.interfaces';

export const NeighbourDelSchema: JSONSchemaType<NeighbourDelOptions> = {
  $id       : SchemaIds.NeighbourDel,
  type      : 'object',
  required  : ['to'],
  properties: {
    to          : {
      type     : 'string',
      minLength: 1,
      format   : 'ip'
    },
    proxy       : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    dev         : {
      type     : 'string',
      minLength: 1,
      nullable : true
    },
    router      : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    extern_learn: {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    }
  }
};