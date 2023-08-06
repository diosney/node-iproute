import { JSONSchemaType } from 'ajv';

import { SchemaIds }                from '../../../common/constants/schemas';
import { SetLinkBondSlaveTypeArgs } from './bond-slave.interfaces';

export const SetLinkBondSlaveArgsSchema: JSONSchemaType<SetLinkBondSlaveTypeArgs> = {
  $id                 : SchemaIds.LinkSetBondSlaveOptions,
  type                : 'object',
  required            : [],
  additionalProperties: false,
  properties          : {
    queue_id: {
      type    : 'integer',
      minimum : 0,
      nullable: true
    }
  }
};