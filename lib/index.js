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

var nearest = function nearest(type) {
  return function (x, number) {
    if (typeof x !== 'number') {
      throw new TypeError('Expected value to be a number');
    }
    return Number(Math[type](x / number) * number);
  };
};

var to = exports.to = nearest('round');
var near = exports.near = nearest('round');
var next = exports.next = nearest('ceil');
var prev = exports.prev = nearest('floor');
var up = exports.up = round('ceil');
var down = exports.down = round('floor');
exports.default = round('round');