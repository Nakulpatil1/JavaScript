// Conditions :-

// > , < , >= , <= ,
// = (operator assignment), 
// == (equal value), 
// != (not equal value),
// === (checks equal strict type check),
// !== (checks not equal strict type check)
// && (AND statement checks multiple condition together)
// || (OR statement checks either of the one condition)


//if statement

if(true){   //conditions
}


if(3 != 2){
    console.log("hello")
}

if(3 === "3"){
    console.log("hello twice")
}



//else statement

else{     //Checks the false Condition statement

}


const temperature = 51;
 if(temperature < 50){
    console.log("Temperature is below 50");
 }
 else{
    console.log("Temperature is above 50")
 }



const balance = 600
if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 750");
} else {
    console.log("less than 1200");
}



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2) {         //All conditions should be True.
    console.log("Allow to buy course");         
}

if (loggedInFromGoogle || loggedInFromEmail) {   //Either One condition should be True.
    console.log("User logged in");
}