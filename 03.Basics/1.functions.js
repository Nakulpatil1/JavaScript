//functions

function myName(){                //Way to Write function.
    console.log("Nakul")
}
myName()                          //function call.


// function addnum(num1 ,num2){   //Passing Parameters.
//     console.log(num1 + num2)
// }
// addnum(1,2)                    //Passing Arguments.
// addnum(1,"3")  


//To Store Above Value.

function addnum(num1 ,num2){ 
    // console.log(num1 + num2)      //Value Stored is undefined.

    // let sum = num1+num2           //Value Stored.
    // return sum    
    //       OR
    return num1+num2
}
const total = addnum(1,2)
console.log("Result:", total)



function loggedIn(username){
    return`${username} just logged in`
}
console.log(loggedIn("Nakul"))



function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000))


//function with object

const user = {
    product: "Box",
    prices: 100
}
function handleObject(anyobject){
    console.log(`Product name is ${anyobject.product} and price is ${anyobject.prices}`);
}
handleObject(user)


