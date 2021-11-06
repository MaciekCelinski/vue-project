const getters = {
  coaches: state => state.coaches,
  hasCoaches: state => {
    return state.coaches && state.coaches.length > 0;
  },
  getCoach: state => id => {
    return state.coaches.find(coach => coach.coachId === id);
  },
  getActiveCoach: state => state.activeCoach
};

export default getters;
