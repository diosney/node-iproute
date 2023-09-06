import { JSONSchemaType } from 'ajv';

import { LinkSetXdpPinnedOptions } from './pinned.interfaces';

export const LinkSetXdpPinnedOptionsSchema: JSONSchemaType<LinkSetXdpPinnedOptions> = {
  type: 'object',
  required: ['file_'],
  properties: {
    file_: {
      type: 'string',
      minLength: 1
    }
  }
};