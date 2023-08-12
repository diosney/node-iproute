import { JSONSchemaType } from 'ajv';

import { MonitorOptions } from './monitor.interfaces';
import { SchemaIds }      from '../../common/constants/schemas';
import { MonitorObjects } from '../monitor.constants';

export const MonitorSchema: JSONSchemaType<MonitorOptions> = {
  $id:        SchemaIds.Monitor,
  type:       'object',
  required:   [ 'object' ],
  properties: {
    object: {
      type: 'string',
      enum: Object.values(MonitorObjects) as MonitorObjects[]
    },
    dev:    {
      type:      'string',
      minLength: 1,
      nullable:  true
    }
  }
};