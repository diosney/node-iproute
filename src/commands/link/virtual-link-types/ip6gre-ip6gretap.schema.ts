import { JSONSchemaType } from 'ajv';

import { AddLinkIp6GreIp6gretapTypeArgs } from './ip6gre-ip6gretap.interfaces';

export const AddLinkIp6GreIp6GretapArgsSchema: JSONSchemaType<AddLinkIp6GreIp6gretapTypeArgs> = {
  type:                 'object',
  required:             [ 'remote', 'local' ],
  additionalProperties: false,
  properties:           {
    remote:                {
      type:   'string',
      format: 'ipv6'
    },
    local:                 {
      type:   'string',
      format: 'ipv6'
    },
    seq:                   {
      type:     'boolean',
      nullable: true
    },
    iseq:                  {
      type:     'boolean',
      nullable: true
    },
    noiseq:                {
      type:     'boolean',
      nullable: true
    },
    oseq:                  {
      type:     'boolean',
      nullable: true
    },
    nooseq:                {
      type:     'boolean',
      nullable: true
    },
    key:                   {
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
    nokey:                 {
      type:     'boolean',
      enum:     [ true ],
      nullable: true
    },
    ikey:                  {
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
    noikey:                {
      type:     'boolean',
      enum:     [ true ],
      nullable: true
    },
    okey:                  {
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
    nookey:                {
      type:     'boolean',
      enum:     [ true ],
      nullable: true
    },
    csum:                  {
      type:     'boolean',
      nullable: true
    },
    icsum:                 {
      type:     'boolean',
      nullable: true
    },
    noicsum:               {
      type:     'boolean',
      nullable: true
    },
    ocsum:                 {
      type:     'boolean',
      nullable: true
    },
    noocsum:               {
      type:     'boolean',
      nullable: true
    },
    hoplimit:              {
      type:     'integer',
      minimum:  1,
      maximum:  255,
      nullable: true
    },
    encaplimit:            {
      type:     'integer',
      minimum:  0,
      maximum:  255,
      nullable: true
    },
    tclass:                {
      type:      'string',
      minLength: 2,
      nullable:  true
    },
    flowlabel:             {
      type:     'integer',
      minimum:  0,
      maximum:  1048575,
      nullable: true
    },
    'dscp inherit':        {
      type:     'boolean',
      nullable: true
    },
    'allow-localremote':   {
      type:     'boolean',
      nullable: true
    },
    'noallow-localremote': {
      type:     'boolean',
      nullable: true
    },
    dev:                   {
      type:      'string',
      minLength: 1,
      nullable:  true
    },
    external:              {
      type:     'boolean',
      enum:     [ true ],
      nullable: true
    }
  }
};