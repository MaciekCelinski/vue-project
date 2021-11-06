export default {
  registerCoach(state, payload) {
    state.coaches.push(payload);
  },
  setCoaches(store, payload) {
    payload.map(coach => store.coaches.push(coach));
  },
  setActiveCoach: (store, payload) => {
    store.activeCoach = payload;
  }
};
