"use strict";

const expect = require('chai').expect;

const vargs = require('../');

describe('vargs', function() {

  it('#no arguments', function() {
    var args = vargs([], 3);
    expect(args.arg1).to.be.null;
    expect(args.arg2).to.be.null;
    expect(args.arg3).to.be.null;
    expect(args.callback).to.be.null;
  });

  it('#few arguments without callback', function() {
    var args = vargs(['Sherlock', 'Holmes'], 4);
    expect(args.arg1).to.be.equal('Sherlock');
    expect(args.arg2).to.be.equal('Holmes');
    expect(args.arg3).to.be.null;
    expect(args.arg4).to.be.null;
    expect(args.callback).to.be.null;
  });

  it('#few arguments with callback', function() {
    var args = vargs(['Sherlock', 'Holmes', function(x) { return x * 2; }], 4);
    expect(args.arg1).to.be.equal('Sherlock');
    expect(args.arg2).to.be.equal('Holmes');
    expect(args.arg3).to.be.null;
    expect(args.arg4).to.not.be.null;
    expect(args.arg4(8)).to.be.equal(16);
    expect(args.callback).to.not.be.null;
    expect(args.callback(8)).to.be.equal(16);
  });

  it('#all arguments without callback', function() {
    var args = vargs(['Sherlock', 'Holmes', 12345], 4);
    expect(args.arg1).to.be.equal('Sherlock');
    expect(args.arg2).to.be.equal('Holmes');
    expect(args.arg3).to.be.equal(12345);
    expect(args.arg4).to.be.null;
    expect(args.callback).to.be.null;
  });

  it('#all arguments with callback', function() {
    var args = vargs(['Sherlock', 'Holmes', 12345, function(x) { return x > 10; }], 4);
    expect(args.arg1).to.be.equal('Sherlock');
    expect(args.arg2).to.be.equal('Holmes');
    expect(args.arg3).to.be.equal(12345);
    expect(args.arg4).to.not.be.null;
    expect(args.arg4(18)).to.be.true;
    expect(args.callback).to.not.be.null;
    expect(args.callback(8)).to.be.false;
  });

});

