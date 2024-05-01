// Arrays

let myArr = [1, 78, 9, 0]
//       or
let myArr2 = new Array(1, 78, 9, 0)

let myArr3 = ["pen", "cap", "bottle"]
// console.log(myArr3[0])

 
//Methods

myArr.push(10)            //Value pushed in Array.
myArr.pop()               //Value Removed in Array.
myArr.unshift(10)         //Value Added At the Start of Array ,Shifting other values.
myArr.shift()             //Removes First Value in Array.
console.log(myArr);   

console.log(myArr.includes(78))    //Specifies the given Value in included or not in Array.
console.log(myArr.indexOf(78))     //Specifies the position of the value in Array.


// slice, splice

console.log("A ", myArr);


const new1 = myArr.slice(0, 3)        //Manipulates A copy of Array.
console.log("B ", myArr);
console.log(new1);


const new2 = myArr.splice(0, 3)       //Manipulates the Array itself.  
console.log("C ", myArr); 
console.log(new2);