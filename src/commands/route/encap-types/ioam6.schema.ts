import { JSONSchemaType } from 'ajv';

import { SchemaIds } from '../../../common/constants/schemas';
import { AddRouteIoam6EncapArgs } from './ioam6.interfaces';

export const RouteIoam6EncapArgsSchema: JSONSchemaType<AddRouteIoam6EncapArgs> = {
  $id: SchemaIds.RouteAddIoam6EncapArgs,
  type: 'object',
  required: [ 'trace', 'prealloc', 'type', 'ns', 'size' ],
  properties: {
    trace: {
      type: 'boolean',
      enum: [ true ]
    },
    prealloc: {
      type: 'boolean',
      enum: [ true ]
    },
    type: {
      type: 'integer',
      minimum: 0
    },
    ns: {
      type: 'integer',
      minimum: 1
    },
    size: {
      type: 'integer',
      minimum: 1
    }
  }
};