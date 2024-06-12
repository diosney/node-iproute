import { JSONSchemaType } from 'ajv';

import { EnableDisableAutoToggle, OnOffToggle } from '../../common/constants/attribute-values';
import { AddrGenMode, ExtendedLinkTypes, VlanProtocols, XdpOptionTypes } from '../link.constants';
import { SchemaIds } from '../../common/constants/schemas';
import { SetLinkBondSlaveArgsSchema } from './extended-virtual-link-types/bond-slave.schema';
import { SetLinkBridgeSlaveArgsSchema } from './extended-virtual-link-types/bridge-slave.schema';
import { LinkSetOptions } from './set.interfaces';
import { SetLinkMacvlanMacvtapArgsSchema } from './virtual-link-types/macvlan-macvtap.schema';
import { LinkSetXdpObjectOptionsSchema } from './xdp-options/object.schema';
import { LinkSetXdpPinnedOptionsSchema } from './xdp-options/pinned.schema';
import { LinkSetXdpOffOptionsSchema } from './xdp-options/off.schema';
import { SetLinkBridgeSlaveTypeArgs } from './extended-virtual-link-types/bridge-slave.interfaces';
import { SetLinkBondSlaveTypeArgs } from './extended-virtual-link-types/bond-slave.interfaces';
import { SetLinkMacvlanMacvtapTypeArgs } from './virtual-link-types/macvlan-macvtap.interfaces';
import { LinkSetXdpOffOptions } from './xdp-options/off.interfaces';
import { LinkSetXdpObjectOptions } from './xdp-options/object.interfaces';
import { LinkSetXdpPinnedOptions } from './xdp-options/pinned.interfaces';
import { typePropertiesSchema } from './add.schema';

export const xdpOptionsPropertiesSchema: any = {
  [XdpOptionTypes.Off]:    LinkSetXdpOffOptionsSchema as Required<JSONSchemaType<LinkSetXdpOffOptions>>,
  [XdpOptionTypes.Object]: LinkSetXdpObjectOptionsSchema as Required<JSONSchemaType<LinkSetXdpObjectOptions>>,
  [XdpOptionTypes.Pinned]: LinkSetXdpPinnedOptionsSchema as Required<JSONSchemaType<LinkSetXdpPinnedOptions>>
};

export const extendedTypesPropertiesSchema: any = {
  ...typePropertiesSchema,
  [ExtendedLinkTypes.BridgeSlave]: SetLinkBridgeSlaveArgsSchema as Required<JSONSchemaType<SetLinkBridgeSlaveTypeArgs>>,
  [ExtendedLinkTypes.BondSlave]:   SetLinkBondSlaveArgsSchema as Required<JSONSchemaType<SetLinkBondSlaveTypeArgs>>,
  [ExtendedLinkTypes.Macsec]:      SetLinkMacvlanMacvtapArgsSchema as Required<JSONSchemaType<SetLinkMacvlanMacvtapTypeArgs>>
};

export const LinkSetSchema: JSONSchemaType<LinkSetOptions> = {
  $id:        SchemaIds.LinkSet,
  type:       'object',
  required:   [],
  properties: {
    dev:              {
      type:      'string',
      minLength: 1,
      keyless:   true,
      nullable:  true
    },
    group:            {
      type:     'integer',
      minimum:  0,
      nullable: true
    },
    up:               {
      type:     'boolean',
      enum:     [true],
      nullable: true
    },
    down:             {
      type:     'boolean',
      enum:     [true],
      nullable: true
    },
    type:             {
      type:       'object',
      nullable:   true,
      properties: extendedTypesPropertiesSchema
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
      required:   ['name', 'enable'],
      nullable:   true,
      properties: {
        name:   {
          type:    'integer',
          minimum: 0,
          maximum: 2147483647,
          keyless: true
        },
        enable: {
          type:    'string',
          enum:    Object.values(OnOffToggle) as OnOffToggle[],
          keyless: true
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
    bitrate:          {
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
      type:     ['string', 'integer'],
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
    vf_args:          {
      type:       'object',
      nullable:   true,
      keyless:    true,
      properties: {
        mac:         {
          type:     'string',
          format:   'mac',
          nullable: true
        },
        vlan_list:   {
          type:     'array',
          nullable: true,
          keyless:  true,
          items:    {
            type:       'object',
            required:   ['vlan'],
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
      type:       'object',
      required:   [],
      nullable:   true,
      properties: xdpOptionsPropertiesSchema
    },
    xdpgeneric:       {
      type:       'object',
      required:   [],
      nullable:   true,
      properties: xdpOptionsPropertiesSchema
    },
    xdpdrv:           {
      type:       'object',
      required:   [],
      nullable:   true,
      properties: xdpOptionsPropertiesSchema
    },
    xdpoffload:       {
      type:       'object',
      required:   [],
      nullable:   true,
      properties: xdpOptionsPropertiesSchema
    },
    master:           {
      type:      'string',
      minLength: 1,
      nullable:  true
    },
    nomaster:         {
      type:     'boolean',
      enum:     [true],
      nullable: true
    },
    addrgenmode:      {
      type:     'string',
      enum:     Object.values(AddrGenMode) as AddrGenMode[],
      nullable: true
    }
  }
};