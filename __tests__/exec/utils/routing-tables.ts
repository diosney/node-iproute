import { after, before, describe, it } from 'mocha';
import { expect }                      from 'chai';

import { show, add, del, clear } from '../../../src/utils/routing-tables';
import { RoutingTables }         from '../../../src/commands/rule.constants';
import { RoutingTable }          from '../../../src/utils/routing-tables.interfaces';

describe('utils', () => {
  describe('routing tables', () => {
    describe('show', () => {
      it('should return all tables if no filters were provided', async () => {
        const tables = await show();
        expect(tables).to.be.an('array').that.has.lengthOf.at.least(3);
      });

      it('should filter tables by `name`', async () => {
        const tables = await show({
          name: RoutingTables.Main
        });
        expect(tables).to.be.an('array').of.length(1);
        expect(tables).to.deep.equal([ { id: 254, name: 'main' } ]);
      });

      it('should filter tables by `id`', async () => {
        const tables = await show({
          id: 253
        });
        expect(tables).to.be.an('array').of.length(1);
        expect(tables).to.deep.equal([ { id: 253, name: 'default' } ]);
      });

      it('should return empty if filtering table but didn\'t found one', async () => {
        const tables = await show({
          name: Math.random.toString()
        });
        expect(tables).to.be.an('array').of.length(0);
      });
    });

    describe('add', () => {
      let newTable: RoutingTable = {
        id:   100,
        name: 'some-new-table-100'
      };

      let tablesBeforeAdd = [];

      before(async function () {
        tablesBeforeAdd = await show();
      });

      after(async function () {
        await del({
          id: newTable.id
        }, {
          sudo: true
        });
      });

      it('should add the table', async () => {
        await add(newTable, {
          sudo: true
        });

        const tablesAfterAdd = await show();
        expect(tablesAfterAdd).to.be.an('array').that.has.lengthOf.at.least(tablesBeforeAdd.length + 1);

        const newTableData = tablesAfterAdd.find(item => item.id === 100);
        expect(newTableData).to.not.be.undefined;
        expect(newTableData!.id).to.equal(100);
      });
    });

    describe('del', () => {
      let newTable: RoutingTable = {
        id:   100,
        name: 'some-new-table-100'
      };

      let tablesBeforeDel = [];

      before(async function () {
        await add(newTable, {
          sudo: true
        });

        tablesBeforeDel = await show();
      });

      it('should add a new table', async () => {
        await del({
          id: newTable.id
        }, {
          sudo: true
        });

        const tablesAfterDel = await show();
        expect(tablesAfterDel).to.be.an('array').that.has.lengthOf.at.least(tablesBeforeDel.length - 1);

        const newTableData = tablesAfterDel.find(item => item.id === 100);
        expect(newTableData).to.be.undefined;
      });
    });

    describe('clear', () => {
      let allDefaultTables: RoutingTable[] = [
        { id: 255, name: 'local' },
        { id: 254, name: 'main' },
        { id: 253, name: 'default' },
        { id: 0, name: 'unspec' }
      ];

      after(async function () {
        allDefaultTables.forEach(async function (table) {
          await add(table, {
            sudo: true
          });
        });
      });

      it('should clear all tables', async () => {
        await clear({
          sudo: true
        });

        const tablesAfterClear = await show();
        expect(tablesAfterClear).to.be.an('array').that.has.lengthOf(0);
      });
    });
  });
});