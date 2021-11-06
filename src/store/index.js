import { createStore } from 'vuex';

// modules
import CoachesModule from './coaches';
import RequestModule from './requests';

const store = createStore({
  modules: {
    coaches: CoachesModule,
    requests: RequestModule
  },
});

export default store;
