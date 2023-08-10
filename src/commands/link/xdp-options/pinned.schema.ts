import { JSONSchemaType } from 'ajv';

import { SchemaIds }               from '../../../common/constants/schemas';
import { LinkSetXdpPinnedOptions } from './pinned.interfaces';

export const LinkSetXdpPinnedOptionsSchema: JSONSchemaType<LinkSetXdpPinnedOptions> = {
  // TODO: Error: reference "#link-set-xdp-off" resolves to more than one schema
  // $id:        SchemaIds.LinkSetXdpPinnedOptions,
  type:       'object',
  required:   [ 'pinned' ],
  properties: {
    pinned: {
      type:      'string',
      minLength: 1
    }
  }
};