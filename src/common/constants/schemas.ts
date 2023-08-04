import { JSONSchemaType }           from 'ajv';
import { SetLinkBondSlaveTypeArgs } from '../../modules/link/models/extended-virtual-link-types/bond-slave.interfaces';

import { GlobalOptions } from '../interfaces/common';

import {
  ComplexIpCommandTestOptions,
  EmptyIpCommandTestOptions
} from '../interfaces/tests';

import { TestEnum } from './tests';

export enum SchemaIds {
  GlobalOptions                 = '#global-options',
  ComplexIpCommandTestOptions   = '#complex-ip-command-test-options',
  EmptyIpCommandTestOptions     = '#empty-ip-command-test-options',

  LinkAdd                       = '#link-add',
  LinkDelete                    = '#link-delete',
  LinkShow                      = '#link-show',
  LinkSet                       = '#link-set',

  LinkAddVlanOptions            = '#link-add-vlan',
  LinkAddVxlanOptions           = '#link-add-vxlan',
  LinkAddVethVxcanOptions       = '#link-add-veth-vxcan',
  LinkAddIpipSipOptions         = '#link-add-ipip-sip',
  LinkAddGreGretapOptions       = '#link-add-gre-gretap',
  LinkAddIp6GreIp6gretapOptions = '#link-add-ip6gre-ip6gretap',
  LinkAddIpoibOptions           = '#link-add-ipoib',
  LinkAddErspanIp6erspanOptions = '#link-add-erspan-ip6erspan',
  LinkAddGeneveOptions          = '#link-add-geneve',
  LinkAddBareupOptions          = '#link-add-bareudp',
  LinkAddMacvlanMacvtapOptions  = '#link-add-macvlan-macvtap',
  LinkAddHsrOptions             = '#link-add-hsr',
  LinkAddVrfOptions             = '#link-add-vrf',
  LinkAddRmnetOptions           = '#link-add-rmnet',
  LinkAddXfrmOptions            = '#link-add-xfrm',
  LinkAddBridgeOptions          = '#link-add-bridge',
  LinkAddMacsecOptions          = '#link-add-macsec',

  LinkSetMacvlanMacvtapOptions  = '#link-set-macvlan-macvtap',
  LinkSetBondSlaveOptions       = '#link-set-bond-slave',
  LinkSetBridgeSlaveOptions     = '#link-set-bridge-slave',
}

export const GlobalOptionsSchema: JSONSchemaType<GlobalOptions> = {
  $id       : SchemaIds.GlobalOptions,
  type      : 'object',
  properties: {
    sudo         : {
      type    : 'boolean',
      default : false,
      nullable: true
    },
    dryRun       : {
      type    : 'boolean',
      default : false,
      nullable: true
    },
    '-details'   : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    '-statistics': {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    '-json'      : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    }
  }
};

export const EmptyIpCommandTestOptionsSchema: JSONSchemaType<EmptyIpCommandTestOptions> = {
  $id       : SchemaIds.EmptyIpCommandTestOptions,
  type      : 'object',
  required  : [],
  properties: {}
};

export const IpCommandTestOptionsSchema: JSONSchemaType<ComplexIpCommandTestOptions> = {
  $id       : SchemaIds.ComplexIpCommandTestOptions,
  type      : 'object',
  required  : [
    'a_string',
    'a_number',
    'a_tuple',
    'a_flag',
    'noa_flag',
    'an_enum',
    'type_args'
  ],
  properties: {
    a_string : {
      type: 'string'
    },
    a_number : {
      type   : 'number',
      minimum: 0
    },
    a_tuple  : {
      type    : 'array',
      items   : [
        {
          type   : 'number',
          minimum: 0
        },
        {
          type   : 'number',
          minimum: 0
        }
      ],
      minItems: 2,
      maxItems: 2
    },
    a_flag   : {
      type: 'boolean'
    },
    noa_flag : {
      type: 'boolean'
    },
    an_enum  : {
      type: 'string',
      enum: Object.values(TestEnum) as TestEnum[]
    },
    type_arg : {
      type    : 'number',
      nullable: true
    },
    type_args: {
      type      : 'object',
      required  : [
        'a_string',
        'a_number',
        'a_tuple',
        'a_flag',
        'noa_flag',
        'an_enum'
      ],
      properties: {
        a_string: {
          type: 'string'
        },
        a_number: {
          type   : 'number',
          minimum: 0
        },
        a_tuple : {
          type    : 'array',
          items   : [
            {
              type   : 'number',
              minimum: 0
            },
            {
              type   : 'number',
              minimum: 0
            }
          ],
          minItems: 2,
          maxItems: 2
        },
        a_flag  : {
          type: 'boolean'
        },
        noa_flag: {
          type: 'boolean'
        },
        type_arg: {
          type    : 'number',
          nullable: true
        },
        an_enum : {
          type: 'string',
          enum: Object.values(TestEnum) as TestEnum[]
        }
      }
    }
  }
};