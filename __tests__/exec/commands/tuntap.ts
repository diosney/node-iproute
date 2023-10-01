import { describe, it, before, after } from 'mocha';
import { expect } from 'chai';

import { add, del, show } from '../../../src/commands/tuntap';
import { TunTapTunnelInfo } from '../../../src/commands/tuntap/show.interfaces';
import { TunTapTunnelAddOptions } from '../../../src/commands/tuntap/add.interfaces';
import { TunTapTunnelModes } from '../../../src';

describe('tuntap', () => {
  describe('show', () => {
    it('should return all tuntap devices if no filters were provided', async () => {
      const entries = await show({}, {
        sudo: true
      }) as TunTapTunnelInfo[];

      expect(entries).to.be.an('array').that.has.lengthOf.at.least(1);
    });
  });

  describe('add', () => {
    let newEntry: TunTapTunnelAddOptions = {
      mode: TunTapTunnelModes.Tun,
      name: 'mytun0-dev'
    };

    let entriesBeforeAdd: TunTapTunnelInfo[] = [];

    before(async function () {
      entriesBeforeAdd = await show({}, {
        sudo: true
      }) as TunTapTunnelInfo[];
    });

    after(async function () {
      await del(newEntry, {
        sudo: true
      });
    });

    it('should add a new entry', async () => {
      await add(newEntry, {
        sudo: true
      });

      const entries = await show() as TunTapTunnelInfo[];
      expect(entries).to.be.an('array');
      expect(entries).to.be.an('array').that.has.lengthOf.at.least(entriesBeforeAdd.length + 1);

      const addedEntry = entries.find(item => item.ifname === newEntry.name);
      expect(addedEntry).not.to.be.undefined;
      expect(addedEntry).to.be.an('object');
    });
  });

  describe('del', () => {
    let newEntry: TunTapTunnelAddOptions = {
      mode: TunTapTunnelModes.Tun,
      name: 'mytun1-dev'
    };

    let entriesBeforeAdd: TunTapTunnelInfo[] = [];

    before(async function () {
      await add(newEntry, {
        sudo: true
      });

      entriesBeforeAdd = await show({}, {
        sudo: true
      }) as TunTapTunnelInfo[];
    });

    it('should delete a entry', async () => {
      await del(newEntry, {
        sudo: true
      });

      const entries = await show() as TunTapTunnelInfo[];
      expect(entries).to.be.an('array');
      expect(entries).to.be.an('array').that.has.lengthOf.at.least(entriesBeforeAdd.length - 1);

      const addedEntry = entries.find(item => item.ifname === newEntry.name);
      expect(addedEntry).to.be.undefined;
    });
  });
});
