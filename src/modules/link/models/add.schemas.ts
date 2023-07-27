import { JSONSchemaType } from 'ajv';

import { VirtualLinkTypes }       from './add.constants';
import { SchemaIds }              from '../../../common/constants/schemas';
import { LinkAddOptions }         from './add.interfaces';
import { LinkVlanOptionsSchema }  from './virtual-link-types/vlan.schemas';
import { LinkVxlanOptionsSchema } from './virtual-link-types/vxlan.schemas';

export const LinkAddSchema: JSONSchemaType<LinkAddOptions> = {
  $id       : SchemaIds.LinkAdd,
  type      : 'object',
  required  : ['name', 'type', 'type_args'],
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
      type    : 'number',
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
      type    : 'number',
      minimum : 1,
      nullable: true
    },
    index       : {
      type    : 'number',
      minimum : 1,
      nullable: true
    },
    numtxqueues : {
      type    : 'number',
      minimum : 1,
      nullable: true
    },
    numrxqueues : {
      type    : 'number',
      minimum : 1,
      nullable: true
    },
    gso_max_size: {
      type    : 'number',
      minimum : 1,
      nullable: true
    },
    gso_max_segs: {
      type    : 'number',
      minimum : 1,
      nullable: true
    },
    type        : {
      type: 'string',
      enum: Object.values(VirtualLinkTypes) as VirtualLinkTypes[]
    },
    // TODO: How to condition ayOf depending of `type`?
    type_args   : {
      anyOf: [
        LinkVlanOptionsSchema,
        LinkVxlanOptionsSchema
      ]
    }
  }
};