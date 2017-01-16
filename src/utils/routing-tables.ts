import { promises as fs } from 'fs';

import { tablesPath }    from './routing-tables.constants';
import { GlobalOptions } from '../common/interfaces/common';

import {
  RoutingTable,
  RoutingTablesOptions
}                                         from './routing-tables.interfaces';
import { validate }                       from '../common/misc';
import { GlobalOptionsSchema, SchemaIds } from '../common/constants/schemas';
import { RoutingTablesOptionsSchema }     from './routing-tables.schemas';

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
      id:   Number(fields[0]),
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
export async function show(options: RoutingTablesOptions = {}, globalOptions: GlobalOptions = {}): Promise<RoutingTable[]> {
  validate<RoutingTablesOptions>(SchemaIds.RoutingTablesOptions, RoutingTablesOptionsSchema, options);
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
export async function add(options: RoutingTablesOptions, globalOptions: GlobalOptions = {}): Promise<void> {
  validate<RoutingTablesOptions>(SchemaIds.RoutingTablesOptions, RoutingTablesOptionsSchema, options);
  validate<GlobalOptions>(SchemaIds.GlobalOptions, GlobalOptionsSchema, globalOptions);

  const tables        = await show();
  const existingTable = tables.find(table => table.id === options.id || table.name === options.name);

  if (existingTable) {
    // The table is already there, so exit silently.
    return;
  }

  const toAppend = `${ options.id }\t${ options.name }\n`;
  await fs.appendFile(tablesPath, toAppend);
}

/**
 * Delete a routing table.
 *
 * @param options        - Parameters options to be passed down to `ip`.
 * @param globalOptions  - Global parameters options that affects the command execution.
 */
export async function del(options: RoutingTablesOptions, globalOptions: GlobalOptions = {}): Promise<void> {
  validate<RoutingTablesOptions>(SchemaIds.RoutingTablesOptions, RoutingTablesOptionsSchema, options);
  validate<GlobalOptions>(SchemaIds.GlobalOptions, GlobalOptionsSchema, globalOptions);

  const oldTables = await show();
  const newTables = oldTables.filter(item => item.id !== options.id);

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
