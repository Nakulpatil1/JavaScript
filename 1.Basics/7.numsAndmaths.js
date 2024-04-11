//Understanding Numbers

let num1 = 28.87
// console.log(num1)

let num2 = new Number (78)
// console.log(num2)

//Different Methods
console.log(num1.toString().length)       //Length of the value.
console.log(num1.toPrecision(2))          //Precise no. of Output.
console.log(num1.toFixed(1))              //Fixed no. of Output.

let zero = 10000000000;
console.log(zero.toLocaleString())         //Number in String.
console.log(zero.toLocaleString("en-In"))  //Indian Standard.


//Understanding Maths


console.log(Math.round(3.5));       //Round off value.
console.log(Math.abs(-5));          //Absolute Value.
console.log(Math.min(2,7,8,1,4))    //Minimum Value.
console.log(Math.max(2,7,8,1,4))    //Maximum Value.
console.log(Math.floor(3.78));      //Lowest Value.
console.log(Math.ceil(5.48));       //Highest Value.


console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)








