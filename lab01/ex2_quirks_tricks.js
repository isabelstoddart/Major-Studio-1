/*
  Exercise 2
  JavaScript quirks and tricks
*/

var schoolName = "Parsons";
var schoolYear = 1936;

// Task
// What is the value of test3?
var test1;
if (1 == true) {
  test1 = true;
} else {
  test1 = false;
}

var test2;
if (1 === true) {
  test2 = true;
} else {
  test2 = false;
}

var test3 = test1 === test2;

console.log("The value of test3 is false because looking at test2, 1 is an integer and true is a boolean so they are not the same type therefore resulting in test2 being false, however test1 is true because 1 is the same value as true. Because test1 is true and test2 is false, they are not the same value resulting in test3 being false.")
console.log(test3)

// Task
// Change this code so test4 is false and test5 is true. Use console.log() to confirm your code works.

var test4 = 0 === "";
var test5 = 1 == "1";

console.log("test4 is", test4, "and test 5 is", test5);

// Task
// What are the values of p, q, and r? Research what is going on here.
var w = 0.1;
var x = 0.2;
var y = 0.4;
var z = 0.5;

var p = w + x;

var q = z - x;

var r = y - w;

console.log(p,q,r)
console.log("This has to do with how the numbers are formatted. Javascript doesn’t have float and int types, just number type. It uses binary floating point and some numbers can’t accurately be represented in base 2. The only fractional number that can be represented cleanly in base 2 is 1/2 (.5) so thats why the equation here with .5 has a clean decimal answer, while the others do not.")
