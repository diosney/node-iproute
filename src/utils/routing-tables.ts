import { promises as fs } from 'fs';
import isPlainObject from 'lodash.isplainobject';

import { tablesPath } from './routing-tables.constants';
import { GlobalOptions } from '../common/interfaces/common';

import {
  RoutingTable,
  RoutingTableOptions
} from './routing-tables.interfaces';
import { validate } from '../common/misc';
import { GlobalOptionsSchema, SchemaIds } from '../common/constants/schemas';
import { RoutingTableOptionsSchema } from './routing-tables.schemas';

function parseTables(rawData: string): RoutingTable[] {
  if (!rawData) {
    return [];
  }

  const tables: RoutingTable[] = [];
  const output                 = rawData
    .split('\n')
    .filter(line => line && line.charAt(0) !== '#');

  for (const line of output) {
    const fields              = line.trim().split(/\s+/);
    const table: RoutingTable = {
      id  : Number(fields[0]),
      name: fields[1]
    };
    tables.push(table);
  }

  return tables;
}

/**
 * List routing tables.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 */
export async function show(options: RoutingTableOptions = {}, globalOptions: GlobalOptions = {}): Promise<RoutingTable[]> {
  validate<RoutingTableOptions>(SchemaIds.RoutingTablesOptions, RoutingTableOptionsSchema, options);
  validate<GlobalOptions>(SchemaIds.GlobalOptions, GlobalOptionsSchema, globalOptions);

  const fileContent = await fs.readFile(tablesPath, { encoding: 'utf8' });
  let tables        = parseTables(fileContent);

  // Filter tables if options were given.
  if (options.id) {
    tables = tables.filter(item => item.id === options.id);
  }
  if (options.name) {
    tables = tables.filter(item => item.name === options.name);
  }

  return tables;
}

/**
 * Add a routing table.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 */
export async function add(options: RoutingTableOptions | RoutingTableOptions[], globalOptions: GlobalOptions = {}): Promise<void> {
  let tablesToAdd: RoutingTableOptions[] = [];

  if (isPlainObject(options)) {
    tablesToAdd.push(options as RoutingTableOptions);
  }
  else {
    tablesToAdd = options as RoutingTableOptions[];
  }

  for (let newTable of tablesToAdd) {
    validate<RoutingTableOptions>(SchemaIds.RoutingTablesOptions, RoutingTableOptionsSchema, newTable);
  }

  validate<GlobalOptions>(SchemaIds.GlobalOptions, GlobalOptionsSchema, globalOptions);

  const tables = await show();
  let toAppend = '';

  for (let newTable of tablesToAdd) {
    const existingTable = tables.find(table => table.id === newTable.id || table.name === newTable.name);

    if (existingTable) {
      // The table is already there, so exit silently.
      continue;
    }

    toAppend += `${ newTable.id }\t${ newTable.name }\n`;
  }

  await fs.appendFile(tablesPath, toAppend);
}

/**
 * Delete a routing table.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 */
export async function del(options: RoutingTableOptions | RoutingTableOptions[], globalOptions: GlobalOptions = {}): Promise<void> {
  let tablesToDelete: RoutingTableOptions[] = [];

  if (isPlainObject(options)) {
    tablesToDelete.push(options as RoutingTableOptions);
  }
  else {
    tablesToDelete = options as RoutingTableOptions[];
  }

  for (let tableToDelete of tablesToDelete) {
    validate<RoutingTableOptions>(SchemaIds.RoutingTablesOptions, RoutingTableOptionsSchema, tableToDelete);
  }

  validate<GlobalOptions>(SchemaIds.GlobalOptions, GlobalOptionsSchema, globalOptions);

  const oldTables = await show();
  const newTables = oldTables.filter(oldTable => {
    let foundIndex = tablesToDelete.findIndex((tableToDelete) => {
      return tableToDelete.id === oldTable.id || tableToDelete.name === oldTable.name;
    });

    return foundIndex === -1;
  });

  const toWrite = newTables.map(table => `${ table.id }\t${ table.name }`).join('\n') + '\n';

  await fs.writeFile(tablesPath, toWrite);
}

/**
 * Delete all routing tables.
 *
 * @param globalOptions  - Global parameters options that affects the command execution.
 */
export async function clear(globalOptions: GlobalOptions = {}): Promise<void> {
  validate<GlobalOptions>(SchemaIds.GlobalOptions, GlobalOptionsSchema, globalOptions);

  await fs.writeFile(tablesPath, '');
}

export default {
  show,
  add,
  del,
  clear
};
