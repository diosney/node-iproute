import { JSONSchemaType } from 'ajv';

import { SetLinkBondSlaveTypeArgs } from './bond-slave.interfaces';

export const SetLinkBondSlaveArgsSchema: JSONSchemaType<SetLinkBondSlaveTypeArgs> = {
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