import { after, before, describe, it } from 'mocha';
import { expect } from 'chai';

import { show, add, del, clear } from '../../../src/utils/routing-tables';
import { RoutingTables } from '../../../src/commands/rule.constants';
import { RoutingTable } from '../../../src/utils/routing-tables.interfaces';

describe('utils', () => {
  describe('routing tables', () => {
    describe('show', () => {
      it('should return all tables if no filters were provided', async () => {
        const tables = await show({}, {
          sudo: true
        });
        expect(tables).to.be.an('array').that.has.lengthOf.at.least(3);
      });

      it('should filter tables by `name`', async () => {
        const tables = await show({
          name: RoutingTables.Main
        }, {
          sudo: true
        });
        expect(tables).to.be.an('array').of.length(1);
        expect(tables).to.deep.equal([{ id: 254, name: 'main' }]);
      });

      it('should filter tables by `id`', async () => {
        const tables = await show({
          id: 253
        }, {
          sudo: true
        });
        expect(tables).to.be.an('array').of.length(1);
        expect(tables).to.deep.equal([{ id: 253, name: 'default' }]);
      });

      it('should return empty if filtering table but didn\'t found one', async () => {
        const tables = await show({
          name: Math.random.toString()
        }, {
          sudo: true
        });
        expect(tables).to.be.an('array').of.length(0);
      });
    });

    describe('add', () => {
      describe('while adding one table', () => {
        let newTable: RoutingTable = {
          id  : 100,
          name: 'some-new-table-100'
        };

        let tablesBeforeAdd = [];

        before(async function () {
          tablesBeforeAdd = await show({}, {
            sudo: true
          });
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

          const tablesAfterAdd = await show({}, {
            sudo: true
          });
          expect(tablesAfterAdd).to.be.an('array').that.has.lengthOf.at.least(tablesBeforeAdd.length + 1);

          const newTableData = tablesAfterAdd.find(item => item.id === 100);
          expect(newTableData).to.not.be.undefined;
          expect(newTableData!.id).to.equal(100);
        });
      });

      describe('when adding more than one table', () => {
        let newTables: RoutingTable[] = [
          {
            id  : 101,
            name: 'some-new-table-101'
          },
          {
            id  : 102,
            name: 'some-new-table-102'
          }
        ];

        let tablesBeforeAdd = [];

        before(async function () {
          tablesBeforeAdd = await show({}, {
            sudo: true
          });
        });

        after(async function () {
          await del(newTables, {
            sudo: true
          });
        });

        it('should add the tables', async () => {
          await add(newTables, {
            sudo: true
          });

          const tablesAfterAdd = await show({}, {
            sudo: true
          });

          expect(tablesAfterAdd)
            .to
            .be
            .an('array')
            .that
            .has
            .lengthOf
            .at
            .least(tablesBeforeAdd.length + newTables.length);

          const newTableData1 = tablesAfterAdd.find(item => item.id === 101);
          const newTableData2 = tablesAfterAdd.find(item => item.id === 102);

          expect(newTableData1).to.not.be.undefined;
          expect(newTableData1!.id).to.equal(101);

          expect(newTableData2).to.not.be.undefined;
          expect(newTableData2!.id).to.equal(102);
        });
      });
    });

    describe('del', () => {
      describe('when deleting one table', () => {
        let newTable: RoutingTable = {
          id  : 100,
          name: 'some-new-table-100'
        };

        let tablesBeforeDel = [];

        before(async function () {
          await add(newTable, {
            sudo: true
          });

          tablesBeforeDel = await show({}, {
            sudo: true
          });
        });

        it('should add a new table', async () => {
          await del({
            id: newTable.id
          }, {
            sudo: true
          });

          const tablesAfterDel = await show({}, {
            sudo: true
          });
          expect(tablesAfterDel).to.be.an('array').that.has.lengthOf.at.least(tablesBeforeDel.length - 1);

          const newTableData = tablesAfterDel.find(item => item.id === 100);
          expect(newTableData).to.be.undefined;
        });
      });

      describe('when deleting more than one table', () => {
        let tablesToDelete: RoutingTable[] = [
          {
            id  : 103,
            name: 'some-new-table-103'
          },
          {
            id  : 104,
            name: 'some-new-table-104'
          }
        ];

        let tablesBeforeDel = [];

        before(async function () {
          await add(tablesToDelete, {
            sudo: true
          });

          tablesBeforeDel = await show({}, {
            sudo: true
          });
        });

        it('should add a new table', async () => {
          await del(tablesToDelete, {
            sudo: true
          });

          const tablesAfterDel = await show({}, {
            sudo: true
          });
          expect(tablesAfterDel)
            .to
            .be
            .an('array')
            .that
            .has
            .lengthOf
            .at
            .least(tablesBeforeDel.length - tablesToDelete.length);

          const newTableData1 = tablesAfterDel.find(item => item.id === 103);
          const newTableData2 = tablesAfterDel.find(item => item.id === 104);

          expect(newTableData1).to.be.undefined;
          expect(newTableData2).to.be.undefined;
        });
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

        const tablesAfterClear = await show({}, {
          sudo: true
        });
        expect(tablesAfterClear).to.be.an('array').that.has.lengthOf(0);
      });
    });
  });
});