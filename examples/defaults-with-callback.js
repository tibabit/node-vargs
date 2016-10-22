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
