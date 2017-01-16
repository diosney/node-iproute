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
    expect('key_').to.match(invisibleKeySuffix);
    expect('key').to.not.match(invisibleKeySuffix);
  });

  it('`ipv4`', () => {
    expect('192.168.1.1').to.match(ipv4);

    expect('256.0.0.1').to.not.match(ipv4);
    expect('252.0.0.1.5').to.not.match(ipv4);
  });

  it('`ipv6`', () => {
    expect('2001:0db8:85a3:0000:0000:8a2e:0370:7334').to.match(ipv6);
    expect('invalid_ipv6').to.not.match(ipv6);
  });

  it('`ip`', () => {
    expect('192.168.1.1').to.match(ip);
    expect('2001:0db8:85a3:0000:0000:8a2e:0370:7334').to.match(ip);
    expect('invalid_ip').to.not.match(ip);
  });

  it('`ipWithOptionalMask`', () => {
    expect('192.168.1.1').to.match(ipWithOptionalMask);
    expect('192.168.1.1/24').to.match(ipWithOptionalMask);
    expect('::1').to.match(ipWithOptionalMask);
    expect('::1/64').to.match(ipWithOptionalMask);
    expect('2001:0db8:85a3:0000:0000:8a2e:0370:7334/64').to.match(ipWithOptionalMask);

    expect('192.168.1.1/48').to.not.match(ipWithOptionalMask);
    expect('192.168.256.1').not.to.match(ipWithOptionalMask);
    expect('2001:0db8:0000:0042:0000:8a2e:0370:G733').not.to.match(ipWithOptionalMask);
  });

  it('`ipWithRequiredMask`', () => {
    expect('192.168.1.1/24').to.match(ipWithRequiredMask);
    expect('::1/64').to.match(ipWithRequiredMask);
    expect('2001:0db8:0000:0042:0000:8a2e:0370:7334/56').to.match(ipWithRequiredMask);

    expect('192.168.1.1').to.not.match(ipWithRequiredMask);
    expect('::1').to.not.match(ipWithRequiredMask);
    expect('192.168.256.1/32').to.not.match(ipWithRequiredMask);
    expect('2001:0db8:0000:0042:0000:8a2e:0370:G733/64').to.not.match(ipWithRequiredMask);
  });

  it('`ipOrAny`', () => {
    expect('any').to.match(ipOrAny);
    expect('192.168.1.1').to.match(ipOrAny);
    expect('10.0.0.1').to.match(ipOrAny);
    expect('0.0.0.0').to.match(ipOrAny);
    expect('::1').to.match(ipOrAny);
    expect('2001:0db8:0000:0042:0000:8a2e:0370:7334').to.match(ipOrAny);
    expect('fe80::1ff:fe23:4567:890a').to.match(ipOrAny);

    expect('any1').to.not.match(ipOrAny);
    expect('192.168.256.1').to.not.match(ipOrAny);
    expect('::G').to.not.match(ipOrAny);
    expect('2001:0db8:0000:0042:0000:8a2e:0370:G733').to.not.match(ipOrAny);
  });

  it('`ipWithOptionalMaskAndAllAndDefaultValues`', () => {
    expect('all').to.match(ipWithOptionalMaskAndAllAndDefaultValues);
    expect('default').to.match(ipWithOptionalMaskAndAllAndDefaultValues);
    expect('192.168.1.1').to.match(ipWithOptionalMaskAndAllAndDefaultValues);
    expect('10.0.0.1/24').to.match(ipWithOptionalMaskAndAllAndDefaultValues);
    expect('2001:0db8:85a3:0000:0000:8a2e:0370:7334').to.match(ipWithOptionalMaskAndAllAndDefaultValues);
    expect('2001:db8::ff00:42:8329/64').to.match(ipWithOptionalMaskAndAllAndDefaultValues);

    expect('256.256.256.256').to.not.match(ipWithOptionalMaskAndAllAndDefaultValues);
    expect('2001:0db8:85a3::8a2e:0370:7334:abcz').to.not.match(ipWithOptionalMaskAndAllAndDefaultValues);
    expect('hello').to.not.match(ipWithOptionalMaskAndAllAndDefaultValues);
  });

  it('`ipWithRequiredMaskAndAllAndDefaultValues`', () => {
    expect('all').to.match(ipWithRequiredMaskAndAllAndDefaultValues);
    expect('default').to.match(ipWithRequiredMaskAndAllAndDefaultValues);
    expect('192.168.1.1/24').to.match(ipWithRequiredMaskAndAllAndDefaultValues);
    expect('10.0.0.1/16').to.match(ipWithRequiredMaskAndAllAndDefaultValues);
    expect('2001:0db8:85a3:0000:0000:8a2e:0370:7334/64').to.match(ipWithRequiredMaskAndAllAndDefaultValues);
    expect('2001:db8::ff00:42:8329/128').to.match(ipWithRequiredMaskAndAllAndDefaultValues);

    expect('192.168.1.1').to.not.match(ipWithRequiredMaskAndAllAndDefaultValues);
    expect('2001:0db8:85a3:0000:0000:8a2e:0370:7334').to.not.match(ipWithRequiredMaskAndAllAndDefaultValues);
    expect('256.256.256.256/24').to.not.match(ipWithRequiredMaskAndAllAndDefaultValues);
    expect('2001:0db8:85a3::8a2e:0370:7334:abcd').to.not.match(ipWithRequiredMaskAndAllAndDefaultValues);
    expect('hello').to.not.match(ipWithRequiredMaskAndAllAndDefaultValues);
  });

  it('`ipWithOptionalFamilyPrefix`', () => {
    expect('192.168.1.1').to.match(ipWithOptionalFamilyPrefix);
    expect('10.0.0.1').to.match(ipWithOptionalFamilyPrefix);
    expect('inet 192.168.1.1').to.match(ipWithOptionalFamilyPrefix);
    expect('inet 10.0.0.1').to.match(ipWithOptionalFamilyPrefix);
    expect('2001:0db8:85a3:0000:0000:8a2e:0370:7334').to.match(ipWithOptionalFamilyPrefix);
    expect('2001:db8::ff00:42:8329').to.match(ipWithOptionalFamilyPrefix);
    expect('inet6 2001:0db8:85a3:0000:0000:8a2e:0370:7334').to.match(ipWithOptionalFamilyPrefix);
    expect('inet6 2001:db8::ff00:42:8329').to.match(ipWithOptionalFamilyPrefix);
    expect('mpls 192.168.1.1').to.match(ipWithOptionalFamilyPrefix);
    expect('bridge 10.0.0.1').to.match(ipWithOptionalFamilyPrefix);
    expect('link 2001:db8::ff00:42:8329').to.match(ipWithOptionalFamilyPrefix);

    expect('256.256.256.256').to.not.match(ipWithOptionalFamilyPrefix);
    expect('2001:0db8:85a3::8a2e:0370:7334:abcg').to.not.match(ipWithOptionalFamilyPrefix);
    expect('hello').to.not.match(ipWithOptionalFamilyPrefix);
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