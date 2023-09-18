import { describe, it } from 'mocha';
import { expect } from 'chai';

import { show, change } from '../../../src/commands/ntable';
import { NtableInfo } from '../../../src';

describe('ntable', () => {
  describe('show', () => {
    it('should return all entries', async () => {
      const labels = await show({}, {
        sudo: true
      }) as NtableInfo[];

      expect(labels).to.be.an('array').that.has.lengthOf.at.least(1);
    });
  });

  describe('change', () => {
    it('should change the `arp_cache` param', async () => {
      await change({
        name : 'arp_cache',
        queue: 8,
        dev  : 'lo'
      }, {
        sudo: true
      });
    });
  });
});
