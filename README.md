# node-vargs
Optional arguments made easy.

## Purpose
Purpose of this module is to handle optional arguments easily and efficiently.

## Installation

```sh
npm install node-vargs --save
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
