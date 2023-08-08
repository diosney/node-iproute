import { JSONSchemaType } from 'ajv';

import { SchemaIds }             from '../../../common/constants/schemas';
import { AddressFamilies }       from '../../address/add.constants';
import { EncapSeg6LocalActions } from '../add.constants';
import { RouteRoutingTables }    from '../show.constants';

import {
  AddRouteSeg6LocalEncapArgs,
  EndB6Seg6LocalEncapArgs,
  EndDt6Seg6LocalEncapArgs,
  EndXSeg6LocalEncapArgs
} from './seg6local.interfaces';



export const EndXSeg6LocalEncapArgsSchema: JSONSchemaType<EndXSeg6LocalEncapArgs> = {
  $id       : SchemaIds.RouteAddEndXSeg6LocalEncapArgs,
  type      : 'object',
  required  : [],
  properties: {
    nh6   : {
      type    : 'boolean',
      enum    : [true],
      default : true,
      nullable: true
    },
    via   : {
      type      : 'object',
      required  : ['address'],
      nullable  : true,
      properties: {
        family : {
          type    : 'string',
          enum    : Object.values(AddressFamilies) as AddressFamilies[],
          nullable: true
        },
        address: {
          type  : 'string',
          format: 'ip-with-optional-mask'
        }
      }
    },
    dev   : {
      type     : 'string',
      minLength: 1,
      nullable : true
    },
    weight: {
      type    : 'number',
      minimum : 1,
      nullable: true
    }
  }
};

export const EndDt6Seg6LocalEncapArgsSchema: JSONSchemaType<EndDt6Seg6LocalEncapArgs> = {
  $id       : SchemaIds.RouteAddEndDt6Seg6LocalEncapArgs,
  type      : 'object',
  required  : [],
  properties: {
    table   : {
      type    : ['string', 'integer'],
      nullable: true,
      oneOf   : [
        {
          type    : 'string',
          enum    : Object.values(RouteRoutingTables) as RouteRoutingTables[],
          nullable: true
        },
        {
          type    : 'integer',
          minimum : 0,
          nullable: true
        }
      ]
    },
    vrftable: {
      type    : ['string', 'integer'],
      nullable: true,
      oneOf   : [
        {
          type    : 'string',
          enum    : Object.values(RouteRoutingTables) as RouteRoutingTables[],
          nullable: true
        },
        {
          type    : 'integer',
          minimum : 0,
          nullable: true
        }
      ]
    },
    via     : {
      type      : 'object',
      required  : ['address'],
      nullable  : true,
      properties: {
        family : {
          type    : 'string',
          enum    : Object.values(AddressFamilies) as AddressFamilies[],
          nullable: true
        },
        address: {
          type  : 'string',
          format: 'ip-with-optional-mask'
        }
      }
    },
    dev     : {
      type     : 'string',
      minLength: 1,
      nullable : true
    },
    weight  : {
      type    : 'number',
      minimum : 1,
      nullable: true
    }
  }
};

export const EndB6Seg6LocalEncapArgsSchema: JSONSchemaType<EndB6Seg6LocalEncapArgs> = {
  $id       : SchemaIds.RouteAddEndB6Seg6LocalEncapArgs,
  type      : 'object',
  required  : ['segs'],
  properties: {
    srh   : {
      type    : 'boolean',
      enum    : [true],
      default : true,
      nullable: true
    },
    segs  : {
      type  : 'string',
      format: 'comma-separated-ipv6-addresses'
    },
    hmac  : {
      type    : 'integer',
      minimum : 0,
      nullable: true
    },
    via   : {
      type      : 'object',
      required  : ['address'],
      nullable  : true,
      properties: {
        family : {
          type    : 'string',
          enum    : Object.values(AddressFamilies) as AddressFamilies[],
          nullable: true
        },
        address: {
          type  : 'string',
          format: 'ip-with-optional-mask'
        }
      }
    },
    dev   : {
      type     : 'string',
      minLength: 1,
      nullable : true
    },
    weight: {
      type    : 'number',
      minimum : 1,
      nullable: true
    }
  }
};

export const RouteSeg6LocalEncapArgsSchema: JSONSchemaType<AddRouteSeg6LocalEncapArgs> = {
  $id       : SchemaIds.RouteAddSeg6LocalEncapArgs,
  type      : 'object',
  required  : ['action'],
  properties: {
    seg6local  : {
      type    : 'boolean',
      enum    : [true],
      default : true,
      nullable: true
    },
    action     : {
      type: 'string',
      enum: Object.values(EncapSeg6LocalActions) as EncapSeg6LocalActions[]
    },
    action_args: {
      type    : 'object',
      nullable: true,
      oneOf   : [
        EndXSeg6LocalEncapArgsSchema,
        EndDt6Seg6LocalEncapArgsSchema,
        EndB6Seg6LocalEncapArgsSchema
      ]
    },
    count      : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    }
  }
};