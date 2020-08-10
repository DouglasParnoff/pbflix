import config from '../config';

function create(video) {
  // eslint-disable-next-line no-console
  return fetch(
    config.getUrl('/videos?_embed=videos'),
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(video),
    },
  )
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const response = await serverResponse.json();
        return response;
      }

      throw new Error('Não foi possível cadastrar os dados');
    });
}

export default {
  create,
};
