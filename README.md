# node-vargs
Optional arguments made easy.

[![NPM](https://nodei.co/npm/node-vargs.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/node-vargs/)

## Purpose
Purpose of this module is to handle optional arguments easily and efficiently.

## Installation

```sh
npm install node-vargs --save
```

## Run tests

```sh
npm test
```

## Run coverage

```sh
npm run cover
```

## Examples

```js
"use strict";

var vargs = require('../');

function getUserList(age, sex, callback) {
  // called with getUserList(18, function(list) {});
  var args = vargs(arguments, 3);

  age      = args.arg1 || 0;
  sex      = args.arg2 || 'female';
  callback = args.arg3;

  console.log(age); // 18
  console.log(sex); // female

  callback([12, 18]);
}

getUserList(18, function(result) {
  console.log(result); // [12, 18];
});
```

For more examples see test/vargs.test.js
