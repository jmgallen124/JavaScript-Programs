/* Example program to demonstrate conditions
by Jeremy Gallen */

// Declare variables
var num1 = 4, num2 = 2, animal = "fox";

// If/else statement to test numbers
if (num1 > 4) {
    console.log("The first number is greater than four.");
} else if (num2 < 2) {
    console.log("The second number is less than two.");
} else if (num1 == 4 && num2 == 2) {
    console.log("The first number is four and the second is two.");
} else {
    console.log("The else statement has been executed.");
}

// Switch statement demonstration
switch(animal) {
    case "bird":
        console.log("The animal is avian.");
        break;
    case "cat":
        console.log("The animal is feline.");
    case "dog":
        console.log("The animal is canine.");
        break;
    case "fox":
        console.log("The animal is vulpine.");
        break;
    case "otter":
        console.log("The animal is lutrine.");
        break;
    default:
        console.log("The animal is miscellaneous.");
}