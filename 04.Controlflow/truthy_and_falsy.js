//Truthy and falsy value

// Falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values
// "0", 'false', " ", [], {}, function(){}



const userEmail = []    //Truthy value
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

if (userEmail.length === 0) {
    console.log("Array is empty");
}


const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


