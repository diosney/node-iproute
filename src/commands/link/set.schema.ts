import { JSONSchemaType } from 'ajv';

import { EnableDisableAutoToggle, OnOffToggle }    from '../../common/constants/attribute-values';
import { ExtendedVirtualLinkTypes, VlanProtocols } from './add.constants';
import { SchemaIds }                               from '../../common/constants/schemas';
import { SetLinkBondSlaveArgsSchema }              from './extended-virtual-link-types/bond-slave.schema';
import { SetLinkBridgeSlaveArgsSchema }            from './extended-virtual-link-types/bridge-slave.schema';
import { AddrGenMode }                             from './set.constants';
import { LinkSetOptions }                          from './set.interfaces';
import { SetLinkMacvlanMacvtapArgsSchema }         from './virtual-link-types/macvlan-macvtap.schema';

export const LinkSetSchema: JSONSchemaType<LinkSetOptions> = {
  $id       : SchemaIds.LinkSet,
  type      : 'object',
  required  : [],
  properties: {
    dev           : {
      type     : 'string',
      minLength: 1,
      nullable : true
    },
    group         : {
      type    : 'number',
      minimum : 0,
      nullable: true
    },
    up            : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    down          : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    arp           : {
      type    : 'string',
      enum    : Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    dynamic       : {
      type    : 'string',
      enum    : Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    multicast     : {
      type    : 'string',
      enum    : Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    allmulticast  : {
      type    : 'string',
      enum    : Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    promisc       : {
      type    : 'string',
      enum    : Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    protodown     : {
      type    : 'string',
      enum    : Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    trailers      : {
      type    : 'string',
      enum    : Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    txqueuelen    : {
      type    : 'number',
      minimum : 1,
      nullable: true
    },
    txqlen        : {
      type    : 'number',
      minimum : 1,
      nullable: true
    },
    name          : {
      type    : 'string',
      format  : 'mac',
      nullable: true
    },
    address       : {
      type    : 'string',
      format  : 'mac',
      nullable: true
    },
    broadcast     : {
      type    : 'string',
      format  : 'mac',
      nullable: true
    },
    brd           : {
      type    : 'string',
      format  : 'mac',
      nullable: true
    },
    peer          : {
      type    : 'string',
      format  : 'mac',
      nullable: true
    },
    mtu           : {
      type    : 'number',
      minimum : 1,
      nullable: true
    },
    netns         : {
      type    : ['string', 'number'],
      nullable: true,
      oneOf   : [
        {
          type     : 'string',
          minLength: 1,
          nullable : true
        },
        {
          type    : 'number',
          minimum : 0,
          nullable: true
        }
      ]
    },
    'link-netnsid': {
      type    : 'number',
      minimum : 1,
      nullable: true
    },
    alias         : {
      type     : 'string',
      minLength: 1,
      nullable : true
    },
    vf            : {
      type    : 'number',
      minimum : 0,
      nullable: true
    },
    mac           : {
      type    : 'string',
      format  : 'mac',
      nullable: true
    },
    vlan          : {
      type    : 'number',
      minimum : 0,
      maximum : 4095,
      nullable: true
    },
    qos           : {
      type    : 'number',
      minimum : 0,
      nullable: true
    },
    type          : {
      type    : 'string',
      enum    : Object.values(ExtendedVirtualLinkTypes) as ExtendedVirtualLinkTypes[],
      nullable: true
    },
    proto         : {
      type    : 'string',
      enum    : Object.values(VlanProtocols) as VlanProtocols[],
      nullable: true
    },
    rate          : {
      type    : 'number',
      minimum : 0,
      nullable: true
    },
    max_tx_rate   : {
      type    : 'number',
      minimum : 0,
      nullable: true
    },
    min_tx_rate   : {
      type    : 'number',
      minimum : 0,
      nullable: true
    },
    spoofchk      : {
      type    : 'string',
      enum    : Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    query_rss     : {
      type    : 'string',
      enum    : Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    state         : {
      type    : 'string',
      enum    : Object.values(EnableDisableAutoToggle) as EnableDisableAutoToggle[],
      nullable: true
    },
    trust         : {
      type    : 'string',
      enum    : Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    node_guid     : {
      type    : 'number',
      minimum : 0,
      nullable: true
    },
    port_guid     : {
      type    : 'number',
      minimum : 0,
      nullable: true
    },
    xdp           : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    xdpgeneric    : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    xdpdrv        : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    xdpoffload    : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    off           : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    object        : {
      type     : 'string',
      minLength: 1,
      nullable : true
    },
    obj           : {
      type     : 'string',
      minLength: 1,
      nullable : true
    },
    section       : {
      type     : 'string',
      minLength: 1,
      nullable : true
    },
    sec           : {
      type     : 'string',
      minLength: 1,
      nullable : true
    },
    verbose       : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    pinned        : {
      type     : 'string',
      minLength: 1,
      nullable : true
    },
    master        : {
      type     : 'string',
      minLength: 1,
      nullable : true
    },
    nomaster      : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    addrgenmode   : {
      type    : 'string',
      enum    : Object.values(AddrGenMode) as AddrGenMode[],
      nullable: true
    },
    // TODO: How to condition anyOf depending of `type`? if/then/else?
    type_args: {
      type    : 'object',
      nullable: true,
      anyOf   : [
        SetLinkBridgeSlaveArgsSchema,
        SetLinkBondSlaveArgsSchema,
        SetLinkMacvlanMacvtapArgsSchema
      ]
    }
  }
};