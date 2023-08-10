import { JSONSchemaType } from 'ajv';

import { IpipSipDeviceModes, SecondaryUdpEncapsulations } from '../../link.constants';
import { SchemaIds }                                      from '../../../common/constants/schemas';
import { AddLinkIpipSitTypeArgs }                         from './ipip-sit.interfaces';

export const AddLinkIpipSipArgsSchema: JSONSchemaType<AddLinkIpipSitTypeArgs> = {
  $id:                  SchemaIds.LinkAddIpipSipOptions,
  type:                 'object',
  required:             [ 'remote', 'local' ],
  additionalProperties: false,
  properties:           {
    remote:            {
      type:   'string',
      format: 'ip'
    },
    local:             {
      type:   'string',
      format: 'ip'
    },
    encap:             {
      type:     'string',
      enum:     Object.values(SecondaryUdpEncapsulations) as SecondaryUdpEncapsulations[],
      nullable: true
    },
    'encap-sport':     {
      type:     [ 'string', 'integer' ],
      nullable: true,
      oneOf:    [
        {
          type:     'string',
          enum:     [ 'auto' ],
          nullable: true
        },
        {
          type:     'integer',
          minimum:  0,
          maximum:  65535,
          nullable: true
        }
      ]
    },
    'encap-dport':     {
      type:     'integer',
      nullable: true,
      minimum:  0,
      maximum:  65535
    },
    'encap-csum':      {
      type:     'boolean',
      nullable: true
    },
    'noencap-csum':    {
      type:     'boolean',
      nullable: true
    },
    'encap-remcsum':   {
      type:     'boolean',
      nullable: true
    },
    'noencap-remcsum': {
      type:     'boolean',
      nullable: true
    },
    mode:              {
      type:     'string',
      enum:     Object.values(IpipSipDeviceModes) as IpipSipDeviceModes[],
      nullable: true
    },
    external:          {
      type:     'boolean',
      enum:     [ true ],
      nullable: true
    }
  }
};