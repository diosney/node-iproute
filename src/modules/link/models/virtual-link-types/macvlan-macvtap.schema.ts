import { JSONSchemaType } from 'ajv';

import { SchemaIds }                     from '../../../../common/constants/schemas';
import { MacvlanMacvtapModes }           from '../add.constants';
import { LinkMacvlanMacvtapTypeOptions } from './macvlan-macvtap.interfaces';

export const LinkMacvlanMacvtapOptionsSchema: JSONSchemaType<LinkMacvlanMacvtapTypeOptions> = {
  $id                 : SchemaIds.LinkAddMacvlanMacvtapOptions,
  type                : 'object',
  required            : ['mode'],
  additionalProperties: false,
  properties          : {
    mode      : {
      type: 'string',
      enum: Object.values(MacvlanMacvtapModes) as MacvlanMacvtapModes[]
    },
    bcqueuelen: {
      type    : 'number',
      nullable: true,
      minimum : 1,
      maximum : 4294967295
    }
  }
};