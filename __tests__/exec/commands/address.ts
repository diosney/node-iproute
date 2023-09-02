import { promises as fs } from 'fs';

import { describe, it, before, after } from 'mocha';
import { expect }                      from 'chai';

import { add, del, show, save, showdump } from '../../../src/commands/address';

import {
  LinkWithAddressInfo,
  OnlyAddressInfo
} from '../../../src/commands/address/show.interfaces';

import { AddressAddOptions } from '../../../src/commands/address/add.interfaces';

describe('address', () => {
  describe('show', () => {
    it('should return all addresses per link if no filters were provided', async () => {
      const linkWithAddresses = await show({}, {
        sudo: true
      }) as LinkWithAddressInfo[];
      expect(linkWithAddresses).to.be.an('array').that.has.lengthOf.at.least(1);

      const loopbackLink = linkWithAddresses.find((link) => link.ifname === 'lo');
      expect(loopbackLink).not.to.be.undefined;
      expect(loopbackLink).to.be.an('object').to.have.a.property('addr_info');
      expect(loopbackLink!.addr_info).to.be.an('array');
    });

    it('should filter address by `dev`', async () => {
      const linkWithAddresses = await show({
        dev: 'lo'
      }, {
        sudo: true
      }) as LinkWithAddressInfo[];

      expect(linkWithAddresses).to.be.an('array').of.length(1);

      const loopbackLink = linkWithAddresses[0];
      expect(loopbackLink).not.to.be.undefined;
      expect(loopbackLink).to.have.a.property('ifname').equal('lo');
      expect(loopbackLink).to.be.an('object').to.have.a.property('addr_info');
      expect(loopbackLink!.addr_info).to.be.an('array');
    });
  });

  describe('save', () => {
    let filePath = `/tmp/addresses-${ Date.now() }.dump`;

    after(async function () {
      try {
        await fs.unlink(filePath);
      }
      catch (error) {
      }
    });

    it('should create a file with dumped addresses', async () => {
      await save({
        dev: 'lo'
      }, {
        sudo: true,
        filePath
      });

      try {
        await fs.access(filePath);
        expect(true).to.be.true;
      }
      catch (error) {
        expect.fail(`Dump file wasn't created: ${ filePath }`);
      }
    });
  });

  describe('showdump', () => {
    let filePath = `/tmp/addresses-${ Date.now() }.dump`;

    before(async function () {
      await save({
        dev: 'lo'
      }, {
        sudo: true,
        filePath
      });
    });

    after(async function () {
      try {
        await fs.unlink(filePath);
      }
      catch (error) {
      }
    });

    it('should display the contents of a file created with `save`', async () => {
      let linkWithAddresses = await showdump({
        sudo: true,
        filePath
      }) as OnlyAddressInfo[];

      expect(linkWithAddresses).to.be.an('array').that.has.lengthOf.at.least(1);

      expect(linkWithAddresses[0]).not.to.be.undefined;
      expect(linkWithAddresses[0]).to.be.an('object').to.have.a.property('addr_info');
      expect(linkWithAddresses[0]!.addr_info).to.be.an('array');
    });
  });

  describe('add', () => {
    let newAddress: AddressAddOptions = {
      local: '2001:db8:85a3::370:7334',
      dev:   'lo'
    };

    let addressesBeforeAdd: LinkWithAddressInfo[] = [];

    before(async function () {
      addressesBeforeAdd = await show({
        dev: newAddress.dev
      }, {
        sudo: true
      }) as LinkWithAddressInfo[];
    });

    after(async function () {
      await del(newAddress, {
        sudo: true
      });
    });

    it('should add a new address to loopback device', async () => {
      await add(newAddress, {
        sudo: true
      });

      const linkWithAddresses = await show() as LinkWithAddressInfo[];
      expect(linkWithAddresses).to.be.an('array');
      expect(linkWithAddresses).to.be.an('array').that.has.lengthOf.at.least(addressesBeforeAdd.length);

      const loopbackLink = linkWithAddresses.find(item => item.ifname === newAddress.dev);
      expect(loopbackLink).not.to.be.undefined;
      expect(loopbackLink).to.be.an('object').to.have.a.property('addr_info');
      expect(loopbackLink!.addr_info).to.be.an('array');

      const addresses = loopbackLink!.addr_info.find(item => item.local === newAddress.local);
      expect(addresses).to.not.be.undefined;
      expect(addresses!.local).to.equal(newAddress.local);
    });
  });

  describe('del', () => {
    let newAddress: AddressAddOptions = {
      local: '2001:db8:85a3::370:7334',
      dev:   'lo'
    };

    let addressesBeforeAdd: LinkWithAddressInfo[] = [];

    before(async function () {
      await add(newAddress, {
        sudo: true
      });

      addressesBeforeAdd = await show({
        dev: newAddress.dev
      }, {
        sudo: true
      }) as LinkWithAddressInfo[];
    });

    it('should delete an address from the loopback device', async () => {
      await del(newAddress, {
        sudo: true
      });

      const linkWithAddresses = await show() as LinkWithAddressInfo[];
      expect(linkWithAddresses).to.be.an('array');
      expect(linkWithAddresses).to.be.an('array').that.has.lengthOf.at.least(addressesBeforeAdd.length);

      const loopbackLink = linkWithAddresses.find(item => item.ifname === newAddress.dev);
      expect(loopbackLink).not.to.be.undefined;
      expect(loopbackLink).to.be.an('object').to.have.a.property('addr_info');
      expect(loopbackLink!.addr_info).to.be.an('array');

      const addresses = loopbackLink!.addr_info.find(item => item.local === newAddress.local);
      expect(addresses).to.be.undefined;
    });
  });
});
