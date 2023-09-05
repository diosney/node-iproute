import { JSONSchemaType } from 'ajv';

import { SchemaIds } from '../../../common/constants/schemas';
import { AddressFamilies } from '../../address.constants';
import { EncapSeg6LocalActions } from '../../route.constants';
import { RouteRoutingTables } from '../show.constants';

import {
  AddRouteSeg6LocalEncapArgs, EndB6EncapsSeg6LocalEncapArgs,
  EndB6Seg6LocalEncapArgs, EndDt46Seg6LocalEncapArgs, EndDt4Seg6LocalEncapArgs,
  EndDt6Seg6LocalEncapArgs, EndDx6Seg6LocalEncapArgs,
  EndXSeg6LocalEncapArgs
} from './seg6local.interfaces';

export const EndXSeg6LocalEncapArgsSchema: JSONSchemaType<EndXSeg6LocalEncapArgs> = {
  type: 'object',
  required: ['nh6'],
  properties: {
    nh6: {
      type: 'boolean',
      enum: [true]
    },
    via: {
      type: 'object',
      required: ['address'],
      nullable: true,
      properties: {
        family: {
          type: 'string',
          enum: Object.values(AddressFamilies) as AddressFamilies[],
          nullable: true
        },
        address: {
          type: 'string',
          format: 'ip-with-optional-mask'
        }
      }
    },
    dev: {
      type: 'string',
      minLength: 1,
      nullable: true
    },
    weight: {
      type: 'integer',
      minimum: 1,
      nullable: true
    }
  }
};

export const EndDt6Seg6LocalEncapArgsSchema: JSONSchemaType<EndDt6Seg6LocalEncapArgs> = {
  type: 'object',
  required: [],
  properties: {
    table: {
      type: ['string', 'integer'],
      nullable: true,
      oneOf: [
        {
          type: 'string',
          enum: Object.values(RouteRoutingTables) as RouteRoutingTables[],
          nullable: true
        },
        {
          type: 'integer',
          minimum: 0,
          nullable: true
        }
      ]
    },
    vrftable: {
      type: ['string', 'integer'],
      nullable: true,
      oneOf: [
        {
          type: 'string',
          enum: Object.values(RouteRoutingTables) as RouteRoutingTables[],
          nullable: true
        },
        {
          type: 'integer',
          minimum: 0,
          nullable: true
        }
      ]
    },
    via: {
      type: 'object',
      required: ['address'],
      nullable: true,
      properties: {
        family: {
          type: 'string',
          enum: Object.values(AddressFamilies) as AddressFamilies[],
          nullable: true
        },
        address: {
          type: 'string',
          format: 'ip-with-optional-mask'
        }
      }
    },
    dev: {
      type: 'string',
      minLength: 1,
      nullable: true
    },
    weight: {
      type: 'integer',
      minimum: 1,
      nullable: true
    }
  }
};

export const EndB6Seg6LocalEncapArgsSchema: JSONSchemaType<EndB6Seg6LocalEncapArgs> = {
  type: 'object',
  required: ['srh', 'segs'],
  properties: {
    srh: {
      type: 'boolean',
      enum: [true]
    },
    segs: {
      type: 'string',
      format: 'comma-separated-ipv6-addresses'
    },
    hmac: {
      type: 'integer',
      minimum: 0,
      nullable: true
    },
    via: {
      type: 'object',
      required: ['address'],
      nullable: true,
      properties: {
        family: {
          type: 'string',
          enum: Object.values(AddressFamilies) as AddressFamilies[],
          nullable: true
        },
        address: {
          type: 'string',
          format: 'ip-with-optional-mask'
        }
      }
    },
    dev: {
      type: 'string',
      minLength: 1,
      nullable: true
    },
    weight: {
      type: 'integer',
      minimum: 1,
      nullable: true
    }
  }
};

export const RouteSeg6LocalEncapArgsSchema: JSONSchemaType<AddRouteSeg6LocalEncapArgs> = {
  $id: SchemaIds.RouteAddSeg6LocalEncapArgs,
  type: 'object',
  nullable: true,
  required: ['action'],
  properties: {
    action: {
      type: 'object',
      properties: {
        [EncapSeg6LocalActions.End]: {
          type: 'boolean',
          enum: [true],
          nullable: true
        },
        [EncapSeg6LocalActions.EndX]: EndXSeg6LocalEncapArgsSchema as Required<JSONSchemaType<EndXSeg6LocalEncapArgs>>,
        [EncapSeg6LocalActions.EndDX6]: EndXSeg6LocalEncapArgsSchema as Required<JSONSchemaType<EndDx6Seg6LocalEncapArgs>>,
        [EncapSeg6LocalActions.EndDT6]: EndDt6Seg6LocalEncapArgsSchema as Required<JSONSchemaType<EndDt6Seg6LocalEncapArgs>>,
        [EncapSeg6LocalActions.EndDT4]: EndDt6Seg6LocalEncapArgsSchema as Required<JSONSchemaType<EndDt4Seg6LocalEncapArgs>>,
        [EncapSeg6LocalActions.EndDT46]: EndDt6Seg6LocalEncapArgsSchema as Required<JSONSchemaType<EndDt46Seg6LocalEncapArgs>>,
        [EncapSeg6LocalActions.EndB6]: EndB6Seg6LocalEncapArgsSchema as Required<JSONSchemaType<EndB6Seg6LocalEncapArgs>>,
        [EncapSeg6LocalActions.EndB6Encaps]: EndB6Seg6LocalEncapArgsSchema as Required<JSONSchemaType<EndB6EncapsSeg6LocalEncapArgs>>
      }
    },
    count: {
      type: 'boolean',
      enum: [true],
      nullable: true
    }
  }
};