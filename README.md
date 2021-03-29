![Archived](https://img.shields.io/badge/Current_Status-archived-blue?style=flat)

# esn-calendar-client

Client library for linagora.esn.calendar module.

## Install

``` bash
npm install esn-calendar-client
# or
yarn add esn-calendar-client
```

## Usage

**Get list of calendars**

``` js
const auth = {
  username: 'user1@open-paas.org',
  password: 'secret'
};

const client = require('esn-calendar-client')({auth});

client.calendars.list().then(calendars => {
  console.log('My calendars', JSON.stringify(calendars, null, 2));
});
```

**Get events of a given calendar**

``` js
const auth = {
  username: 'user1@open-paas.org',
  password: 'secret'
};

const client = require('esn-calendar-client')({auth});

client.calendars.get('mycalendarid').list({from: '20170709T000000', to: '20170718T000000'}).then(events => {
  console.log('My Events', JSON.stringify(events, null, 2));
});
```

**Create event in a calendar**

``` js
const auth = {
  username: 'user1@open-paas.org',
  password: 'secret'
};

const client = require('esn-calendar-client')({auth});
const event = {/* good luck here, going to add helpers...*/};

client.calendars.get('mycalendarid').create(event).then(response => {
  console.log('Event creation response', JSON.stringify(response, null, 2));
});
```
