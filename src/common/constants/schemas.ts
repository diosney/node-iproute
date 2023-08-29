import { JSONSchemaType } from 'ajv';

import {
  FilePathRequiredGlobalOption,
  GlobalOptions
} from '../interfaces/common';

import { ComplexIpCommandTestOptions } from '../interfaces/tests';
import { TestEnum }                    from './tests';
import { Empty }                       from '../interfaces/common';

/**
 * Schema ids.
 *
 * @category Constants
 * @internal
 */
export enum SchemaIds {
  Empty                            = '#empty-schema',

  GlobalOptions                    = '#global-options',
  FilePathGlobalOption             = '#global-options-file-path',
  ComplexIpCommandTestOptions      = '#complex-ip-command-test-options',

  RoutingTablesOptions             = '#routing-tables-options',

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

  // TODO: Error: reference "#link-set-xdp-off" resolves to more than one schema
  LinkSetXdpObjectOptions          = '#link-set-xdp-object',
  LinkSetXdpPinnedOptions          = '#link-set-xdp-pinned',
  LinkSetXdpOffOptions             = '#link-set-xdp-off',

  AddressAdd                       = '#address-add',
  AddressDelete                    = '#address-delete',
  AddressFlush                     = '#address-flush',
  AddressShow                      = '#address-show',

  RuleAdd                          = '#rule-add',
  RuleShow                         = '#rule-show',

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

  Monitor                          = '#monitor',
}

export const GlobalOptionsSchema: JSONSchemaType<GlobalOptions> = {
  $id:        SchemaIds.GlobalOptions,
  type:       'object',
  properties: {
    sudo:          {
      type:     'boolean',
      default:  false,
      nullable: true
    },
    dryRun:        {
      type:     'boolean',
      default:  false,
      nullable: true
    },
    filePath:      {
      type:     'string',
      format:   'filepath',
      nullable: true
    },
    '-details':    {
      type:     'boolean',
      enum:     [ true ],
      nullable: true
    },
    '-statistics': {
      type:     'boolean',
      enum:     [ true ],
      nullable: true
    },
    '-json':       {
      type:     'boolean',
      enum:     [ true ],
      nullable: true
    }
  }
};

export const FilePathGlobalOptionSchema: JSONSchemaType<FilePathRequiredGlobalOption> = {
  $id:                  SchemaIds.FilePathGlobalOption,
  type:                 'object',
  required:             [ 'filePath' ],
  additionalProperties: true,
  properties:           {
    filePath: {
      type:   'string',
      format: 'filepath'
    }
  }
};

export const EmptySchema: JSONSchemaType<Empty> = {
  $id:                  SchemaIds.Empty,
  type:                 'object',
  required:             [],
  additionalProperties: false,
  properties:           {}
};

export const IpCommandTestOptionsSchema: JSONSchemaType<ComplexIpCommandTestOptions> = {
  $id:        SchemaIds.ComplexIpCommandTestOptions,
  type:       'object',
  required:   [
    'aString',
    'aNumber',
    'anEnum',

    'aFlag',
    'noaFlag',

    'aTuple',
    'anArray',

    'nestedInvisibleKey_'
  ],
  properties: {
    aString:             {
      type: 'string'
    },
    aNumber:             {
      type:    'number',
      minimum: 0
    },
    anEnum:              {
      type: 'string',
      enum: Object.values(TestEnum) as TestEnum[]
    },
    aFlag:               {
      type: 'boolean'
    },
    noaFlag:             {
      type: 'boolean'
    },
    number_:             {
      type:     'number',
      nullable: true
    },
    aTuple:              {
      type:     'array',
      items:    [
        {
          type:    'number',
          minimum: 0
        },
        {
          type:    'number',
          minimum: 0
        }
      ],
      minItems: 2,
      maxItems: 2
    },
    anArray:             {
      type:  'array',
      items: {
        type:       'object',
        required:   [ 'aNumber' ],
        properties: {
          aNumber:                 {
            type: 'number'
          },
          aStringWithDefaultValue: {
            type:     'string',
            default:  'default-value',
            nullable: true
          }
        }
      }
    },
    nestedInvisibleKey_: {
      type:       'object',
      required:   [
        'aString',
        'aNumber',
        'anEnum',

        'aFlag',
        'noaFlag',

        'aTuple',
        'anArray'
      ],
      properties: {
        aString: {
          type: 'string'
        },
        aNumber: {
          type:    'number',
          minimum: 0
        },
        anEnum:  {
          type: 'string',
          enum: Object.values(TestEnum) as TestEnum[]
        },
        aFlag:   {
          type: 'boolean'
        },
        noaFlag: {
          type: 'boolean'
        },
        number_: {
          type:     'number',
          nullable: true
        },
        aTuple:  {
          type:     'array',
          items:    [
            {
              type:    'number',
              minimum: 0
            },
            {
              type:    'number',
              minimum: 0
            }
          ],
          minItems: 2,
          maxItems: 2
        },
        anArray: {
          type:  'array',
          items: {
            type:       'object',
            required:   [ 'aNumber' ],
            properties: {
              aNumber:                 {
                type: 'number'
              },
              aStringWithDefaultValue: {
                type:     'string',
                default:  'default-value',
                nullable: true
              }
            }
          }
        }
      }
    }
  }
};