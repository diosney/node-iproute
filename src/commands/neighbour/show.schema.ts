import { JSONSchemaType } from 'ajv';

import { SchemaIds } from '../../common/constants/schemas';
import { NudStates } from '../neighbour.constants';
import { NeighbourShowOptions } from './show.interfaces';

export const NeighbourShowSchema: JSONSchemaType<NeighbourShowOptions> = {
  $id       : SchemaIds.NeighbourShow,
  type      : 'object',
  required  : [],
  properties: {
    proxy: {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    to   : {
      type     : 'string',
      minLength: 1,
      format   : 'ip',
      nullable : true
    },
    dev  : {
      type     : 'string',
      minLength: 1,
      nullable : true
    },
    nud  : {
      type    : 'string',
      enum    : Object.values(NudStates) as NudStates[],
      nullable: true
    },
    vrf  : {
      type     : 'string',
      minLength: 1,
      nullable : true
    }
  }
};