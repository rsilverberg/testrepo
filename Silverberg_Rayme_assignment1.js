//alert("JavaScript works!");

// Rayme Silverberg
// 02MDVB
// Project 1

// My variables
var myGreeting = "Welcome!"; 
var myPhotoshoot = prompt ("Please enter shooting location", "");
var myClient = prompt("Please enter your name","");
var confirmingService = true
var numServices = 3;
var typeOfService1 = "Photography";
var typeOfService2 = "Photo Editing";
var typeOfService3 = "Graphic Arts";

// my outputs

console.log("I will meet the client at" + myClient + "at"+ myPhotoshoot + ".");
console.log("It is" + confirmingService + "that" + myClient + "wants" + numServices);
console.log ("The services desired are" + typeOfService1 + "," + typeOfService2 + ", and" + typeOfService3 + ".");

// my conditionals
if (confirmingService === true) {
    //this is what runs if condition is true
    console.log("We will move forward with a succesful photoshoot, with quality services!");
} else {
    // this runs if condition first condition is false.
    console.log("I'm flexible and willing to perform any of my services a'la carte.");
    
} else {
    // this is what runs if both conditions above are false
    console.log("I hope to work with you soon! Please feel free to contact me, should my services be needed".);
    
