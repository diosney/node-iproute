import { JSONSchemaType } from 'ajv';

import { SchemaIds }                     from '../../../../common/constants/schemas';
import { MacvlanMacvtapModes }           from '../add.constants';
import { AddLinkMacvlanMacvtapTypeArgs } from './macvlan-macvtap.interfaces';

export const AddLinkMacvlanMacvtapArgsSchema: JSONSchemaType<AddLinkMacvlanMacvtapTypeArgs> = {
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