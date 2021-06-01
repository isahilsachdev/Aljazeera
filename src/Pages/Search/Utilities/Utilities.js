import axios from 'axios';
const getNewsData = (searchInput) => {
  const config = {
    method: 'get',
    url: 'https://newsapi.org/v2/everything',
    headers: {
      Accept: 'application/json',
    },
    params: {
      apiKey: '3f861290131f48c6abdd7d2c04b585af',
      q: searchInput,
      pageSize: 100,
    },
  };
  return axios(config);
};
export default getNewsData;
