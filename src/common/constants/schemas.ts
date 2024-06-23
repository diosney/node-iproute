import { JSONSchemaType } from 'ajv';

import { Empty, FilePathRequiredGlobalOption, GlobalOptions, StdinRequiredGlobalOption } from '../interfaces/common';

import { ComplexIpCommandTestOptions } from '../interfaces/tests';
import { TestEnum } from './tests';

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
  StdinGlobalOption           = '#global-options-stdin',
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
  NeighbourGet                = '#neighbour-get',

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
    stdin        : {
      type     : 'string',
      minLength: 1,
      nullable : true
    },
    '-4'         : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    '-6'         : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    '-B'         : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    '-M'         : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    '-0'         : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    '-oneline'   : {
      type    : 'boolean',
      enum    : [true],
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
    },
    '-tshort'    : {
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

export const StdinGlobalOptionSchema: JSONSchemaType<StdinRequiredGlobalOption> = {
  $id                 : SchemaIds.StdinGlobalOption,
  type                : 'object',
  required            : ['stdin'],
  additionalProperties: true,
  properties          : {
    stdin: {
      type     : 'string',
      minLength: 1
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

    'nestedInvisibleKey'
  ],
  properties: {
    aString           : {
      type: 'string'
    },
    aNumber           : {
      type   : 'number',
      minimum: 0
    },
    anEnum            : {
      type: 'string',
      enum: Object.values(TestEnum) as TestEnum[]
    },
    aFlag             : {
      type: 'boolean'
    },
    noaFlag           : {
      type: 'boolean'
    },
    number            : {
      type    : 'number',
      keyless : true,
      nullable: true
    },
    aTuple            : {
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
    anArray           : {
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
    nestedInvisibleKey: {
      type      : 'object',
      keyless   : true,
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
        number : {
          type    : 'number',
          keyless : true,
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