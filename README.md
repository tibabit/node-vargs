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

 - optional arguments

```js
"use strict";

var vargs = require('node-vargs');

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

// NOTE: number of arguments passed is totoal number of arguments, including callback
```
 - optional arguments with default value

 ```js
"use strict";

var vargs = require('node-vargs');

function makePicture(color, shape, options) {
  // called with makePicture('Orange');
  var args = vargs(arguments, ['Red', 'Rectangle', {create_new : true}]);

  console.log(args.arg1); // Orange
  console.log(args.arg2); // Rectangle
  console.log(args.arg3); // {create_new : true}
}

makePicture('Orange');

// NOTE: total number of elements in default values array must match total number of arguments
// in function, including callback. See example below

"use strict";

var vargs = require('node-vargs');

function makePicture(color, shape, options, callback) {
  // called with makePicture('Orange');
  var args = vargs(arguments, ['Red', 'Rectangle', {create_new : true}, function(picture) { }]);

  console.log(args.arg1); // Orange
  console.log(args.arg2); // Rectangle
  console.log(args.arg3); // {create_new : true}
}

makePicture('Orange');

```

For more details, see test/vargs.test.js
