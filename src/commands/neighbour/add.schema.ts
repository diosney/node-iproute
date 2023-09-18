import { JSONSchemaType } from 'ajv';

import { SchemaIds } from '../../common/constants/schemas';
import { NeighbourAddOptions } from './add.interfaces';
import { NudStates } from '../neighbour.constants';

export const NeighbourAddSchema: JSONSchemaType<NeighbourAddOptions> = {
  $id       : SchemaIds.NeighbourAdd,
  type      : 'object',
  required  : ['to'],
  properties: {
    to          : {
      type     : 'string',
      minLength: 1,
      format   : 'ip'
    },
    lladdr      : {
      type     : 'string',
      minLength: 1,
      format   : 'mac',
      nullable : true
    },
    nud         : {
      type    : 'string',
      enum    : Object.values(NudStates) as NudStates[],
      nullable: true
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