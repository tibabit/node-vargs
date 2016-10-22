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
