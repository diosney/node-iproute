import { JSONSchemaType } from 'ajv';

import { SchemaIds }            from '../../../common/constants/schemas';
import { LinkSetXdpOffOptions } from './off.interfaces';

export const LinkSetXdpOffOptionsSchema: JSONSchemaType<LinkSetXdpOffOptions> = {
  // TODO: Error: reference "#link-set-xdp-off" resolves to more than one schema
  // $id:        SchemaIds.LinkSetXdpOffOptions,
  type:       'object',
  required:   [ 'off' ],
  properties: {
    off: {
      type: 'boolean',
      enum: [ true ]
    }
  }
};