let myArr1 = ["pen", "cap", "bottle"]
let myArr2 = ["pc", "nature"]

// myArr1.push(myArr2)                       //Wrong Format
// console.log(myArr1)


let totalArr = myArr1.concat(myArr2)         //Concat Operator.
// console.log(totalArr)

//        OR

let totalArr2 = [...myArr1, ...myArr2]       //Spread Operator.
// console.log(totalArr2)

let totalArr3 = [1,2,[6,9],10,[44,[80]]]
console.log(totalArr3.flat(Infinity))        //Concats and Spread all Arrays.




console.log(Array.isArray("Nakul"))
console.log(Array.from("Nakul"))


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


