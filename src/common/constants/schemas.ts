import { JSONSchemaType }            from 'ajv';
import { AddRouteBpfEncapArgs }      from '../../commands/route/encap-types/bpf.interfaces';
import { RouteIoam6EncapArgsSchema } from '../../commands/route/encap-types/ioam6.schema';
import { RouteSeg6EncapArgsSchema }  from '../../commands/route/encap-types/seg6.schema';
import {
  EndB6Seg6LocalEncapArgs,
  EndDt6Seg6LocalEncapArgs,
  EndXSeg6LocalEncapArgs
}                                    from '../../commands/route/encap-types/seg6local.interfaces';

import { FilePathRequiredGlobalOption, GlobalOptions } from '../interfaces/common';

import {
  ComplexIpCommandTestOptions,
  Empty
} from '../interfaces/tests';

import { TestEnum } from './tests';

export enum SchemaIds {
  Empty                            = '#empty-schema',

  GlobalOptions                    = '#global-options',
  FilePathGlobalOption             = '#global-options-file-path',
  ComplexIpCommandTestOptions      = '#complex-ip-command-test-options',

  LinkAdd                          = '#link-add',
  LinkDelete                       = '#link-delete',
  LinkShow                         = '#link-show',
  LinkSet                          = '#link-set',

  LinkAddVlanOptions               = '#link-add-vlan',
  LinkAddVxlanOptions              = '#link-add-vxlan',
  LinkAddVethVxcanOptions          = '#link-add-veth-vxcan',
  LinkAddIpipSipOptions            = '#link-add-ipip-sip',
  LinkAddGreGretapOptions          = '#link-add-gre-gretap',
  LinkAddIp6GreIp6gretapOptions    = '#link-add-ip6gre-ip6gretap',
  LinkAddIpoibOptions              = '#link-add-ipoib',
  LinkAddErspanIp6erspanOptions    = '#link-add-erspan-ip6erspan',
  LinkAddGeneveOptions             = '#link-add-geneve',
  LinkAddBareupOptions             = '#link-add-bareudp',
  LinkAddMacvlanMacvtapOptions     = '#link-add-macvlan-macvtap',
  LinkAddHsrOptions                = '#link-add-hsr',
  LinkAddVrfOptions                = '#link-add-vrf',
  LinkAddRmnetOptions              = '#link-add-rmnet',
  LinkAddXfrmOptions               = '#link-add-xfrm',
  LinkAddBridgeOptions             = '#link-add-bridge',
  LinkAddMacsecOptions             = '#link-add-macsec',

  LinkSetMacvlanMacvtapOptions     = '#link-set-macvlan-macvtap',
  LinkSetBondSlaveOptions          = '#link-set-bond-slave',
  LinkSetBridgeSlaveOptions        = '#link-set-bridge-slave',

  AddressAdd                       = '#address-add',
  AddressDelete                    = '#address-delete',
  AddressFlush                     = '#address-flush',
  AddressShow                      = '#address-show',

  RuleAdd                          = '#rule-add',

  RouteShow                        = '#route-show',
  RouteGet                         = '#route-get',
  RouteAdd                         = '#route-add',

  RouteAddBpfEncapArgs             = '#route-add-bpf-encap',
  RouteAddIoam6EncapArgs           = '#route-add-ioam6-encap',
  RouteAddIpEncapArgs              = '#route-add-ip-encap',
  RouteAddMplsEncapArgs            = '#route-add-mpls-encap',
  RouteAddSeg6EncapArgs            = '#route-add-seg6-encap',
  RouteAddSeg6LocalEncapArgs       = '#route-add-seg6local-encap',
  RouteAddEndXSeg6LocalEncapArgs   = '#route-add-seg6local-encap-endx',
  RouteAddEndDt6Seg6LocalEncapArgs = '#route-add-seg6local-encap-end-dt6',
  RouteAddEndB6Seg6LocalEncapArgs  = '#route-add-seg6local-encap-end-b6',
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
    filePath     : {
      type    : 'string',
      format  : 'filepath',
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

export const FilePathGlobalOptionSchema: JSONSchemaType<FilePathRequiredGlobalOption> = {
  $id                 : SchemaIds.FilePathGlobalOption,
  type                : 'object',
  required            : ['filePath'],
  additionalProperties: true,
  properties          : {
    filePath: {
      type  : 'string',
      format: 'filepath'
    }
  }
};

export const EmptySchema: JSONSchemaType<Empty> = {
  $id                 : SchemaIds.Empty,
  type                : 'object',
  required            : [],
  additionalProperties: false,
  properties          : {}
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