"use strict";

function argKey(index) {
  return 'arg' + String(index);
}

function VArgs(args, numArguments) {
  if (args === null || typeof args !== 'object') {
    throw new TypeError('"args" must be an array');
  }
  if ((typeof numArguments !== 'number' || numArguments < 0) &&
  (!(numArguments instanceof Array))) {
    throw new TypeError('"numArguments" must be a positive number or an Array');
  }

  var defaultValues = [];
  var i = 0;

  // if this is an array then, it contains default values
  if (numArguments instanceof Array) {
    defaultValues = numArguments;
    numArguments = defaultValues.length;
  } else {
    i = 0;
    while (i < numArguments) {
      defaultValues.push(null);
      i++;
    }
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
  i = 0;

  while (i < numArguments) {
    if (i < argsRemaining) {
      vargs[argKey(i + 1)] = args[i];
    } else {
      vargs[argKey(i + 1)] = defaultValues[i];
    }
    i++;
  }

  return vargs;
}

module.exports = VArgs;
