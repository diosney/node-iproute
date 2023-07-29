import Ajv        from 'ajv';
import addFormats from 'ajv-formats';

import { ip } from './constants/regexes';

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

// Since `ajv` doesn't support several formats for same property.
ajv.addFormat('ip', new RegExp(ip, 'i'));

export default ajv;
