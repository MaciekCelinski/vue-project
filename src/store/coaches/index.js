import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const CoachesModule = {
  namespaced: true,
  state() {
    return {
      coaches: [],
      activeCoach: null
    };
  },
  getters,
  mutations,
  actions
};

export default CoachesModule;
