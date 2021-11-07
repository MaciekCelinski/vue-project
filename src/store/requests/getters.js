export default {
  requests(state, _, _2, rootGetters) {
    if (localStorage.getItem('activeCoach')) {
      const coachId = JSON.parse(localStorage.getItem('activeCoach'));
      return state.requests.filter(req => req.coachId === coachId);
    } else {
      const activeCoachId = rootGetters['coaches/getActiveCoach'];
      return state.requests.filter(req => req.coachId === activeCoachId);
    }
  }
};
