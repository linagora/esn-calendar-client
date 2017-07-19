const axios = require('axios');
const {DEFAULT_URL, DEFAULT_TIMEOUT} = require('./constants');

module.exports = ({auth, baseURL = DEFAULT_URL, timeout = DEFAULT_TIMEOUT}) => {
  const client = axios.create({
    auth,
    baseURL,
    timeout
  });

  const user = new Promise((resolve, reject) => {
    client.get('/api/user').then(response => resolve(response.data), reject);
  });

  return {
    calendars: require('./calendars')(client, user)
  };
};
