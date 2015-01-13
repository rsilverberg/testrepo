//You know how many loops

for(i = 0; i < 10; i++){
    console.log(i)
}


//Don't know how manu loops
var testVariable = 0;

while (testVariable <= 10){
    alert("Test variable is "+ testVariable);
    testVariable++;
    if (testVariable === 10) {
        alert("Last Loop");
    }
}

var degrees = 60

while (degrees <= 100){
    alert("Test variable is "+ testVariable);
    testVariable++;
    if (testVariable === 10) {
        alert("Last Loop");
    }
}

//Relying on something being true
var userAge;

do
{
    userAge = prompt("Please enter your age", ""); 
}

while(isNaN(userAge) == true);

// function

var helloWorld = function(){
    console.log("Hello World!");
}

var addOne = function(number){
    console.log(number + 1);
}

addOne(1);

helloWorld();