import { JSONSchemaType } from 'ajv';

import { SchemaIds } from '../../common/constants/schemas';
import { MaddressShowOptions } from './show.interfaces';

export const MaddressShowSchema: JSONSchemaType<MaddressShowOptions> = {
  $id       : SchemaIds.MaddressShow,
  type      : 'object',
  required  : [],
  properties: {
    dev: {
      type     : 'string',
      minLength: 1,
      nullable : true
    }
  }
};