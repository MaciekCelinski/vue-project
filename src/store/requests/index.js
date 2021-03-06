import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const RequestModule = {
  namespaced: true,
  state() {
    return {
      requests: []
    };
  },
  getters,
  actions,
  mutations
};

export default RequestModule;
