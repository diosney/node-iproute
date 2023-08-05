import { JSONSchemaType } from 'ajv';

import { ExtendedVirtualLinkTypes } from './add.constants';
import { SchemaIds }                from '../../common/constants/schemas';
import { LinkShowOptions }          from './show.interfaces';

export const LinkShowSchema: JSONSchemaType<LinkShowOptions> = {
  $id       : SchemaIds.LinkShow,
  type      : 'object',
  required  : [],
  // TODO: `dev` and `groups` are exclusive, see later how to enforce this.
  properties: {
    dev   : {
      type     : 'string',
      minLength: 1,
      nullable : true
    },
    group : {
      type    : 'number',
      minimum : 0,
      nullable: true
    },
    up    : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    master: {
      type     : 'string',
      minLength: 1,
      nullable : true
    },
    type  : {
      type    : 'string',
      enum    : Object.values(ExtendedVirtualLinkTypes) as ExtendedVirtualLinkTypes[],
      nullable: true
    },
    vrf   : {
      type     : 'string',
      minLength: 1,
      nullable : true
    }
  }
};