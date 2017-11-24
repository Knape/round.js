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

round.to(11, 5);
//=> 10

round.next(11, 10);
//=> 20

round.prev(11, 10);
//=> 10
```

## API

round.js: Tiny number-parser lib

Returns **Number**

#### round

Rounds a floating number to nearest number / float based on `precision`

**Parameters**

-   `Number`
-   `precision`

```js
round(1.234, 2);
//=> 1.23
```

#### round.up

Rounds a floating `up` number to nearest number / float based on `precision`

**Parameters**

-   `Number`
-   `precision`

```js
round.up(1.234, 2);
//=> 1.24
```

#### round.down

Rounds a floating `down` number to nearest number / float based on `precision`

**Parameters**

-   `Number`
-   `precision`

```js
round.down(1.234, 2);
//=> 1.23
```

#### round.near

Increment or decrement the number until it reaches the nearest `near` number

**Parameters**

-   `Number`
-   `near`

```js
round.near(11, 5);
//=> 10

round.near(13, 5);
//=> 15
```

#### round.next

Increment the number until it reaches the next `next` number

**Parameters**

-   `Number`
-   `next`

```js
round.next(11, 5);
//=> 15
```


#### round.prev

Decrement the number until it reaches the previous `prev` number

**Parameters**

-   `Number`
-   `prev`

```js
round.prev(11, 5);
//=> 10
```
