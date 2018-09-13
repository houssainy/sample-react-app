//
// Copyright (c) 2018
//

import Components from '../../components';

const config = router => router.urlService.rules.initial({ state: 'home' });

const states = [
  {
    url: '/',
    name: 'home',
  },
  {
    url: '/test1',
    name: 'test1',
    component: Components.Test,
    resolve: {
      value: () => '1'
    },  
  },
  {
    url: '/test2',
    name: 'test2',
    component: Components.Test,
    resolve: {
      value: () => '2'
    },
  },
  {
    url: '/test3',
    name: 'test3',
    component: Components.Test,
    resolve: {
      value: () => '3'
    },
  },
];

export default {
  config,
  states,
}
