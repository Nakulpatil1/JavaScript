let name = "Nakul"
let age = 21

// console.log(name , "age is", age)
console.log(`Hello my name is ${name} & my age is ${age}`);  //Better way to write.

console.log(name[0])            //Value Assigned
console.log(name.length)        //Length of String
console.log(name.indexOf("N"))  //Position of String
console.log(name.charAt(2))     
const newString = name.substring(0, 4)
console.log(newString);

const anotherString = name.slice(-8, 2)
console.log(anotherString);
