import { JSONSchemaType } from 'ajv';

import { LinkSetXdpPinnedOptions } from './pinned.interfaces';

export const LinkSetXdpPinnedOptionsSchema: JSONSchemaType<LinkSetXdpPinnedOptions> = {
  type:       'object',
  required:   ['file'],
  properties: {
    file: {
      type:      'string',
      minLength: 1,
      keyless:   true
    }
  }
};