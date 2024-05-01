//Object literals

const sym = Symbol("key1") 
const JsUser = {
    name: "nakul",
    age: 18,
    [sym]:"Hello",
    location: "Jaipur",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser.name)                //Mostly Used.
// console.log(JsUser["name"])
// console.log(JsUser[sym]);
// console.log(typeof sym);


JsUser.greeting = function(){             
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())




