import { JSONSchemaType } from 'ajv';

import { AddRouteBpfEncapArgs } from './bpf.interfaces';

export const RouteBpfEncapArgsSchema: JSONSchemaType<AddRouteBpfEncapArgs> = {
  type:       'object',
  nullable:   true,
  required:   [],
  properties: {
    in:       {
      type:      'string',
      minLength: 1,
      nullable:  true
    },
    out:      {
      type:      'string',
      minLength: 1,
      nullable:  true
    },
    xmit:     {
      type:      'string',
      minLength: 1,
      nullable:  true
    },
    headroom: {
      type:     'integer',
      minimum:  1,
      nullable: true
    }
  }
};