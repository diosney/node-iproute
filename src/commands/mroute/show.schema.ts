import { JSONSchemaType } from 'ajv';

import { SchemaIds } from '../../common/constants/schemas';
import { MrouteShowOptions } from './show.interfaces';
import { RouteRoutingTables } from '../route/show.constants';

export const MrouteShowSchema: JSONSchemaType<MrouteShowOptions> = {
  $id       : SchemaIds.MrouteShow,
  type      : 'object',
  required  : [],
  properties: {
    to   : {
      type    : 'string',
      format  : 'ip-with-required-mask',
      nullable: true
    },
    from : {
      type    : 'string',
      format  : 'ip-with-required-mask',
      nullable: true
    },
    iif  : {
      type     : 'string',
      minLength: 1,
      nullable : true
    },
    table: {
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
    }
  }
};