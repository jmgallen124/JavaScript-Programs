/* Program to demonstrate functions
by Jeremy Gallen */

// Main program
var i = 38, j = 2;

// Run calculation functions
add(i, j);
sub(i, j);
multi(i, j);
div(i, j);
mod(i, j);

// Declare addition function
function add(a, b) {
    console.log(`${a} + ${b} = ${a + b}`);
}

// Declare subtraction function
function sub(a, b) {
    console.log(`${a} - ${b} = ${a - b}`);
}

// Declare multiplication function
function multi(a, b) {
    console.log(`${a} * ${b} = ${a * b}`);
}

// Declare division function
function div(a, b) {
    console.log(`${a} / ${b} = ${a / b}`);
}

// Declare modulus function 
function mod(a, b) {
    console.log(`${a} % ${b} = ${a % b}`);
}