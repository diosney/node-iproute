import { JSONSchemaType } from 'ajv';

import { VirtualLinkTypes }                 from './add.constants';
import { SchemaIds }                        from '../../common/constants/schemas';
import { LinkAddOptions }                   from './add.interfaces';
import { AddLinkBareudpArgsSchema }         from './virtual-link-types/bareup.schema';
import { AddLinkBridgeArgsSchema }          from './virtual-link-types/bridge.schema';
import { AddLinkErspanIp6ErspanArgsSchema } from './virtual-link-types/erspan-ip6erspan.schema';
import { AddLinkGeneveArgsSchema }          from './virtual-link-types/geneve.schema';
import { AddGreGretapArgsSchema }           from './virtual-link-types/gre-gretap.schema';
import { AddLinkHsrArgsSchema }             from './virtual-link-types/hsr.schema';
import { AddLinkIp6GreIp6GretapArgsSchema } from './virtual-link-types/ip6gre-ip6gretap.schema';
import { AddLinkIpipSipArgsSchema }         from './virtual-link-types/ipip-sit.schema';
import { AddLinkIpoIbArgsSchema }           from './virtual-link-types/ipoib.schema';
import { AddLinkMacsecArgsSchema }          from './virtual-link-types/macsec.schema';
import { AddLinkMacvlanMacvtapArgsSchema }  from './virtual-link-types/macvlan-macvtap.schema';
import { AddLinkRmnetArgsSchema }           from './virtual-link-types/rmnet.schema';
import { AddLinkVethVxcanArgsSchema }       from './virtual-link-types/veth-vxcan.schema';
import { AddLinkVlanArgsSchema }            from './virtual-link-types/vlan.schema';
import { AddLinkVrfArgsSchema }             from './virtual-link-types/vrf.schema';
import { AddLinkVxlanArgsSchema }           from './virtual-link-types/vxlan.schema';
import { AddLinkXfrmArgsSchema }            from './virtual-link-types/xfrm.schema';

export const typeArgsSchemas: any = [
  AddLinkVlanArgsSchema,
  AddLinkVxlanArgsSchema,
  AddLinkVethVxcanArgsSchema,
  AddLinkIpipSipArgsSchema,
  AddGreGretapArgsSchema,
  AddLinkIp6GreIp6GretapArgsSchema,
  AddLinkIpoIbArgsSchema,
  AddLinkErspanIp6ErspanArgsSchema,
  AddLinkGeneveArgsSchema,
  AddLinkBareudpArgsSchema,
  AddLinkMacvlanMacvtapArgsSchema,
  AddLinkHsrArgsSchema,
  AddLinkVrfArgsSchema,
  AddLinkRmnetArgsSchema,
  AddLinkXfrmArgsSchema,
  AddLinkBridgeArgsSchema,
  AddLinkMacsecArgsSchema
];

export const LinkAddSchema: JSONSchemaType<LinkAddOptions> = {
  $id       : SchemaIds.LinkAdd,
  type      : 'object',
  required  : ['name', 'type', 'type_'],
  properties: {
    link        : {
      type     : 'string',
      minLength: 1,
      maxLength: 15,
      nullable : true
    },
    name        : {
      type     : 'string',
      minLength: 1,
      maxLength: 15
    },
    txqueuelen  : {
      type    : 'integer',
      minimum : 1,
      nullable: true
    },
    address     : {
      type    : 'string',
      format  : 'mac',
      nullable: true
    },
    broadcast   : {
      type    : 'string',
      format  : 'mac',
      nullable: true
    },
    mtu         : {
      type    : 'integer',
      minimum : 1,
      nullable: true
    },
    index       : {
      type    : 'integer',
      minimum : 1,
      nullable: true
    },
    numtxqueues : {
      type    : 'integer',
      minimum : 1,
      nullable: true
    },
    numrxqueues : {
      type    : 'integer',
      minimum : 1,
      nullable: true
    },
    gso_max_size: {
      type    : 'integer',
      minimum : 1,
      nullable: true
    },
    gso_max_segs: {
      type    : 'integer',
      minimum : 1,
      nullable: true
    },
    type        : {
      type: 'string',
      enum: Object.values(VirtualLinkTypes) as VirtualLinkTypes[]
    },
    // TODO: How to condition anyOf depending of `type`? if/then/else?
    type_: {
      anyOf: typeArgsSchemas
    }
  }
};