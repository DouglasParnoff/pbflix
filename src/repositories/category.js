import config from '../config';

function getAllWithVideos() {
  // eslint-disable-next-line no-console
  return fetch(config.getUrl('/categories?_embed=videos'))
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const response = await serverResponse.json();
        return response;
      }

      throw new Error('Não foi possível buscar as categorias');
    });
}

export default {
  getAllWithVideos,
};
