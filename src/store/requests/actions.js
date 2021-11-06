export default {
  setRequests(context) {
    fetch(`${process.env.VUE_APP_DATABASE_URL}/requests.json`)
      .then(data => data.json())
      .then(req => {
        const requests = [];
        for (let key in req) {
          const request = { id: key, ...req[key] };
          requests.push(request);
        }
        context.commit('setRequests', requests);
      });
  },
  addRequest(context, payload) {
    const newRequest = {
      coachId: payload.coachId,
      email: payload.email,
      message: payload.message
    };
    console.log('newRequest: ', newRequest);

    fetch(`${process.env.VUE_APP_DATABASE_URL}requests.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newRequest)
    });

    context.commit('addRequest', newRequest);
  },
  removeRequest(context, payload) {
    fetch(`${process.env.VUE_APP_DATABASE_URL}/requests/${payload}.json`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    });

    context.commit('removeRequest', payload);
  }
};
