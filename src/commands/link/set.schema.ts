import { JSONSchemaType } from 'ajv';

import { EnableDisableAutoToggle, OnOffToggle }                 from '../../common/constants/attribute-values';
import { AddrGenMode, ExtendedVirtualLinkTypes, VlanProtocols } from '../link.constants';
import { SchemaIds }                                            from '../../common/constants/schemas';
import { SetLinkBondSlaveArgsSchema }                           from './extended-virtual-link-types/bond-slave.schema';
import { SetLinkBridgeSlaveArgsSchema }                         from './extended-virtual-link-types/bridge-slave.schema';
import { LinkSetOptions }                                       from './set.interfaces';
import { SetLinkMacvlanMacvtapArgsSchema }                      from './virtual-link-types/macvlan-macvtap.schema';
import { LinkSetXdpObjectOptionsSchema }                        from './xdp-options/object.schema';
import { LinkSetXdpPinnedOptionsSchema }                        from './xdp-options/pinned.schema';
import { LinkSetXdpOffOptionsSchema }                           from './xdp-options/off.schema';
import { typeArgsSchemas }                                      from './add.schema';

export const xdpArgsSchemas: any = [
  LinkSetXdpOffOptionsSchema,
  LinkSetXdpObjectOptionsSchema,
  LinkSetXdpPinnedOptionsSchema
];

export const LinkSetSchema: JSONSchemaType<LinkSetOptions> = {
  $id:        SchemaIds.LinkSet,
  type:       'object',
  required:   [],
  properties: {
    dev_:             {
      type:      'string',
      minLength: 1,
      nullable:  true
    },
    group:            {
      type:     'integer',
      minimum:  0,
      nullable: true
    },
    up:               {
      type:     'boolean',
      enum:     [ true ],
      nullable: true
    },
    down:             {
      type:     'boolean',
      enum:     [ true ],
      nullable: true
    },
    type:             {
      type:     'string',
      enum:     Object.values(ExtendedVirtualLinkTypes) as ExtendedVirtualLinkTypes[],
      nullable: true
    },
    type_:            {
      type:     'object',
      nullable: true,
      anyOf:    [
        ...typeArgsSchemas,
        SetLinkBridgeSlaveArgsSchema,
        SetLinkBondSlaveArgsSchema,
        SetLinkMacvlanMacvtapArgsSchema
      ]
    },
    arp:              {
      type:     'string',
      enum:     Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    dynamic:          {
      type:     'string',
      enum:     Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    multicast:        {
      type:     'string',
      enum:     Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    allmulticast:     {
      type:     'string',
      enum:     Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    promisc:          {
      type:     'string',
      enum:     Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    protodown:        {
      type:     'string',
      enum:     Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    protodown_reason: {
      type:       'object',
      required:   [ 'name_', 'enable_' ],
      nullable:   true,
      properties: {
        name_:   {
          type:    'number',
          minimum: 0,
          maximum: 2147483647
        },
        enable_: {
          type: 'string',
          enum: Object.values(OnOffToggle) as OnOffToggle[]
        }
      }
    },
    trailers:         {
      type:     'string',
      enum:     Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    txqueuelen:       {
      type:     'integer',
      minimum:  1,
      nullable: true
    },
    name:             {
      type:     'string',
      format:   'mac',
      nullable: true
    },
    address:          {
      type:     'string',
      format:   'mac',
      nullable: true
    },
    broadcast:        {
      type:     'string',
      format:   'mac',
      nullable: true
    },
    mtu:              {
      type:     'integer',
      minimum:  1,
      nullable: true
    },
    netns:            {
      type:     [ 'string', 'integer' ],
      nullable: true,
      oneOf:    [
        {
          type:      'string',
          minLength: 1,
          nullable:  true
        },
        {
          type:     'integer',
          minimum:  0,
          nullable: true
        }
      ]
    },
    'link-netnsid':   {
      type:     'integer',
      minimum:  1,
      nullable: true
    },
    alias:            {
      type:      'string',
      minLength: 1,
      nullable:  true
    },
    vf:               {
      type:     'integer',
      minimum:  0,
      nullable: true
    },
    vf_:              {
      type:       'object',
      nullable:   true,
      properties: {
        mac:         {
          type:     'string',
          format:   'mac',
          nullable: true
        },
        vlan_list_:  {
          type:     'array',
          nullable: true,
          items:    {
            type:       'object',
            required:   [ 'vlan' ],
            properties: {
              vlan:  {
                type:    'integer',
                minimum: 0,
                maximum: 4095
              },
              qos:   {
                type:     'integer',
                minimum:  0,
                nullable: true
              },
              proto: {
                type:     'string',
                enum:     Object.values(VlanProtocols) as VlanProtocols[],
                nullable: true
              }
            }
          }
        },
        rate:        {
          type:     'integer',
          minimum:  0,
          nullable: true
        },
        max_tx_rate: {
          type:     'integer',
          minimum:  0,
          nullable: true
        },
        min_tx_rate: {
          type:     'integer',
          minimum:  0,
          nullable: true
        },
        spoofchk:    {
          type:     'string',
          enum:     Object.values(OnOffToggle) as OnOffToggle[],
          nullable: true
        },
        query_rss:   {
          type:     'string',
          enum:     Object.values(OnOffToggle) as OnOffToggle[],
          nullable: true
        },
        state:       {
          type:     'string',
          enum:     Object.values(EnableDisableAutoToggle) as EnableDisableAutoToggle[],
          nullable: true
        },
        trust:       {
          type:     'string',
          enum:     Object.values(OnOffToggle) as OnOffToggle[],
          nullable: true
        },
        node_guid:   {
          type:     'integer',
          minimum:  0,
          nullable: true
        },
        port_guid:   {
          type:     'integer',
          minimum:  0,
          nullable: true
        }
      }
    },
    xdp:              {
      type:     'object',
      required: [],
      nullable: true,
      anyOf:    xdpArgsSchemas
    },
    xdpgeneric:       {
      type:     'object',
      required: [],
      nullable: true,
      anyOf:    xdpArgsSchemas
    },
    xdpdrv:           {
      type:     'object',
      required: [],
      nullable: true,
      anyOf:    xdpArgsSchemas
    },
    xdpoffload:       {
      type:     'object',
      required: [],
      nullable: true,
      anyOf:    xdpArgsSchemas
    },
    master:           {
      type:      'string',
      minLength: 1,
      nullable:  true
    },
    nomaster:         {
      type:     'boolean',
      enum:     [ true ],
      nullable: true
    },
    addrgenmode:      {
      type:     'string',
      enum:     Object.values(AddrGenMode) as AddrGenMode[],
      nullable: true
    }
  }
};