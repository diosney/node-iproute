import { JSONSchemaType } from 'ajv';

import ajv                 from './validator';
import { SchemaIds }       from './constants/schemas';
import { ParametersError } from './errors/parameters';

/** @internal */
export function validate<T_Options>(schemaId: SchemaIds,
                                    schema: JSONSchemaType<T_Options>,
                                    options: T_Options) {

  const ajvValidate = ajv.getSchema(schemaId) || ajv.compile(schema);
  const isValid     = ajvValidate(options);

  if (!isValid) {
    throw new ParametersError(ParametersError.message, ajvValidate.errors);
  }
}