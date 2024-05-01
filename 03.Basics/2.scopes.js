
function one(){
    const username = "Nakul"
    function two(){
        const website = "git"
        console.log(username);
    }
    // console.log(website);
    // two()
}
one()


//Scope in conditions

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

