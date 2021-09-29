const BASE_API = 'https://api.thedogapi.com/v1';

export default {
  getPets: async () => {
    const req = await fetch(`${BASE_API}/breeds`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    const json = await req.json();
    return json;
  },

  getPetById: async id => {
    const req = await fetch(`${BASE_API}/breeds/${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    const json = await req.json();
    return json;
  },
};
