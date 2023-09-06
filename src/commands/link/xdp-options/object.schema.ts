import { JSONSchemaType } from 'ajv';

import { LinkSetXdpObjectOptions } from './object.interfaces';

export const LinkSetXdpObjectOptionsSchema: JSONSchemaType<LinkSetXdpObjectOptions> = {
  type: 'object',
  required: ['file_'],
  properties: {
    file_: {
      type: 'string',
      minLength: 1
    },
    section: {
      type: 'string',
      minLength: 1,
      nullable: true
    },
    verbose: {
      type: 'boolean',
      enum: [true],
      nullable: true
    }
  }
};