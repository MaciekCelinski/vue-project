export default {
  addRequest(state, payload) {
    state.requests.push(payload);
  },
  setRequests(state, payload) {
    state.requests = payload;
  },
  removeRequest(state, payload) {
    console.log('payload: ', payload);
    state.requests = state.requests.filter(request => request.id !== payload);
  }
};
