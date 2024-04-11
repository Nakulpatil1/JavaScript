// const tinderUser = new Object()
//         OR
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Nakul"
tinderUser.isLoggedIn = false

console.log(tinderUser);


const regularUser = {                    //Obj inside Obj.
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Nakul",
            lastname: "Patil",
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
//           OR
// const obj3 = Object.assign({}, obj1, obj2, obj4)
//           OR
const obj3 = {...obj1, ...obj2}
console.log(obj3);


//Destructuring Objects

const College = {
    name: "IIT",
    Instructor: "Nakul"
}

// course.courseInstructor
// console.log(courseInstructor);     
//         OR 
const {courseInstructor: instructor} = course  //Destructuring to Avoid Code repeatation
console.log(instructor);


