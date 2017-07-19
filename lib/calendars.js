const {ENDPOINT_PREFIX} = require('./constants');
const events = require('./events');

module.exports = (client, user) => {
  return {
    get,
    create,
    list
  };

  function get(calendarId) {
    return events(client, user, calendarId);
  }

  function create({id, name, color, description}) {
    return user.then(_create);

    function _create(_user) {
      return client.post(`${ENDPOINT_PREFIX}/${_user._id}.json`, {
        data: {
          id,
          'dav:name': name,
          'apple:color': color,
          'caldav:description': description
        }
      });
    }
  }

  function list() {
    function _list(_user) {
      return client.get(`${ENDPOINT_PREFIX}/${_user._id}.json`).then(response => response.data._embedded['dav:calendar']);
    }

    return user.then(_list);
  }
};
