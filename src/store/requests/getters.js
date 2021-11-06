export default {
  requests(state, _, _2, rootGetters) {
    const activeCoachId = rootGetters['coaches/getActiveCoach'];
    return state.requests.filter(req => req.coachId === activeCoachId);
  }
};
