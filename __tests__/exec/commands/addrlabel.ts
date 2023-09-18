import { describe, it, before, after } from 'mocha';
import { expect } from 'chai';

import { add, del, list } from '../../../src/commands/addrlabel';
import { AddrlabelInfo } from '../../../src/commands/addrlabel/list.interfaces';
import { AddrlabelAddOptions } from '../../../src';

describe('addrlabel', () => {
  describe('show', () => {
    it('should return all address labels', async () => {
      const labels = await list({
        sudo: true
      }) as AddrlabelInfo[];

      expect(labels).to.be.an('array').that.has.lengthOf.at.least(1);
    });
  });

  describe('add', () => {
    let newLabel: AddrlabelAddOptions = {
      prefix: '2001:db8::/32',
      label : 100
    };

    let labelsBeforeAdd: AddrlabelInfo[] = [];

    before(async function () {
      labelsBeforeAdd = await list({
        sudo: true
      }) as AddrlabelInfo[];
    });

    after(async function () {
      await del(newLabel, {
        sudo: true
      });
    });

    it('should add a new label', async () => {
      await add(newLabel, {
        sudo: true
      });

      const labels = await list() as AddrlabelInfo[];
      expect(labels).to.be.an('array');
      expect(labels).to.be.an('array').that.has.lengthOf.at.least(labelsBeforeAdd.length + 1);

      const addedLabel = labels.find(item => item.label === newLabel.label);
      expect(addedLabel).not.to.be.undefined;
      expect(addedLabel).to.be.an('object');
    });
  });

  describe('del', () => {
    let newLabel: AddrlabelAddOptions = {
      prefix: '2001:db8::/32',
      label : 100
    };

    let labelsBeforeAdd: AddrlabelInfo[] = [];

    before(async function () {
      await add(newLabel, {
        sudo: true
      });

      labelsBeforeAdd = await list({
        sudo: true
      }) as AddrlabelInfo[];
    });

    it('should delete a label', async () => {
      await del(newLabel, {
        sudo: true
      });

      const rules = await list() as AddrlabelInfo[];
      expect(rules).to.be.an('array');
      expect(rules).to.be.an('array').that.has.lengthOf.at.least(labelsBeforeAdd.length - 1);

      const addedRule = rules.find(item => item.label === newLabel.label);
      expect(addedRule).to.be.undefined;
    });
  });
});
