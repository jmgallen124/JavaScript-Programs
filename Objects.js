/* Program to demonstrate objects
by Jeremy Gallen */

// Declare hero object
var hero = {
    name: "Jeremy",
    gender: "male",
    attack(){
        console.log(`${this.name} attacks with an equipped weapon.`);
    }
};

// Main program to demonstrate object action
hero.attack();