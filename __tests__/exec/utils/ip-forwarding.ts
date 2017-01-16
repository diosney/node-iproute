import { after, before, describe, it } from 'mocha';
import { expect }                      from 'chai';

import { v4, v6, status, disable, enable } from '../../../src/utils/ip-forwarding';

describe('utils', () => {
  describe('ip forward', () => {
    describe('v4', () => {
      it('should return its current status', async () => {
        let result = await v4.status();
        expect(result).to.be.a('string').and.to.be.oneOf([ '0\n', '1\n' ]);
      });

      describe('enable', () => {
        after(async function () {
          await v4.disable();
        });

        it('should enable IPv4 forwarding', async () => {
          await v4.enable();

          let result = await v4.status();
          expect(result).to.be.a('string').and.to.be.oneOf([ '1', '1\n' ]);
        });
      });

      describe('disable', () => {
        after(async function () {
          await v4.enable();
        });

        it('should disable IPv4 forwarding', async () => {
          await v4.disable();

          let result = await v4.status();
          expect(result).to.be.a('string').and.to.be.oneOf([ '0', '0\n' ]);
        });
      });
    });

    describe('v6', () => {
      it('should return its current status', async () => {
        let result = await v6.status();
        expect(result).to.be.a('string').and.to.be.oneOf([ '0\n', '1\n' ]);
      });

      describe('enable', () => {
        after(async function () {
          await v6.disable();
        });

        it('should enable IPv6 forwarding', async () => {
          await v6.enable();

          let result = await v6.status();
          expect(result).to.be.a('string').and.to.be.oneOf([ '1', '1\n' ]);
        });
      });

      describe('disable', () => {
        after(async function () {
          await v6.enable();
        });

        it('should disable IPv6 forwarding', async () => {
          await v6.disable();

          let result = await v6.status();
          expect(result).to.be.a('string').and.to.be.oneOf([ '0', '0\n' ]);
        });
      });
    });

    describe('both v4 & v6', () => {
      describe('status', () => {
        before(async function () {
          await v4.disable();
          await v6.disable();
        });

        it('should return their current status', async () => {
          let result = await status();
          expect(result).to.be.an('object');
          expect(result.v4).to.be.oneOf([ '0', '0\n' ]);
          expect(result.v6).to.be.oneOf([ '0', '0\n' ]);
        });

      });

      describe('enable', () => {
        after(async function () {
          await disable();
        });

        it('should enable both IPv4 & IPv6 forwarding', async () => {
          await enable();

          let result = await status();
          expect(result).to.be.an('object');
          expect(result.v4).to.be.oneOf([ '1', '1\n' ]);
          expect(result.v6).to.be.oneOf([ '1', '1\n' ]);
        });
      });

      describe('disable', () => {
        before(async function () {
          await enable();
        });

        it('should disable both IPv4 & IPv6 forwarding', async () => {
          await disable();

          let result = await status();
          expect(result).to.be.an('object');
          expect(result.v4).to.be.oneOf([ '0', '0\n' ]);
          expect(result.v6).to.be.oneOf([ '0', '0\n' ]);
        });
      });
    });
  });
});