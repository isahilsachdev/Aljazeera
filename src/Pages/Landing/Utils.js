import axios from 'axios';

const getUsers = (category) => {
  return axios.get(`https://fast-lake-64955.herokuapp.com/${category}`);
};

export { getUsers };
