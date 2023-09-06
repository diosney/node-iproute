import { JSONSchemaType } from 'ajv';

import { MacvlanMacvtapModes } from '../../link.constants';

import {
  AddLinkMacvlanMacvtapTypeArgs,
  SetLinkMacvlanMacvtapTypeArgs
} from './macvlan-macvtap.interfaces';

export const AddLinkMacvlanMacvtapArgsSchema: JSONSchemaType<AddLinkMacvlanMacvtapTypeArgs> = {
  type                : 'object',
  required            : ['mode'],
  additionalProperties: false,
  properties          : {
    mode      : {
      type: 'string',
      enum: Object.values(MacvlanMacvtapModes) as MacvlanMacvtapModes[]
    },
    bcqueuelen: {
      type    : 'integer',
      nullable: true,
      minimum : 1,
      maximum : 4294967295
    }
  }
};

export const SetLinkMacvlanMacvtapArgsSchema: JSONSchemaType<SetLinkMacvlanMacvtapTypeArgs> = {
  type                : 'object',
  required            : [],
  additionalProperties: false,
  properties          : {
    macaddr   : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    add       : {
      type    : 'string',
      format  : 'mac',
      nullable: true
    },
    set       : {
      type    : 'string',
      format  : 'mac',
      nullable: true
    },
    del       : {
      type    : 'string',
      format  : 'mac',
      nullable: true
    },
    flush     : {
      type    : 'boolean',
      enum    : [true],
      nullable: true
    },
    bcqueuelen: {
      type    : 'integer',
      nullable: true,
      minimum : 1,
      maximum : 4294967295
    }
  }
};