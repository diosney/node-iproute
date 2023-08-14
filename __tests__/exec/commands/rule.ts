import { promises as fs }              from 'fs';
import { describe, it, before, after } from 'mocha';
import { expect }                      from 'chai';

import { add, del, show, save } from '../../../src/commands/rule';
import { RuleInfo }             from '../../../src/commands/rule/show.interfaces';
import { RuleAddOptions }       from '../../../src/commands/rule/add.interfaces';

describe('rule', () => {
  describe('show', () => {
    it('should return all rules if no filters were provided', async () => {
      const rules = await show({}, {
        sudo: true
      }) as RuleInfo[];

      expect(rules).to.be.an('array').that.has.lengthOf.at.least(1);
    });
  });

  describe('add', () => {
    let newRule: RuleAddOptions = {
      from:  '192.168.1.10',
      table: 100
    };

    let rulesBeforeAdd: RuleInfo[] = [];

    before(async function () {
      rulesBeforeAdd = await show({}, {
        sudo: true
      }) as RuleInfo[];
    });

    after(async function () {
      await del(newRule, {
        sudo: true
      });
    });

    it('should add a new rule', async () => {
      await add(newRule, {
        sudo: true
      });

      const rules = await show() as RuleInfo[];
      expect(rules).to.be.an('array');
      expect(rules).to.be.an('array').that.has.lengthOf.at.least(rulesBeforeAdd.length + 1);

      const addedRule = rules.find(item => item.table === newRule.table!.toString());
      expect(addedRule).not.to.be.undefined;
      expect(addedRule).to.be.an('object');
    });
  });

  describe('del', () => {
    let newRule: RuleAddOptions = {
      from:  '192.168.1.10',
      table: 100
    };

    let rulesBeforeAdd: RuleInfo[] = [];

    before(async function () {
      await add(newRule, {
        sudo: true
      });

      rulesBeforeAdd = await show({}, {
        sudo: true
      }) as RuleInfo[];
    });

    it('should delete a rule', async () => {
      await del(newRule, {
        sudo: true
      });

      const rules = await show() as RuleInfo[];
      expect(rules).to.be.an('array');
      expect(rules).to.be.an('array').that.has.lengthOf.at.least(rulesBeforeAdd.length - 1);

      const addedRule = rules.find(item => item.table === newRule.table!.toString());
      expect(addedRule).to.be.undefined;
    });
  });

  describe('save', () => {
    let filePath = `/tmp/rules-${ Date.now() }.dump`;

    after(async function () {
      try {
        await fs.unlink(filePath);
      }
      catch (error) {
      }
    });

    it('should create a file with dumped rules', async () => {
      await save({
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
});
