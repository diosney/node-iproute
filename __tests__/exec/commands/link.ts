import { describe, it, before, after } from 'mocha';
import { expect } from 'chai';

import { add, del, show } from '../../../src/commands/link';
import { LinkInfo } from '../../../src/commands/link/show.interfaces';
import { LinkAddOptions } from '../../../src/commands/link/add.interfaces';
import { LinkTypes } from '../../../src/commands/link.constants';

describe('link', () => {
  describe('show', () => {
    it('should return all links if no filters were provided', async () => {
      const links = await show({}, {
        sudo: true
      }) as LinkInfo[];

      expect(links).to.be.an('array').that.has.lengthOf.at.least(1);

      const loopbackLink = links.find((link) => link.ifname === 'lo');
      expect(loopbackLink).not.to.be.undefined;
      expect(loopbackLink).to.be.an('object');
    });

    it('should filter link by `dev`', async () => {
      const links = await show({
        dev: 'lo'
      }, {
        sudo: true
      }) as LinkInfo[];

      expect(links).to.be.an('array').of.length(1);

      const loopbackLink = links[0];
      expect(loopbackLink).not.to.be.undefined;
      expect(loopbackLink).to.have.a.property('ifname').equal('lo');
    });
  });

  describe('add', () => {
    let newLink: LinkAddOptions = {
      link: 'lo',
      name: 'dummy100',
      address: '00:11:22:33:44:55',
      mtu: 1500,
      type: {
        [LinkTypes.Dummy]: true
      }
    };

    let linksBeforeAdd: LinkInfo[] = [];

    before(async function () {
      linksBeforeAdd = await show({}, {
        sudo: true
      }) as LinkInfo[];
    });

    after(async function () {
      await del({
        dev_: newLink.name,
        type: {
          [LinkTypes.Dummy]: true
        }
      }, {
        sudo: true
      });
    });

    it('should add a new dummy link', async () => {
      await add(newLink, {
        sudo: true
      });

      const links = await show() as LinkInfo[];
      expect(links).to.be.an('array');
      expect(links).to.be.an('array').that.has.lengthOf.at.least(linksBeforeAdd.length + 1);

      const loopbackLink = links.find(item => item.ifname === newLink.name);
      expect(loopbackLink).not.to.be.undefined;
      expect(loopbackLink).to.be.an('object');
    });
  });

  describe('del', () => {
    let newLink: LinkAddOptions = {
      link: 'lo',
      name: 'dummy100',
      address: '00:11:22:33:44:55',
      mtu: 1500,
      type: {
        [LinkTypes.Dummy]: true
      }
    };

    let linksBeforeAdd: LinkInfo[] = [];

    before(async function () {
      await add(newLink, {
        sudo: true
      });

      linksBeforeAdd = await show({}, {
        sudo: true
      }) as LinkInfo[];
    });

    it('should delete a dummy link', async () => {
      await del({
        dev_: newLink.name,
        type: {
          [LinkTypes.Dummy]: true
        }
      }, {
        sudo: true
      });

      const links = await show() as LinkInfo[];
      expect(links).to.be.an('array');
      expect(links).to.be.an('array').that.has.lengthOf.at.least(linksBeforeAdd.length - 1);

      const loopbackLink = links.find(item => item.ifname === newLink.name);
      expect(loopbackLink).to.be.undefined;
    });
  });
});
