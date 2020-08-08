const URL_BASE = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://pbflix.herokuapp.com';

function getUrl(resource) {
  const result = `${URL_BASE}${resource}`;

  // eslint-disable-next-line no-console
  console.log(`getUrl: ${result}`);
  return result;
}

export default {
  getUrl,
};
