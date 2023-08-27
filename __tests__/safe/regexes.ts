import { describe, it } from 'mocha';
import { expect }       from 'chai';

import {
  invisibleKeySuffix,
  ip, ipv4, ipv6,
  ipWithOptionalMask,
  ipWithRequiredMask,
  ipOrAny,
  ipWithOptionalMaskAndAllAndDefaultValues,
  ipWithRequiredMaskAndAllAndDefaultValues,
  ipWithOptionalFamilyPrefix,
  slashSeparatedStrings,
  slashSeparatedNumbers, colonSeparatedNumbers,
  hex4Digits, mac,
  commaSeparatedIpv6Addresses, timeWithUnit
} from '../../src/common/constants/regexes';

describe('regular expressions', () => {
  it('`mac`', () => {
    expect(mac.test('00:1A:2B:3C:4D:5E')).to.be.true;
    expect(mac.test('a0:b1:c2:d3:e4:f5')).to.be.true;
    expect(mac.test('A0:B1:C2:D3:E4:F5')).to.be.true;

    expect(mac.test('00:1A:2B:3C:4D:5Z')).to.be.false;
    expect(mac.test('GH:1A:2B:3C:4D:5E')).to.be.false;
    expect(mac.test('00:1A:2B:3C:4D:')).to.be.false;
    expect(mac.test(':00:1A:2B:3C:4D:5E')).to.be.false;
    expect(mac.test('00:1A:2B:3C:4D:5E:')).to.be.false;
    expect(mac.test(' 00:1A:2B:3C:4D:5E')).to.be.false;
    expect(mac.test('00:1A:2B:3C: 4D:5E')).to.be.false;
    expect(mac.test('00:1A:2B:3C:4D:5E ')).to.be.false;
    expect(mac.test('')).to.be.false;
    expect(mac.test('00:1A:2B:3C:4D')).to.be.false;
    expect(mac.test('00:1A:2B:3C:4D:5E:6F')).to.be.false;

  });

  it('`hex4Digits`', () => {
    expect(hex4Digits.test('1a2b')).to.be.true;
    expect(hex4Digits.test('A1B2')).to.be.true;
    expect(hex4Digits.test('0000')).to.be.true;
    expect(hex4Digits.test('FFFF')).to.be.true;

    expect(hex4Digits.test('1a2z')).to.be.false;
    expect(hex4Digits.test('GH12')).to.be.false;
    expect(hex4Digits.test('1a2')).to.be.false;
    expect(hex4Digits.test('F3')).to.be.false;
    expect(hex4Digits.test('0')).to.be.false;
    expect(hex4Digits.test('1a2bc')).to.be.false;
    expect(hex4Digits.test('A1B2C3')).to.be.false;
    expect(hex4Digits.test('')).to.be.false;
    expect(hex4Digits.test(' 1a2b')).to.be.false;
    expect(hex4Digits.test('1a2b ')).to.be.false;
    expect(hex4Digits.test(' 1a2b ')).to.be.false;
    expect(hex4Digits.test('1a 2b')).to.be.false;
  });

  it('`invisibleKeySuffix`', () => {
    expect(invisibleKeySuffix.test('key_')).to.be.true;
    expect(invisibleKeySuffix.test(' key')).to.be.false;
  });

  it('`ipv4`', () => {
    expect(ipv4.test('192.168.1.1')).to.be.true;

    expect(ipv4.test('256.0.0.1')).to.be.false;
    expect(ipv4.test('252.0.0.1.5')).to.be.false;
  });

  it('`ipv6`', () => {
    expect(ipv6.test('2001:0db8:85a3:0000:0000:8a2e:0370:7334')).to.be.true;
    expect(ipv6.test('invalid_ipv6')).to.be.false;
  });

  it('`ip`', () => {
    expect(ip.test('192.168.1.1')).to.be.true;
    expect(ip.test('2001:0db8:85a3:0000:0000:8a2e:0370:7334')).to.be.true;

    expect(ip.test('invalid_ip')).to.be.false;
  });

  it('`ipWithOptionalMask`', () => {
    expect(ipWithOptionalMask.test('192.168.1.1')).to.be.true;
    expect(ipWithOptionalMask.test('192.168.1.1/24')).to.be.true;
    expect(ipWithOptionalMask.test('::1')).to.be.true;
    expect(ipWithOptionalMask.test('::1/64')).to.be.true;
    expect(ipWithOptionalMask.test('2001:0db8:85a3:0000:0000:8a2e:0370:7334/64')).to.be.true;

    expect(ipWithOptionalMask.test('192.168.1.1/48')).to.be.false;
    expect(ipWithOptionalMask.test('192.168.256.1')).to.be.false;
    expect(ipWithOptionalMask.test('2001:0db8:0000:0042:0000:8a2e:0370:G733')).to.be.false;
  });

  it('`ipWithRequiredMask`', () => {
    expect(ipWithRequiredMask.test('192.168.1.1/24')).to.be.true;
    expect(ipWithRequiredMask.test('::1/64')).to.be.true;
    expect(ipWithRequiredMask.test('2001:0db8:0000:0042:0000:8a2e:0370:7334/56')).to.be.true;

    expect(ipWithRequiredMask.test('192.168.1.1')).to.be.false;
    expect(ipWithRequiredMask.test('::1')).to.be.false;
    expect(ipWithRequiredMask.test('192.168.256.1/32')).to.be.false;
    expect(ipWithRequiredMask.test('2001:0db8:0000:0042:0000:8a2e:0370:G733/64')).to.be.false;
  });

  it('`ipOrAny`', () => {
    expect(ipOrAny.test('any')).to.be.true;
    expect(ipOrAny.test('192.168.1.1')).to.be.true;
    expect(ipOrAny.test('10.0.0.1')).to.be.true;
    expect(ipOrAny.test('0.0.0.0')).to.be.true;
    expect(ipOrAny.test('::1')).to.be.true;
    expect(ipOrAny.test('2001:0db8:0000:0042:0000:8a2e:0370:7334')).to.be.true;
    expect(ipOrAny.test('fe80::1ff:fe23:4567:890a')).to.be.true;

    expect(ipOrAny.test('any1')).to.be.false;
    expect(ipOrAny.test('192.168.256.1')).to.be.false;
    expect(ipOrAny.test('::G')).to.be.false;
    expect(ipOrAny.test('2001:0db8:0000:0042:0000:8a2e:0370:G733')).to.be.false;
  });

  it('`ipWithOptionalMaskAndAllAndDefaultValues`', () => {
    expect(ipWithOptionalMaskAndAllAndDefaultValues.test('all')).to.be.true;
    expect(ipWithOptionalMaskAndAllAndDefaultValues.test('default')).to.be.true;
    expect(ipWithOptionalMaskAndAllAndDefaultValues.test('192.168.1.1')).to.be.true;
    expect(ipWithOptionalMaskAndAllAndDefaultValues.test('10.0.0.1/24')).to.be.true;
    expect(ipWithOptionalMaskAndAllAndDefaultValues.test('2001:0db8:85a3:0000:0000:8a2e:0370:7334')).to.be.true;
    expect(ipWithOptionalMaskAndAllAndDefaultValues.test('2001:db8::ff00:42:8329/64')).to.be.true;

    expect(ipWithOptionalMaskAndAllAndDefaultValues.test('256.256.256.256')).to.be.false;
    expect(ipWithOptionalMaskAndAllAndDefaultValues.test('2001:0db8:85a3::8a2e:0370:7334:abcz')).to.be.false;
    expect(ipWithOptionalMaskAndAllAndDefaultValues.test('hello')).to.be.false;
  });

  it('`ipWithRequiredMaskAndAllAndDefaultValues`', () => {
    expect(ipWithRequiredMaskAndAllAndDefaultValues.test('all')).to.be.true;
    expect(ipWithRequiredMaskAndAllAndDefaultValues.test('default')).to.be.true;
    expect(ipWithRequiredMaskAndAllAndDefaultValues.test('192.168.1.1/24')).to.be.true;
    expect(ipWithRequiredMaskAndAllAndDefaultValues.test('10.0.0.1/16')).to.be.true;
    expect(ipWithRequiredMaskAndAllAndDefaultValues.test('2001:0db8:85a3:0000:0000:8a2e:0370:7334/64')).to.be.true;
    expect(ipWithRequiredMaskAndAllAndDefaultValues.test('2001:db8::ff00:42:8329/128')).to.be.true;

    expect(ipWithRequiredMaskAndAllAndDefaultValues.test('192.168.1.1')).to.be.false;
    expect(ipWithRequiredMaskAndAllAndDefaultValues.test('2001:0db8:85a3:0000:0000:8a2e:0370:7334')).to.be.false;
    expect(ipWithRequiredMaskAndAllAndDefaultValues.test('256.256.256.256/24')).to.be.false;
    expect(ipWithRequiredMaskAndAllAndDefaultValues.test('2001:0db8:85a3::8a2e:0370:7334:abcd')).to.be.false;
    expect(ipWithRequiredMaskAndAllAndDefaultValues.test('hello')).to.be.false;
  });

  it('`ipWithOptionalFamilyPrefix`', () => {
    expect(ipWithOptionalFamilyPrefix.test('192.168.1.1')).to.be.true;
    expect(ipWithOptionalFamilyPrefix.test('10.0.0.1')).to.be.true;
    expect(ipWithOptionalFamilyPrefix.test('inet 192.168.1.1')).to.be.true;
    expect(ipWithOptionalFamilyPrefix.test('inet 10.0.0.1')).to.be.true;
    expect(ipWithOptionalFamilyPrefix.test('2001:0db8:85a3:0000:0000:8a2e:0370:7334')).to.be.true;
    expect(ipWithOptionalFamilyPrefix.test('2001:db8::ff00:42:8329')).to.be.true;
    expect(ipWithOptionalFamilyPrefix.test('inet6 2001:0db8:85a3:0000:0000:8a2e:0370:7334')).to.be.true;
    expect(ipWithOptionalFamilyPrefix.test('inet6 2001:db8::ff00:42:8329')).to.be.true;
    expect(ipWithOptionalFamilyPrefix.test('mpls 192.168.1.1')).to.be.true;
    expect(ipWithOptionalFamilyPrefix.test('bridge 10.0.0.1')).to.be.true;
    expect(ipWithOptionalFamilyPrefix.test('link 2001:db8::ff00:42:8329')).to.be.true;

    expect(ipWithOptionalFamilyPrefix.test('256.256.256.256')).to.be.false;
    expect(ipWithOptionalFamilyPrefix.test('2001:0db8:85a3::8a2e:0370:7334:abcg')).to.be.false;
    expect(ipWithOptionalFamilyPrefix.test('hello')).to.be.false;
  });

  describe('`slashSeparatedStrings`', () => {
    it('should match strings without slashes', () => {
      expect(slashSeparatedStrings.test('abc')).to.be.true;
    });

    it('should match strings with slashes but not starting or ending with a slash', () => {
      expect(slashSeparatedStrings.test('abc/def/ghi')).to.be.true;
    });

    it('should not match strings starting with a slash', () => {
      expect(slashSeparatedStrings.test('/abc/def')).to.be.false;
    });

    it('should not match strings ending with a slash', () => {
      expect(slashSeparatedStrings.test('abc/def/')).to.be.false;
    });

    it('should not match strings with consecutive slashes', () => {
      expect(slashSeparatedStrings.test('abc//def')).to.be.false;
    });
  });

  describe('`slashSeparatedNumbers`', () => {
    it('should match numbers without slashes', () => {
      expect(slashSeparatedNumbers.test('100')).to.be.true;
    });

    it('should match numbers with slashes but not starting or ending with a slash', () => {
      expect(slashSeparatedNumbers.test('100/200/300')).to.be.true;
    });

    it('should not match numbers starting with a slash', () => {
      expect(slashSeparatedNumbers.test('/100/200')).to.be.false;
    });

    it('should not match numbers ending with a slash', () => {
      expect(slashSeparatedNumbers.test('100/200/')).to.be.false;
    });

    it('should not match numbers with consecutive slashes', () => {
      expect(slashSeparatedNumbers.test('100//200')).to.be.false;
    });
  });

  describe('`commaSeparatedIpv6Addresses`', () => {
    it('should match single valid IPv6 addresses', () => {
      expect(commaSeparatedIpv6Addresses.test('2001:0db8:85a3:0000:0000:8a2e:0370:7334')).to.be.true;
      expect(commaSeparatedIpv6Addresses.test('2001:0db8::2:1')).to.be.true;
    });

    it('should match comma-separated valid IPv6 addresses', () => {
      expect(commaSeparatedIpv6Addresses.test('2001:0db8:85a3:0000:0000:8a2e:0370:7334,2001:0db8::2:1')).to.be.true;
      expect(commaSeparatedIpv6Addresses.test('2001:0db8::1,2001:0db8::2,2001:0db8::3')).to.be.true;
    });

    it('should not match IPv6 addresses separated by spaces', () => {
      expect(commaSeparatedIpv6Addresses.test('2001:0db8::1 2001:0db8::2')).to.be.false;
    });

    it('should not match if there are spaces around commas', () => {
      expect(commaSeparatedIpv6Addresses.test('2001:0db8::1 , 2001:0db8::2')).to.be.false;
    });

    it('should not match invalid IPv6 addresses', () => {
      expect(commaSeparatedIpv6Addresses.test('2001:0db8:85a3:0000:0000:8a2e:0370:7334Z')).to.be.false;
      expect(commaSeparatedIpv6Addresses.test('2001::0db8::2:1')).to.be.false;
    });

    it('should not match if there are consecutive commas', () => {
      expect(commaSeparatedIpv6Addresses.test('2001:0db8::1,,2001:0db8::2')).to.be.false;
    });
  });

  it('`commaSeparatedIpv6Addresses`', () => {
    expect(timeWithUnit.test('5s')).to.be.true;
    expect(timeWithUnit.test('12sec')).to.be.true;
    expect(timeWithUnit.test('3secs')).to.be.true;
    expect(timeWithUnit.test('2m')).to.be.true;
    expect(timeWithUnit.test('9msec')).to.be.true;
    expect(timeWithUnit.test('11msecs')).to.be.true;

    expect(timeWithUnit.test('5')).to.be.false;
    expect(timeWithUnit.test('5seconds')).to.be.false;
    expect(timeWithUnit.test('11minutes')).to.be.false;
    expect(timeWithUnit.test('5s!')).to.be.false;
    expect(timeWithUnit.test('3.5s')).to.be.false;
    expect(timeWithUnit.test('3s5')).to.be.false;
    expect(timeWithUnit.test('-5s')).to.be.false;
    expect(timeWithUnit.test('5h')).to.be.false;
    expect(timeWithUnit.test('5min')).to.be.false;
  });

  it('`twoColonSeparatedNumbers`', () => {
    expect(colonSeparatedNumbers.test('123:456')).to.be.true;
    expect(colonSeparatedNumbers.test('1:2')).to.be.true;

    expect(colonSeparatedNumbers.test('123:456:789')).to.be.false;
    expect(colonSeparatedNumbers.test(':123:456')).to.be.false;
    expect(colonSeparatedNumbers.test('abc:123')).to.be.false;
    expect(colonSeparatedNumbers.test('123:def')).to.be.false;
    expect(colonSeparatedNumbers.test(' 123:456')).to.be.false;
    expect(colonSeparatedNumbers.test('123 :456')).to.be.false;
    expect(colonSeparatedNumbers.test('123:456 ')).to.be.false;
    expect(colonSeparatedNumbers.test('')).to.be.false;
    expect(colonSeparatedNumbers.test(':')).to.be.false;
    expect(colonSeparatedNumbers.test('123:')).to.be.false;
    expect(colonSeparatedNumbers.test(':456')).to.be.false;
  });
});