import { JSONSchemaType } from 'ajv';

import { LinkSetXdpObjectOptions } from './object.interfaces';

export const LinkSetXdpObjectOptionsSchema: JSONSchemaType<LinkSetXdpObjectOptions> = {
  type:       'object',
  required:   ['file'],
  properties: {
    file:    {
      type:      'string',
      minLength: 1,
      keyless:   true
    },
    section: {
      type:      'string',
      minLength: 1,
      nullable:  true
    },
    verbose: {
      type:     'boolean',
      enum:     [true],
      nullable: true
    }
  }
};