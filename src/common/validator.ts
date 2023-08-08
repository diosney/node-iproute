import Ajv        from 'ajv';
import addFormats from 'ajv-formats';

import {
  ip,
  ipWithOptionalFamilyPrefix,
  ipWithOptionalMask,
  ipWithOptionalMaskAndAllAndDefaultValues,
  ipWithRequiredMask,
  ipWithRequiredMaskAndAllAndDefaultValues,
  slashSeparatedStrings,
  commaSeparatedIpv6Addresses,
  timeWithUnit
} from './constants/regexes';

const ajv = new Ajv({
  strict         : true,
  useDefaults    : true,
  coerceTypes    : true,
  allowUnionTypes: true
});

addFormats(ajv, [
  'ipv4',
  'ipv6'
]);

ajv.addFormat('mac', /^([0-9A-Fa-f]{2}:){5}[0-9A-Fa-f]{2}$/);
ajv.addFormat('4-hex', /^[0-9a-fA-F]{4}$/);
ajv.addFormat('filepath', /^(\/)?([^/\0]+(\/)?)+(\.\w+)?$/);
ajv.addFormat('slash-separated-strings', slashSeparatedStrings);
ajv.addFormat('comma-separated-ipv6-addresses', commaSeparatedIpv6Addresses);
ajv.addFormat('time-with-unit', timeWithUnit);

// Since `ajv` doesn't support several formats for same property.
ajv.addFormat('ip', new RegExp(ip, 'i'));
ajv.addFormat('ip-with-optional-mask', new RegExp(ipWithOptionalMask, 'i'));
ajv.addFormat('ip-with-required-mask', new RegExp(ipWithRequiredMask, 'i'));

ajv.addFormat('ip-with-required-mask-and-all-and-default-values',
  new RegExp(ipWithRequiredMaskAndAllAndDefaultValues, 'i'));

ajv.addFormat('ip-with-optional-mask-and-all-and-default-values',
  new RegExp(ipWithOptionalMaskAndAllAndDefaultValues, 'i'));

ajv.addFormat('ip-with-optional-family-prefix', new RegExp(ipWithOptionalFamilyPrefix, 'i'));

export default ajv;
