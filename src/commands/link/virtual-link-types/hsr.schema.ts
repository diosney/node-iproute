import { JSONSchemaType } from 'ajv';

import { SchemaIds }                 from '../../../common/constants/schemas';
import { HsrProtocols, HsrVersions } from '../../link.constants';
import { AddLinkHsrTypeArgs }        from './hsr.interfaces';

export const AddLinkHsrArgsSchema: JSONSchemaType<AddLinkHsrTypeArgs> = {
  $id                 : SchemaIds.LinkAddHsrOptions,
  type                : 'object',
  required            : ['slave1', 'slave2'],
  additionalProperties: false,
  properties          : {
    slave1     : {
      type     : 'string',
      minLength: 1
    },
    slave2     : {
      type     : 'string',
      minLength: 1
    },
    supervision: {
      type    : 'integer',
      minimum : 0,
      maximum : 255,
      nullable: true
    },
    version    : {
      type    : 'integer',
      enum    : Object.values(HsrVersions) as HsrVersions[],
      nullable: true
    },
    proto      : {
      type    : 'integer',
      enum    : Object.values(HsrProtocols) as HsrProtocols[],
      nullable: true
    }
  }
};