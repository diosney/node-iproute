import Ajv        from 'ajv';
import addFormats from 'ajv-formats';

import { ip, ipWithOptionalMask } from './constants/regexes';

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

// Since `ajv` doesn't support several formats for same property.
ajv.addFormat('ip', new RegExp(ip, 'i'));
ajv.addFormat('ip-with-optional-mask', new RegExp(ipWithOptionalMask, 'i'));

export default ajv;
