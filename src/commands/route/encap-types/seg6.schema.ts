import { JSONSchemaType } from 'ajv';

import { AddRouteSeg6EncapArgs } from './seg6.interfaces';

export const RouteSeg6EncapArgsSchema: JSONSchemaType<AddRouteSeg6EncapArgs> = {
  type: 'object',
  required: [ 'mode', 'segs' ],
  properties: {
    mode: {
      type: 'boolean',
      enum: [ true ]
    },
    encap: {
      type: 'boolean',
      enum: [ true ],
      nullable: true
    },
    inline: {
      type: 'boolean',
      enum: [ true ],
      nullable: true
    },
    l2encap: {
      type: 'boolean',
      enum: [ true ],
      nullable: true
    },
    segs: {
      type: 'string',
      format: 'comma-separated-ipv6-addresses'
    },
    hmac: {
      type: 'integer',
      minimum: 0,
      nullable: true
    }
  }
};