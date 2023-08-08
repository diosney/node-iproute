import { JSONSchemaType } from 'ajv';

import { SchemaIds }            from '../../../common/constants/schemas';
import { AddRouteBpfEncapArgs } from './bpf.interfaces';

export const RouteBpfEncapArgsSchema: JSONSchemaType<AddRouteBpfEncapArgs> = {
  $id       : SchemaIds.RouteAddBpfEncapArgs,
  type      : 'object',
  required  : [],
  properties: {
    bpf     : {
      type    : 'boolean',
      enum    : [true],
      default : true,
      nullable: true
    },
    in      : {
      type     : 'string',
      minLength: 1,
      nullable : true
    },
    out     : {
      type     : 'string',
      minLength: 1,
      nullable : true
    },
    xmit    : {
      type     : 'string',
      minLength: 1,
      nullable : true
    },
    headroom: {
      type    : 'integer',
      minimum : 1,
      nullable: true
    }
  }
};