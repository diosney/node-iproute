import { after, before, describe, it } from 'mocha';
import { expect } from 'chai';

import { v4, v6, status, disable, enable } from '../../../src/utils/ip-forwarding';

describe('utils', () => {
  describe('ip forward', () => {
    describe('v4', () => {
      it('should return its current status', async () => {
        let result = await v4.status({
          sudo: true
        });
        expect(result).to.be.a('string').and.to.be.oneOf([ '0\n', '1\n' ]);
      });

      describe('enable', () => {
        after(async function () {
          await v4.disable({
            sudo: true
          });
        });

        it('should enable IPv4 forwarding', async () => {
          await v4.enable({
            sudo: true
          });

          let result = await v4.status({
            sudo: true
          });
          expect(result).to.be.a('string').and.to.be.oneOf([ '1', '1\n' ]);
        });
      });

      describe('disable', () => {
        after(async function () {
          await v4.enable({
            sudo: true
          });
        });

        it('should disable IPv4 forwarding', async () => {
          await v4.disable({
            sudo: true
          });

          let result = await v4.status({
            sudo: true
          });
          expect(result).to.be.a('string').and.to.be.oneOf([ '0', '0\n' ]);
        });
      });
    });

    describe('v6', () => {
      it('should return its current status', async () => {
        let result = await v6.status({
          sudo: true
        });
        expect(result).to.be.a('string').and.to.be.oneOf([ '0\n', '1\n' ]);
      });

      describe('enable', () => {
        after(async function () {
          await v6.disable({
            sudo: true
          });
        });

        it('should enable IPv6 forwarding', async () => {
          await v6.enable({
            sudo: true
          });

          let result = await v6.status({
            sudo: true
          });
          expect(result).to.be.a('string').and.to.be.oneOf([ '1', '1\n' ]);
        });
      });

      describe('disable', () => {
        after(async function () {
          await v6.enable({
            sudo: true
          });
        });

        it('should disable IPv6 forwarding', async () => {
          await v6.disable({
            sudo: true
          });

          let result = await v6.status({
            sudo: true
          });
          expect(result).to.be.a('string').and.to.be.oneOf([ '0', '0\n' ]);
        });
      });
    });

    describe('both v4 & v6', () => {
      describe('status', () => {
        before(async function () {
          await v4.disable({
            sudo: true
          });
          await v6.disable({
            sudo: true
          });
        });

        it('should return their current status', async () => {
          let result = await status({
            sudo: true
          });
          expect(result).to.be.an('object');
          expect(result.v4).to.be.oneOf([ '0', '0\n' ]);
          expect(result.v6).to.be.oneOf([ '0', '0\n' ]);
        });

      });

      describe('enable', () => {
        after(async function () {
          await disable({
            sudo: true
          });
        });

        it('should enable both IPv4 & IPv6 forwarding', async () => {
          await enable({
            sudo: true
          });

          let result = await status({
            sudo: true
          });
          expect(result).to.be.an('object');
          expect(result.v4).to.be.oneOf([ '1', '1\n' ]);
          expect(result.v6).to.be.oneOf([ '1', '1\n' ]);
        });
      });

      describe('disable', () => {
        before(async function () {
          await enable({
            sudo: true
          });
        });

        it('should disable both IPv4 & IPv6 forwarding', async () => {
          await disable({
            sudo: true
          });

          let result = await status({
            sudo: true
          });
          expect(result).to.be.an('object');
          expect(result.v4).to.be.oneOf([ '0', '0\n' ]);
          expect(result.v6).to.be.oneOf([ '0', '0\n' ]);
        });
      });
    });
  });
});