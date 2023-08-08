import { JSONSchemaType } from 'ajv';

import { SchemaIds }              from '../../../common/constants/schemas';
import { AddRouteIoam6EncapArgs } from './ioam6.interfaces';

export const RouteIoam6EncapArgsSchema: JSONSchemaType<AddRouteIoam6EncapArgs> = {
  $id       : SchemaIds.RouteAddIoam6EncapArgs,
  type      : 'object',
  required  : ['type', 'ns', 'size'],
  properties: {
    ioam6   : {
      type    : 'boolean',
      enum    : [true],
      default : true,
      nullable: true
    },
    trace   : {
      type    : 'boolean',
      enum    : [true],
      default : true,
      nullable: true
    },
    prealloc: {
      type    : 'boolean',
      enum    : [true],
      default : true,
      nullable: true
    },
    type    : {
      type   : 'number',
      minimum: 0
    },
    ns      : {
      type   : 'number',
      minimum: 1
    },
    size    : {
      type   : 'integer',
      minimum: 1
    }
  }
};