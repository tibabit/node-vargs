"use strict";

function argKey(index) {
  return 'arg' + String(index);
}

function VArgs(args, numArguments) {
  if (typeof args !== 'object') {
    throw new TypeError('"args" must be an array');
  }
  if (typeof numArguments !== 'number' || numArguments < 0) {
    throw new TypeError('"numArguments" must be a positive number');
  }

  var vargs = { callback : null, hasCallback : false};

  var argsRemaining = args.length;

  if (argsRemaining > 0) {
    vargs.hasCallback = (typeof args[argsRemaining - 1] === 'function');
    if (vargs.hasCallback) {
      vargs[argKey(numArguments)] = vargs.callback = args[argsRemaining - 1];
      argsRemaining--;
      numArguments--;
    } else {
      vargs.callback = null;
    }
  }
  var i = 0;

  while (i < numArguments) {
    if (i < argsRemaining) {
      vargs[argKey(i + 1)] = args[i];
    } else {
      vargs[argKey(i + 1)] = null;
    }
    i++;
  }

  return vargs;
}

module.exports = VArgs;
