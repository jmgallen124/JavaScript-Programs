/* Program to Demonstrate Loops
by Jeremy Gallen */

// Declare array of fantasy authors
var authors = ["Terry Brooks", "Terry Goodkind", "R.A. Salvatore"];

// Demonstrate for loop
console.log("Here is an example of a for loop:")
for(var a = 0; a < 10; a++)
    console.log(a);

// Line break and loop of arrays
console.log("\n\n\nHere are fantasy authors looping through an array:")
for(author in authors)
    console.log(authors[author]);
    
// Loop through indexes
console.log("\n\nHere are the indexes of the authors: ")
for(author in authors)
    console.log(author);

// Loop of example
console.log("\n\nHere's an example of for/of:");
for(author of authors)
    console.log(author);

// Line break and forEach loop
console.log("\n\nHere are some fantasy authors using forEach:");
authors.forEach(author => console.log(author));

// Line break and do/while loop  
console.log("\n\nHere's an example of a do/while loop:");
do {
    console.log("The current number is: " + a);
    a--;
} while (a > 0);

// Line break and while loop
console.log("\n\nHere's an example of a while loop:");
while (a < 10) {
    console.log("The current number is: " + a);
    a++;
}
