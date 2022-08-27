/* Program to demonstrate array functions
by Jeremy Gallen */

// Declare authors array
var authorsArray = ["Robert Jordan", "R.A. Salvatore", "Terry Goodkind", "Veronica Roth"];

// Display array
for(var i = 0; i < authorsArray.length; i++)
    console.log(authorsArray[i]);

// Pop author and print line break
console.log("\n");
authorsArray.pop();

// Display array again
for(var j = 0; j < authorsArray.length; j++)
    console.log(authorsArray[j]);
    
// Push author and print line break
console.log("\n");
authorsArray.push("J.K. Rowling");

// Display array again
for(var k = 0; k < authorsArray.length; k++)
    console.log(authorsArray[k]);