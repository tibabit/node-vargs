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

var vargs = require('node-vargs');

function getUserList(age, sex, callback) {
  // called with getUserList(18, function(list) {});
  var args = vargs(arguments, 3);

  var age      = args.arg1 || 0; // age         = 18
  var sex      = args.arg2 || 'female'; // sex  = 'female'
  var callback = args.arg3; // or args.callback
}

```

For more examples see test/vargs.test.js
