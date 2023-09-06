import { JSONSchemaType } from 'ajv';

import { SecondaryUdpEncapsulations } from '../../link.constants';
import { AddLinkGreGretapTypeArgs }   from './gre-gretap.interfaces';

export const AddGreGretapArgsSchema: JSONSchemaType<AddLinkGreGretapTypeArgs> = {
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
    seq:               {
      type:     'boolean',
      nullable: true
    },
    iseq:              {
      type:     'boolean',
      nullable: true
    },
    noiseq:            {
      type:     'boolean',
      nullable: true
    },
    oseq:              {
      type:     'boolean',
      nullable: true
    },
    nooseq:            {
      type:     'boolean',
      nullable: true
    },
    key:               {
      type:     [ 'string', 'integer' ],
      nullable: true,
      oneOf:    [
        {
          type:     'string',
          format:   'ipv4',
          nullable: true
        },
        {
          type:     'integer',
          minimum:  0,
          maximum:  4294967295,
          nullable: true
        }
      ]
    },
    nokey:             {
      type:     'boolean',
      enum:     [ true ],
      nullable: true
    },
    ikey:              {
      type:     [ 'string', 'integer' ],
      nullable: true,
      oneOf:    [
        {
          type:     'string',
          format:   'ipv4',
          nullable: true
        },
        {
          type:     'integer',
          minimum:  0,
          maximum:  4294967295,
          nullable: true
        }
      ]
    },
    noikey:            {
      type:     'boolean',
      enum:     [ true ],
      nullable: true
    },
    okey:              {
      type:     [ 'string', 'integer' ],
      nullable: true,
      oneOf:    [
        {
          type:     'string',
          format:   'ipv4',
          nullable: true
        },
        {
          type:     'integer',
          minimum:  0,
          maximum:  4294967295,
          nullable: true
        }
      ]
    },
    nookey:            {
      type:     'boolean',
      enum:     [ true ],
      nullable: true
    },
    csum:              {
      type:     'boolean',
      nullable: true
    },
    icsum:             {
      type:     'boolean',
      nullable: true
    },
    noicsum:           {
      type:     'boolean',
      nullable: true
    },
    ocsum:             {
      type:     'boolean',
      nullable: true
    },
    noocsum:           {
      type:     'boolean',
      nullable: true
    },
    ttl:               {
      type:     'integer',
      minimum:  0,
      maximum:  255,
      nullable: true
    },
    tos:               {
      type:     'integer',
      nullable: true,
      minimum:  0,
      maximum:  255
    },
    pmtudisc:          {
      type:     'boolean',
      nullable: true
    },
    nopmtudisc:        {
      type:     'boolean',
      nullable: true
    },
    'ignore-df':       {
      type:     'boolean',
      nullable: true
    },
    'noignore-df':     {
      type:     'boolean',
      nullable: true
    },
    dev:               {
      type:      'string',
      minLength: 1,
      nullable:  true
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
    external:          {
      type:     'boolean',
      enum:     [ true ],
      nullable: true
    }
  }
};