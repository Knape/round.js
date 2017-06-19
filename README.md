# round.js

[![Build Status](https://travis-ci.org/Knape/round.js.svg?branch=master)](https://travis-ci.org/Knape/round.js)
[![Coverage Status](https://coveralls.io/repos/github/Knape/round.js/badge.svg?branch=master)](https://coveralls.io/github/Knape/round.js?branch=master)
[![Code Climate](https://lima.codeclimate.com/github/Knape/round.js/badges/gpa.svg)](https://lima.codeclimate.com/github/Knape/round.js)

> Round a number to a specific number, by decimal or nearest

## Installation

Install the package from [npm](https://npmjs.com/round.js)

```bash
$ npm install --save round.js
```

## Usage

```js
import round from 'round.js';

round(1.234, 2);
//=> 1.23

round.up(1.234, 2);
//=> 1.24

round.down(1.234, 2);
//=> 1.23

round.next(11, 10);
//=> 20

round.prev(11, 10);
//=> 10
```

## API

round.js: Tiny number-parser lib

Returns **Number**

#### round / to

Rounds a floating number to nearest number / float based on `precision`

**Parameters**

-   `Number` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Type of event to listen for, or `"*"` for all events
-   `precision`

#### off

Remove an event handler for the given type.

**Parameters**

-   `type` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Type of event to unregister `handler` from, or `"*"`
-   `handler` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** Handler function to remove

#### emit

Invoke all handlers for the given type.
If present, `"*"` handlers are invoked prior to type-matched handlers.

**Parameters**

-   `type` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The event type to invoke
-   `event` **\[Any]** An event object, passed to each handler
