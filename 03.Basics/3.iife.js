//Imediatelty invoked function expression (iife)

(function(){
    console.log("hello")
})();            //; to end the execution 

//OR

//UnNamed iife
(()=>{
    console.log("hello")
})();


//Named iife
(function(name){
    console.log(`Hello ${name}`);
})("Nakul");
