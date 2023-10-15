import { JSONSchemaType } from 'ajv';

import { LinkSetXdpOffOptions } from './off.interfaces';

export const LinkSetXdpOffOptionsSchema: JSONSchemaType<LinkSetXdpOffOptions> = {
  type:       'object',
  required:   ['value'],
  properties: {
    value: {
      type:    'boolean',
      enum:    [true],
      keyless: true
    }
  }
};