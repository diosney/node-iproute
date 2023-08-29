import { JSONSchemaType } from 'ajv';

import { ExtendedLinkTypes } from '../link.constants';
import { SchemaIds }                from '../../common/constants/schemas';
import { LinkShowOptions }          from './show.interfaces';

export const LinkShowSchema: JSONSchemaType<LinkShowOptions> = {
  $id:        SchemaIds.LinkShow,
  type:       'object',
  required:   [],
  properties: {
    dev:    {
      type:      'string',
      minLength: 1,
      nullable:  true
    },
    group:  {
      type:     'integer',
      minimum:  0,
      nullable: true
    },
    up:     {
      type:     'boolean',
      enum:     [ true ],
      nullable: true
    },
    master: {
      type:      'string',
      minLength: 1,
      nullable:  true
    },
    type:   {
      type:     'string',
      enum:     Object.values(ExtendedLinkTypes) as ExtendedLinkTypes[],
      nullable: true
    },
    vrf:    {
      type:      'string',
      minLength: 1,
      nullable:  true
    }
  }
};