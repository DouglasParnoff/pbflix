import config from '../config';

function getAllWithVideos() {
  // eslint-disable-next-line no-console
  return fetch(config.getUrl('/categories?_embed=videos'))
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const response = await serverResponse.json();
        return response;
      }

      throw new Error('Não foi possível buscar as categorias com vídeos');
    });
}

function getAll() {
  // eslint-disable-next-line no-console
  return fetch(config.getUrl('/categories'))
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const response = await serverResponse.json();
        return response;
      }

      throw new Error('Não foi possível buscar as categorias');
    });
}

function create(category) {
  // eslint-disable-next-line no-console
  return fetch(
    config.getUrl('/categories'),
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(category),
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
  getAllWithVideos,
  getAll,
  create,
};
