/* Sample program to demonstrate various operators
by Jeremy Gallen */

// Declare variables
var a = 32, b = 2, int4 = 4, bit1 = 8, bit2 = 2, str = "4";

// Demonstrate shift operators
console.log("a<<b: " + (a<<b));
console.log("a>>b: " + (a>>b));
console.log("b<<a: " + (b<<a));
console.log("b>>a: " + (b>>a));

// Print break
console.log();

// Demonstrate relational operators
console.log("int4 == str: " + (int4==str));
console.log("int4 === str: " + (int4===str));

// Print break
console.log();

// Demonstrate bitwise operators
console.log("bit1&bit2: " + (bit1&bit2));
console.log("bit1|bit2: " + (bit1|bit2));
console.log("bit1^bit2: " + (bit1^bit2));
console.log("~bit1: " + (~bit1));
console.log("~bit2: " + (~bit2));

// Print break
console.log();

// Demonstrate ternary operator
(a>b)?console.log("a is greater than b"):console.log("a is less than b");
(b>a)?console.log("b is greater than a"):console.log("b is less than a");