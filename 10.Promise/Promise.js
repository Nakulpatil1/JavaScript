// const promiseOne = new Promise(function(resolve , reject){
//     //Do Any Async Tasks
//     //Like DB Calls , Network
//     setTimeout(function(){
//         console.log("Hello Async")
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){                   //.then calls resolve Promise
//     console.log("Promise is done")
// })


//             OR


// new Promise((resolve, reject) => {
//     setInterval(() => {
//         console.log("Hello Async 2")
//         resolve()
//     }, 1000);
// }).then(function() {
// console.log("Promise is Done");
// })



const promisetwo = new Promise((resolve, reject) => {
    let error = true ; 
    if (!error) {
        resolve({
            username: "Nakul",
            password: "10101"
        })
    }else{
        reject("Error! Something Went Wrong")
    }
})

// promisetwo.then(function (user) {
//     console.log(user);
// })
// .catch(function (error) {                     //.catch calls rejects Promise
//     console.log(error);
// })


// OR 
//We can use await 
//await Function in Async  


async function consumepromisetwo(){
    try {
        const response = await promisetwo
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumepromisetwo()


//fetch() method 


async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}
getAllUsers()