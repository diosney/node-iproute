import { JSONSchemaType } from 'ajv';

import { LinkTypes } from '../link.constants';
import { SchemaIds } from '../../common/constants/schemas';
import { LinkAddOptions } from './add.interfaces';
import { AddLinkBareudpArgsSchema } from './virtual-link-types/bareup.schema';
import { AddLinkBridgeArgsSchema } from './virtual-link-types/bridge.schema';
import { AddLinkErspanIp6ErspanArgsSchema } from './virtual-link-types/erspan-ip6erspan.schema';
import { AddLinkGeneveArgsSchema } from './virtual-link-types/geneve.schema';
import { AddGreGretapArgsSchema } from './virtual-link-types/gre-gretap.schema';
import { AddLinkHsrArgsSchema } from './virtual-link-types/hsr.schema';
import { AddLinkIp6GreIp6GretapArgsSchema } from './virtual-link-types/ip6gre-ip6gretap.schema';
import { AddLinkIpipSipArgsSchema } from './virtual-link-types/ipip-sit.schema';
import { AddLinkIpoibArgsSchema } from './virtual-link-types/ipoib.schema';
import { AddLinkMacsecArgsSchema } from './virtual-link-types/macsec.schema';
import { AddLinkMacvlanMacvtapArgsSchema } from './virtual-link-types/macvlan-macvtap.schema';
import { AddLinkRmnetArgsSchema } from './virtual-link-types/rmnet.schema';
import { AddLinkVethVxcanArgsSchema } from './virtual-link-types/veth-vxcan.schema';
import { AddLinkVlanArgsSchema } from './virtual-link-types/vlan.schema';
import { AddLinkVrfArgsSchema } from './virtual-link-types/vrf.schema';
import { AddLinkVxlanArgsSchema } from './virtual-link-types/vxlan.schema';
import { AddLinkXfrmArgsSchema } from './virtual-link-types/xfrm.schema';
import { AddLinkCanArgsSchema } from './virtual-link-types/can.schema';
import { AddLinkVlanTypeArgs } from './virtual-link-types/vlan.interfaces';
import { AddLinkVxlanTypeArgs } from './virtual-link-types/vxlan.interfaces';
import { AddLinkVethVxcanTypeArgs } from './virtual-link-types/veth-vxcan.interfaces';
import { AddLinkIpipSitTypeArgs } from './virtual-link-types/ipip-sit.interfaces';
import { AddLinkGreGretapTypeArgs } from './virtual-link-types/gre-gretap.interfaces';
import { AddLinkIp6GreIp6gretapTypeArgs } from './virtual-link-types/ip6gre-ip6gretap.interfaces';
import { AddLinkIpoibTypeArgs } from './virtual-link-types/ipoib.interfaces';
import { AddLinkErspanIp6erspanTypeArgs } from './virtual-link-types/erspan-ip6erspan.interfaces';
import { AddLinkGeneveTypeArgs } from './virtual-link-types/geneve.interfaces';
import { AddLinkBareudpTypeArgs } from './virtual-link-types/bareup.interfaces';
import { AddLinkMacvlanMacvtapTypeArgs } from './virtual-link-types/macvlan-macvtap.interfaces';
import { AddLinkHsrTypeArgs } from './virtual-link-types/hsr.interfaces';
import { AddLinkVrfTypeArgs } from './virtual-link-types/vrf.interfaces';
import { AddLinkRmnetTypeArgs } from './virtual-link-types/rmnet.interfaces';
import { AddLinkXfrmTypeArgs } from './virtual-link-types/xfrm.interfaces';
import { AddLinkBridgeTypeArgs } from './virtual-link-types/bridge.interfaces';
import { AddLinkMacsecTypeArgs } from './virtual-link-types/macsec.interfaces';
import { AddLinkCanTypeArgs } from './virtual-link-types/can.interfaces';

export const typePropertiesSchema: any = {
  [LinkTypes.Vlan]: AddLinkVlanArgsSchema as Required<JSONSchemaType<AddLinkVlanTypeArgs>>,
  [LinkTypes.Vxlan]: AddLinkVxlanArgsSchema as Required<JSONSchemaType<AddLinkVxlanTypeArgs>>,
  [LinkTypes.Veth]: AddLinkVethVxcanArgsSchema as Required<JSONSchemaType<AddLinkVethVxcanTypeArgs>>,
  [LinkTypes.Vxcan]: AddLinkVethVxcanArgsSchema as Required<JSONSchemaType<AddLinkVethVxcanTypeArgs>>,
  [LinkTypes.Can]: AddLinkCanArgsSchema as Required<JSONSchemaType<AddLinkCanTypeArgs>>,
  [LinkTypes.Ipip]: AddLinkIpipSipArgsSchema as Required<JSONSchemaType<AddLinkIpipSitTypeArgs>>,
  [LinkTypes.Sit]: AddLinkIpipSipArgsSchema as Required<JSONSchemaType<AddLinkIpipSitTypeArgs>>,
  [LinkTypes.Gre]: AddGreGretapArgsSchema as Required<JSONSchemaType<AddLinkGreGretapTypeArgs>>,
  [LinkTypes.Gretap]: AddGreGretapArgsSchema as Required<JSONSchemaType<AddLinkGreGretapTypeArgs>>,
  [LinkTypes.Ip6gre]: AddLinkIp6GreIp6GretapArgsSchema as Required<JSONSchemaType<AddLinkIp6GreIp6gretapTypeArgs>>,
  [LinkTypes.Ip6gretap]: AddLinkIp6GreIp6GretapArgsSchema as Required<JSONSchemaType<AddLinkIp6GreIp6gretapTypeArgs>>,
  [LinkTypes.Ipoib]: AddLinkIpoibArgsSchema as Required<JSONSchemaType<AddLinkIpoibTypeArgs>>,
  [LinkTypes.Erspan]: AddLinkErspanIp6ErspanArgsSchema as Required<JSONSchemaType<AddLinkErspanIp6erspanTypeArgs>>,
  [LinkTypes.Ip6erspan]: AddLinkErspanIp6ErspanArgsSchema as Required<JSONSchemaType<AddLinkErspanIp6erspanTypeArgs>>,
  [LinkTypes.Geneve]: AddLinkGeneveArgsSchema as Required<JSONSchemaType<AddLinkGeneveTypeArgs>>,
  [LinkTypes.Bareudp]: AddLinkBareudpArgsSchema as Required<JSONSchemaType<AddLinkBareudpTypeArgs>>,
  [LinkTypes.Macvlan]: AddLinkMacvlanMacvtapArgsSchema as Required<JSONSchemaType<AddLinkMacvlanMacvtapTypeArgs>>,
  [LinkTypes.Macvtap]: AddLinkMacvlanMacvtapArgsSchema as Required<JSONSchemaType<AddLinkMacvlanMacvtapTypeArgs>>,
  [LinkTypes.Hsr]: AddLinkHsrArgsSchema as Required<JSONSchemaType<AddLinkHsrTypeArgs>>,
  [LinkTypes.Vrf]: AddLinkVrfArgsSchema as Required<JSONSchemaType<AddLinkVrfTypeArgs>>,
  [LinkTypes.Rmnet]: AddLinkRmnetArgsSchema as Required<JSONSchemaType<AddLinkRmnetTypeArgs>>,
  [LinkTypes.Xfrm]: AddLinkXfrmArgsSchema as Required<JSONSchemaType<AddLinkXfrmTypeArgs>>,
  [LinkTypes.Bridge]: AddLinkBridgeArgsSchema as Required<JSONSchemaType<AddLinkBridgeTypeArgs>>,
  [LinkTypes.Macsec]: AddLinkMacsecArgsSchema as Required<JSONSchemaType<AddLinkMacsecTypeArgs>>,
  [LinkTypes.Bond]: {
    type: 'boolean',
    enum: [true],
    nullable: true
  },
  [LinkTypes.Dummy]: {
    type: 'boolean',
    enum: [true],
    nullable: true
  },
  [LinkTypes.Ifb]: {
    type: 'boolean',
    enum: [true],
    nullable: true
  },
  [LinkTypes.Vcan]: {
    type: 'boolean',
    enum: [true],
    nullable: true
  },
  [LinkTypes.Ip6tnl]: {
    type: 'boolean',
    enum: [true],
    nullable: true
  },
  [LinkTypes.Vti]: {
    type: 'boolean',
    enum: [true],
    nullable: true
  },
  [LinkTypes.Nlmon]: {
    type: 'boolean',
    enum: [true],
    nullable: true
  },
  [LinkTypes.Ipvlan]: {
    type: 'boolean',
    enum: [true],
    nullable: true
  },
  [LinkTypes.Ipvtap]: {
    type: 'boolean',
    enum: [true],
    nullable: true
  },
  [LinkTypes.Lowpan]: {
    type: 'boolean',
    enum: [true],
    nullable: true
  },
  [LinkTypes.Netdevsim]: {
    type: 'boolean',
    enum: [true],
    nullable: true
  }
};

export const LinkAddSchema: JSONSchemaType<LinkAddOptions> = {
  $id: SchemaIds.LinkAdd,
  type: 'object',
  required: ['name', 'type'],
  properties: {
    link: {
      type: 'string',
      minLength: 1,
      maxLength: 15,
      nullable: true
    },
    name: {
      type: 'string',
      minLength: 1,
      maxLength: 15
    },
    txqueuelen: {
      type: 'integer',
      minimum: 1,
      nullable: true
    },
    address: {
      type: 'string',
      format: 'mac',
      nullable: true
    },
    broadcast: {
      type: 'string',
      format: 'mac',
      nullable: true
    },
    mtu: {
      type: 'integer',
      minimum: 1,
      nullable: true
    },
    index: {
      type: 'integer',
      minimum: 1,
      nullable: true
    },
    numtxqueues: {
      type: 'integer',
      minimum: 1,
      nullable: true
    },
    numrxqueues: {
      type: 'integer',
      minimum: 1,
      nullable: true
    },
    gso_max_size: {
      type: 'integer',
      minimum: 1,
      nullable: true
    },
    gso_max_segs: {
      type: 'integer',
      minimum: 1,
      nullable: true
    },
    type: {
      type: 'object',
      properties: typePropertiesSchema
    }
  }
};