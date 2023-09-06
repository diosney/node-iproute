import { JSONSchemaType } from 'ajv';

import { LinkSetXdpOffOptions } from './off.interfaces';

export const LinkSetXdpOffOptionsSchema: JSONSchemaType<LinkSetXdpOffOptions> = {
  type: 'object',
  required: ['value_'],
  properties: {
    value_: {
      type: 'boolean',
      enum: [true]
    }
  }
};