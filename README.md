# round.js

> Round a number to a specific number, by decimal or nearest


## Install

```
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
