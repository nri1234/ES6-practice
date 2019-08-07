"use strict";

// task 1
var a = "hello";
var b = "world";
var c = a + " " + b;
console.log(c);

//task 2
var multiply = function multiply(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return x * y;
};
console.log(multiply(5));
//task 3
//const average = (...args) => {
//  let sum = 0;
//for (let i = 0; i < args.length; i++) {
//  sum += args[i];
//}
//console.log(sum / args.length);
//};
average(1, 2, 3, 4);
var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return console.log(args.reduce(function (sum, arg) {
    return sum + arg;
  }) / args.length);
};
average(1, 2, 3, 4);
//task 4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average.apply(undefined, grades);
//task 5
var name = [1, 4, "Iwona", false, "Nowak"];
var firstname = name[2],
    lastname = name[4];

console.log(firstname, lastname);
