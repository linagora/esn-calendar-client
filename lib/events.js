const {ENDPOINT_PREFIX} = require('./constants');
const uuid = require('uuid/v4');

module.exports = (client, user, calendarId) => {
  return {
    create,
    list
  };

  function create(event) {
    return user.then(_create);

    function _create(_user) {
      return client({
        method: 'put',
        url: `${ENDPOINT_PREFIX}/${_user._id}/${calendarId}/${uuid()}.ics`,
        data: event,
        headers: {
          'Content-Type': 'application/calendar+json'
        }
      });
    }
  }

  function list({from, to}) {
    return user.then(_list);

    function _list(_user) {
      return client({
        method: 'report',
        url: `${ENDPOINT_PREFIX}/${_user._id}/${calendarId}.json`,
        data: {
          match: { start: from, end: to }
        }
      }).then(response => response.data);
    }
  }
};
