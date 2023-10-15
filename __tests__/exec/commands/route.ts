import { promises as fs }              from 'fs';
import { describe, it, before, after } from 'mocha';
import { expect }                      from 'chai';

import { add, del, show, save, flush } from '../../../src/commands/route';
import { RouteInfo }                   from '../../../src/commands/route/show.interfaces';
import { RouteAddOptions }             from '../../../src/commands/route/add.interfaces';
import { RouteRoutingTables }          from '../../../src/commands/route/show.constants';

describe('route', () => {
  describe('show', () => {
    it('should return all routes if no filters were provided', async () => {
      const routes = await show({}, {
        sudo: true
      }) as RouteInfo[];

      expect(routes).to.be.an('array').that.has.lengthOf.at.least(1);
    });
  });

  describe('add', () => {
    let newRoute: RouteAddOptions = {
      to: '10.1.1.0/30',
      dev: 'lo'
    };

    let routesBeforeAdd: RouteInfo[] = [];

    before(async function () {
      routesBeforeAdd = await show({}, {
        sudo: true
      }) as RouteInfo[];
    });

    after(async function () {
      await del(newRoute, {
        sudo: true
      });
    });

    it('should add a new route', async () => {
      await add(newRoute, {
        sudo: true
      });

      const routes = await show({}) as RouteInfo[];
      expect(routes).to.be.an('array');
      expect(routes).to.be.an('array').that.has.lengthOf.at.least(routesBeforeAdd.length + 1);

      const addedRule = routes.find(item => item.dst === newRoute.to!.toString());
      expect(addedRule).not.to.be.undefined;
      expect(addedRule).to.be.an('object');
    });
  });

  describe('del', () => {
    let newRoute: RouteAddOptions = {
      to: '10.1.1.0/30',
      dev: 'lo'
    };

    let routesBeforeAdd: RouteInfo[] = [];

    before(async function () {
      await add(newRoute, {
        sudo: true
      });

      routesBeforeAdd = await show({}, {
        sudo: true
      }) as RouteInfo[];
    });

    it('should delete a route', async () => {
      await del(newRoute, {
        sudo: true
      });

      const routes = await show({}) as RouteInfo[];
      expect(routes).to.be.an('array');
      expect(routes).to.be.an('array').that.has.lengthOf.at.least(routesBeforeAdd.length - 1);

      const addedRoute = routes.find(item => item.dst === newRoute.to!.toString());
      expect(addedRoute).to.be.undefined;
    });
  });

  describe('save', () => {
    let filePath = `/tmp/routes-${ Date.now() }.dump`;

    after(async function () {
      try {
        await fs.unlink(filePath);
      }
      catch (error) {
      }
    });

    it('should create a file with dumped routes', async () => {
      await save({}, {
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

  describe('flush', () => {
    it('should flush the changes', async () => {
      await flush({
        table: RouteRoutingTables.Cache
      }, {
        sudo: true
      });
    });
  });
});
