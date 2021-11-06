export default {
  setCoaches: async context => {
    const coachesList = [];
    const data = await fetch(
      `${process.env.VUE_APP_DATABASE_URL}/coaches.json`
    );
    const response = await data.json();

    for (const key in response) {
      coachesList.push({ id: key, ...response[key] });
    }

    context.commit('setCoaches', coachesList);
  },
  setActiveCoach: async (context, payload) => {
    if(!payload) {
      context.commit('setActiveCoach', '');
    }
    if (payload) {
      const allCoaches = context.getters['coaches'];
      const activeCoach = allCoaches.find(coach => coach.email === payload);
      context.commit('setActiveCoach', activeCoach.coachId);
    }
  },
  registerCoach: (context, payload) => {
    const newCoach = {
      firstName: payload.firstName,
      lastName: payload.lastName,
      hourlyRate: payload.rate,
      description: payload.desc,
      areas: payload.areas,
      coachId: Math.floor(Math.random() * 1000000).toString()
    };
    
    fetch(
      `${process.env.VUE_APP_DATABASE_URL}/coaches.json`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCoach)
      }
    )

    context.commit('registerCoach', newCoach);
  }
};
