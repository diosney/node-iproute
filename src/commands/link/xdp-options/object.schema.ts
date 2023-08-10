import { JSONSchemaType } from 'ajv';

import { LinkSetXdpObjectOptions } from './object.interfaces';
import { SchemaIds }               from '../../../common/constants/schemas';

export const LinkSetXdpObjectOptionsSchema: JSONSchemaType<LinkSetXdpObjectOptions> = {
  // TODO: Error: reference "#link-set-xdp-off" resolves to more than one schema
  // $id:        SchemaIds.LinkSetXdpObjectOptions,
  type:       'object',
  required:   [ 'object' ],
  properties: {
    object:  {
      type:      'string',
      minLength: 1
    },
    section: {
      type:      'string',
      minLength: 1,
      nullable:  true
    },
    verbose: {
      type:     'boolean',
      enum:     [ true ],
      nullable: true
    }
  }
};