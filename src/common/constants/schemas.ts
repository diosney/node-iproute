import { JSONSchemaType } from 'ajv';

import { GlobalOptions }        from '../interfaces/common';
import { IpCommandTestOptions } from '../interfaces/tests';
import { TestEnum }             from './tests';

export enum SchemaIds {
  GlobalOptions                 = '#global-options',
  IpCommandTestOptions          = '#ip-command-test-options',

  LinkAdd                       = '#link-add',
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
  LinkAddBridgeOptions          = '#link-add-bridge'
}

export const GlobalOptionsSchema: JSONSchemaType<GlobalOptions> = {
  $id       : SchemaIds.GlobalOptions,
  type      : 'object',
  properties: {
    sudo  : {
      type    : 'boolean',
      default : false,
      nullable: true
    },
    dryRun: {
      type    : 'boolean',
      default : false,
      nullable: true
    }
  }
};

export const IpCommandTestOptionsSchema: JSONSchemaType<IpCommandTestOptions> = {
  $id       : SchemaIds.IpCommandTestOptions,
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
        an_enum : {
          type: 'string',
          enum: Object.values(TestEnum) as TestEnum[]
        }
      }
    }
  }
};