import {
  del as linkDel,
  add as linkAdd,
  show as linkShow,
  set as linkSet
} from '../../../../src/commands/link';

import {
  add as addressAdd,
  change as addressChange,
  replace as addressReplace,
  del as addressDel,
  flush as addressFlush,
  save as addressSave,
  restore as addressRestore,
  show as addressShow,
  showdump as addressShowdump
} from '../../../../src/commands/address';

import {
  flush as routeFlush,
  show as routeShow,
  save as routeSave,
  restore as routeRestore,
  get as routeGet,
  add as routeAdd,
  del as routeDel,
  change as routeChange,
  append as routeAppend,
  replace as routeReplace
} from '../../../../src/commands/route';

import {
  add as ruleAdd,
  del as ruleDel,
  save as ruleSave,
  restore as ruleRestore,
  flush as ruleFlush,
  show as ruleShow
} from '../../../../src/commands/rule';

import {
  add as addrlabelAdd,
  del as addrlabelDel,
  flush as addrlabelFlush,
  list as addrlabelList
} from '../../../../src/commands/addrlabel';

import {
  add as neighbourAdd,
  del as neighbourDel,
  change as neighbourChange,
  replace as neighbourReplace,
  flush as neighbourFlush,
  show as neighbourShow
} from '../../../../src/commands/neighbour';

import {
  change as ntableChange,
  show as ntableShow
} from '../../../../src/commands/ntable';

import {
  add as tunnelAdd,
  del as tunnelDel,
  change as tunnelChange,
  show as tunnelShow,
  v6Rd as tunnelV6Rd,
  prl as tunnelPrl
} from '../../../../src/commands/tunnel';

import { TestDefinition } from '../../../../src/common/interfaces/tests';

import { Tests as linkAddTests } from './link-add';
import { Tests as linkDeleteTests } from './link-delete';
import { Tests as linkShowTests } from './link-show';
import { Tests as linkSetTests } from './link-set';

import { Tests as addressAddTests } from './address-add';
import { Tests as addressChangeTests } from './address-change';
import { Tests as addressReplaceTests } from './address-replace';
import { Tests as addressDeleteTests } from './address-delete';
import { Tests as addressFlushTests } from './address-flush';
import { Tests as addressSaveTests } from './address-save';
import { Tests as addressRestoreTests } from './address-restore';
import { Tests as addressShowdumpTests } from './address-showdump';
import { Tests as addressShowTests } from './address-show';

import { Tests as routeFlushTests } from './route-flush';
import { Tests as routeShowTests } from './route-show';
import { Tests as routeSaveTests } from './route-save';
import { Tests as routeRestoreTests } from './route-restore';
import { Tests as routeGetTests } from './route-get';
import { Tests as routeAddTests } from './route-add';
import { Tests as routeDeleteTests } from './route-delete';
import { Tests as routeChangeTests } from './route-change';
import { Tests as routeAppendTests } from './route-append';
import { Tests as routeReplaceTests } from './route-replace';

import { Tests as ruleAddTests } from './rule-add';
import { Tests as ruleDeleteTests } from './rule-delete';
import { Tests as ruleSaveTests } from './rule-save';
import { Tests as ruleRestoreTests } from './rule-restore';
import { Tests as ruleFlushTests } from './rule-flush';
import { Tests as ruleShowTests } from './rule-show';

import { Tests as addrlabelAddTests } from './addrlabel-add';
import { Tests as addrlabelDeleteTests } from './addrlabel-delete';
import { Tests as addrlabelFlushTests } from './addrlabel-flush';
import { Tests as addrlabelListTests } from './addrlabel-list';

import { Tests as neighbourAddTests } from './neighbour-add';
import { Tests as neighbourDeleteTests } from './neighbour-delete';
import { Tests as neighbourChangeTests } from './neighbour-change';
import { Tests as neighbourReplaceTests } from './neighbour-replace';
import { Tests as neighbourFlushTests } from './neighbour-flush';
import { Tests as neighbourShowTests } from './neighbour-show';

import { Tests as ntableChangeTests } from './ntable-change';
import { Tests as ntableShowTests } from './ntable-show';

import { Tests as tunnelAddTests } from './tunnel-add';
import { Tests as tunnelDelTests } from './tunnel-del';
import { Tests as tunnelChangeTests } from './tunnel-change';
import { Tests as tunnelShowTests } from './tunnel-show';
import { Tests as tunnelPrlTests } from './tunnel-prl';
import { Tests as tunnelV6RdTests } from './tunnel-v6rd';

export const fixtures: TestDefinition = {
  link     : [
    {
      operator   : 'del',
      testBattery: linkDeleteTests,
      method     : linkDel
    },
    {
      operator   : 'add',
      testBattery: linkAddTests,
      method     : linkAdd
    },
    {
      operator   : 'show',
      testBattery: linkShowTests,
      method     : linkShow
    },
    {
      operator   : 'set',
      testBattery: linkSetTests,
      method     : linkSet
    }
  ],
  address  : [
    {
      operator   : 'add',
      testBattery: addressAddTests,
      method     : addressAdd
    },
    {
      operator   : 'change',
      testBattery: addressChangeTests,
      method     : addressChange
    },
    {
      operator   : 'replace',
      testBattery: addressReplaceTests,
      method     : addressReplace
    },
    {
      operator   : 'delete',
      testBattery: addressDeleteTests,
      method     : addressDel
    },
    {
      operator   : 'flush',
      testBattery: addressFlushTests,
      method     : addressFlush
    },
    {
      operator   : 'save',
      testBattery: addressSaveTests,
      method     : addressSave
    },
    {
      operator   : 'restore',
      testBattery: addressRestoreTests,
      method     : addressRestore,
      skipOptions: true
    },
    {
      operator   : 'showdump',
      testBattery: addressShowdumpTests,
      method     : addressShowdump,
      skipOptions: true
    },
    {
      operator   : 'show',
      testBattery: addressShowTests,
      method     : addressShow
    }
  ],
  route    : [
    {
      operator   : 'flush',
      testBattery: routeFlushTests,
      method     : routeFlush
    },
    {
      operator   : 'show',
      testBattery: routeShowTests,
      method     : routeShow
    },
    {
      operator   : 'save',
      testBattery: routeSaveTests,
      method     : routeSave
    },
    {
      operator   : 'restore',
      testBattery: routeRestoreTests,
      method     : routeRestore,
      skipOptions: true
    },
    {
      operator   : 'get',
      testBattery: routeGetTests,
      method     : routeGet
    },
    {
      operator   : 'add',
      testBattery: routeAddTests,
      method     : routeAdd
    },
    {
      operator   : 'delete',
      testBattery: routeDeleteTests,
      method     : routeDel
    },
    {
      operator   : 'add',
      testBattery: addressAddTests,
      method     : addressAdd
    },
    {
      operator   : 'change',
      testBattery: routeChangeTests,
      method     : routeChange
    },
    {
      operator   : 'append',
      testBattery: routeAppendTests,
      method     : routeAppend
    },
    {
      operator   : 'replace',
      testBattery: routeReplaceTests,
      method     : routeReplace
    }
  ],
  rule     : [
    {
      operator   : 'add',
      testBattery: ruleAddTests,
      method     : ruleAdd
    },
    {
      operator   : 'delete',
      testBattery: ruleDeleteTests,
      method     : ruleDel
    },
    {
      operator   : 'save',
      testBattery: ruleSaveTests,
      method     : ruleSave,
      skipOptions: true
    },
    {
      operator   : 'restore',
      testBattery: ruleRestoreTests,
      method     : ruleRestore,
      skipOptions: true
    },
    {
      operator   : 'flush',
      testBattery: ruleFlushTests,
      method     : ruleFlush,
      skipOptions: true
    },
    {
      operator   : 'show',
      testBattery: ruleShowTests,
      method     : ruleShow
    }
  ],
  addrlabel: [
    {
      operator   : 'add',
      testBattery: addrlabelAddTests,
      method     : addrlabelAdd
    },
    {
      operator   : 'delete',
      testBattery: addrlabelDeleteTests,
      method     : addrlabelDel
    },
    {
      operator   : 'flush',
      testBattery: addrlabelFlushTests,
      method     : addrlabelFlush,
      skipOptions: true
    },
    {
      operator   : 'list',
      testBattery: addrlabelListTests,
      method     : addrlabelList,
      skipOptions: true
    }
  ],
  neighbour: [
    {
      operator   : 'add',
      testBattery: neighbourAddTests,
      method     : neighbourAdd
    },
    {
      operator   : 'delete',
      testBattery: neighbourDeleteTests,
      method     : neighbourDel
    },
    {
      operator   : 'replace',
      testBattery: neighbourReplaceTests,
      method     : neighbourReplace
    },
    {
      operator   : 'change',
      testBattery: neighbourChangeTests,
      method     : neighbourChange
    },
    {
      operator   : 'flush',
      testBattery: neighbourFlushTests,
      method     : neighbourFlush
    },
    {
      operator   : 'show',
      testBattery: neighbourShowTests,
      method     : neighbourShow
    }
  ],
  ntable   : [
    {
      operator   : 'change',
      testBattery: ntableChangeTests,
      method     : ntableChange
    },
    {
      operator   : 'show',
      testBattery: ntableShowTests,
      method     : ntableShow
    }
  ],
  tunnel   : [
    {
      operator   : 'add',
      testBattery: tunnelAddTests,
      method     : tunnelAdd
    },
    {
      operator   : 'delete',
      testBattery: tunnelDelTests,
      method     : tunnelDel
    },
    {
      operator   : 'change',
      testBattery: tunnelChangeTests,
      method     : tunnelChange
    },
    {
      operator   : 'show',
      testBattery: tunnelShowTests,
      method     : tunnelShow,
      skipOptions: true
    },
    {
      operator   : 'prl',
      testBattery: tunnelPrlTests,
      method     : tunnelPrl
    },
    {
      operator   : 'v6Rd',
      testBattery: tunnelV6RdTests,
      method     : tunnelV6Rd
    }
  ]
};