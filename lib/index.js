'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var round = function round(type) {
  return function (x, precision) {
    if (typeof x !== 'number') {
      throw new TypeError('Expected value to be a number');
    }
    return Number(Math[type](x + 'e' + Math.abs(precision)) + ('e-' + Math.abs(precision)));
  };
};

var near = function near(type) {
  return function (x, nearest) {
    if (typeof x !== 'number') {
      throw new TypeError('Expected value to be a number');
    }
    return Number(Math[type](x / nearest) * nearest);
  };
};

var next = exports.next = near('ceil');
var prev = exports.prev = near('floor');
var up = exports.up = round('ceil');
var down = exports.down = round('floor');
exports.default = round('round');