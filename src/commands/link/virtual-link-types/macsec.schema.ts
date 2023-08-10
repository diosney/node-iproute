import { JSONSchemaType } from 'ajv';
import { OnOffToggle }    from '../../../common/constants/attribute-values';

import {
  MacsecValidationModeOptions,
  SecureAssociationEncodings
} from '../../link.constants';

import { SchemaIds }             from '../../../common/constants/schemas';
import { AddLinkMacsecTypeArgs } from './macsec.interfaces';

export const AddLinkMacsecArgsSchema: JSONSchemaType<AddLinkMacsecTypeArgs> = {
  $id:                  SchemaIds.LinkAddMacsecOptions,
  type:                 'object',
  required:             [],
  additionalProperties: false,
  properties:           {
    address:     {
      type:     'string',
      format:   'mac',
      nullable: true
    },
    port:        {
      type:     'integer',
      minimum:  1,
      maximum:  65535,
      nullable: true
    },
    sci:         {
      type:     'string',
      pattern:  '^[0-9a-fA-F]{16}$',
      nullable: true
    },
    cipher:      {
      type:      'string',
      minLength: 1,
      nullable:  true
    },
    icvlen:      {
      type:     'integer',
      minimum:  1,
      maximum:  16,
      nullable: true
    },
    encrypt:     {
      type:     'string',
      enum:     Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    send_sci:    {
      type:     'string',
      enum:     Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    end_station: {
      type:     'string',
      enum:     Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    scb:         {
      type:     'string',
      enum:     Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    protect:     {
      type:     'string',
      enum:     Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    replay:      {
      type:     'string',
      enum:     Object.values(OnOffToggle) as OnOffToggle[],
      nullable: true
    },
    window:      {
      type:    'integer',
      minimum: 0,
      // 2^32-1
      maximum:  4294967295,
      nullable: true
    },
    validate:    {
      type:     'string',
      enum:     Object.values(MacsecValidationModeOptions) as MacsecValidationModeOptions[],
      nullable: true
    },
    encodingsa:  {
      type:     'integer',
      enum:     Object.values(SecureAssociationEncodings) as SecureAssociationEncodings[],
      nullable: true
    }
  }
};