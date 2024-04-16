//for loop

for (let index = 0; index < array.length; index++) {      //Syntax
    const element = array[index];
    
}



for (let i = 0;         //declaration
         i < 10;        //condition check
         i++) {         //Incrementation
    const element = i;
    console.log(element);
}



// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element==3) {
//         console.log("Im number 3");
//     }
//     console.log(element)
// }



// let myArray = ["Pen", "Paper", "Bottle"]
// console.log(myArray)
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element)
// }



//Condition Keywords:-

//break and continue

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element==5) {
        console.log("hello im Number 5");
        break
    }
    console.log(element)
}


for (let i = 0; i <= 6; i++) {
    const element = i;
    if (element==3) {
        console.log("Number 3 is detected");
        continue
    }
    console.log(element)
}
