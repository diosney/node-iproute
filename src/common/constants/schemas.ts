import { JSONSchemaType } from 'ajv';

import {
  FilePathRequiredGlobalOption,
  GlobalOptions
} from '../interfaces/common';

import { ComplexIpCommandTestOptions } from '../interfaces/tests';
import { TestEnum } from './tests';
import { Empty } from '../interfaces/common';

/**
 * Schema ids.
 *
 * @category Constants
 * @internal
 */
export enum SchemaIds {
  Empty                       = '#empty-schema',

  GlobalOptions               = '#global-options',
  FilePathGlobalOption        = '#global-options-file-path',
  ComplexIpCommandTestOptions = '#complex-ip-command-test-options',

  RoutingTablesOptions        = '#routing-tables-options',

  LinkAdd                     = '#link-add',
  LinkDelete                  = '#link-delete',
  LinkShow                    = '#link-show',
  LinkSet                     = '#link-set',

  AddressAdd                  = '#address-add',
  AddressDelete               = '#address-delete',
  AddressFlush                = '#address-flush',
  AddressShow                 = '#address-show',

  RuleAdd                     = '#rule-add',
  RuleShow                    = '#rule-show',

  RouteShow                   = '#route-show',
  RouteGet                    = '#route-get',
  RouteAdd                    = '#route-add',

  Monitor                     = '#monitor',

  AddrlabelAdd                = '#addrlabel-add',
  AddrlabelDel                = '#addrlabel-del',

  NeighbourAdd                = '#neighbour-add',
  NeighbourDel                = '#neighbour-del',
  NeighbourShow               = '#neighbour-show',

  NtableShow                  = '#ntable-show',
  NtableChange                = '#ntable-change',

  TunnelAdd                   = '#tunnel-add',
  Tunnel6rd                   = '#tunnel-6rd',
  TunnelPrl                   = '#tunnel-prl',

  TunTapAdd                   = '#tuntap-add',
  TunTapShow                  = '#tuntap-show',

  MaddressAdd                 = '#maddress-add',
  MaddressShow                = '#maddress-show',

  MrouteShow                  = '#mroute-show',
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
    aString            : {
      type: 'string'
    },
    aNumber            : {
      type   : 'number',
      minimum: 0
    },
    anEnum             : {
      type: 'string',
      enum: Object.values(TestEnum) as TestEnum[]
    },
    aFlag              : {
      type: 'boolean'
    },
    noaFlag            : {
      type: 'boolean'
    },
    number_            : {
      type    : 'number',
      nullable: true
    },
    aTuple             : {
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
    anArray            : {
      type : 'array',
      items: {
        type      : 'object',
        required  : ['aNumber'],
        properties: {
          aNumber                : {
            type: 'number'
          },
          aStringWithDefaultValue: {
            type    : 'string',
            default : 'default-value',
            nullable: true
          }
        }
      }
    },
    nestedInvisibleKey_: {
      type      : 'object',
      required  : [
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
          type   : 'number',
          minimum: 0
        },
        anEnum : {
          type: 'string',
          enum: Object.values(TestEnum) as TestEnum[]
        },
        aFlag  : {
          type: 'boolean'
        },
        noaFlag: {
          type: 'boolean'
        },
        number_: {
          type    : 'number',
          nullable: true
        },
        aTuple : {
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
        anArray: {
          type : 'array',
          items: {
            type      : 'object',
            required  : ['aNumber'],
            properties: {
              aNumber                : {
                type: 'number'
              },
              aStringWithDefaultValue: {
                type    : 'string',
                default : 'default-value',
                nullable: true
              }
            }
          }
        }
      }
    }
  }
};