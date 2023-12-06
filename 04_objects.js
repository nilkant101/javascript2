// const tinderUser = new Object() //{}
const tinderUser = {}  //{}nonsingletonObj

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//** const obj3 = { obj1, obj2 } 
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

 //** const obj3 = Object.assign({}, obj1, obj2, obj4) //{}he nahi diltari chalt 
 //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj3 = {...obj1, ...obj2}
//console.log(obj3);
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

console.log(users[1].email); //h@gmail.com

console.log(tinderUser); //{ id: '123abc', name: 'Sammy', isLoggedIn: false }

// console.log(Object.keys(tinderUser));  // ['id', 'name', 'isLoggedIn'] //array mehod used on that 
// console.log(Object.values(tinderUser)); // ['123abc', 'sammy', false]
// console.log(Object.entries(tinderUser));
//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "nil"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor); //nil
console.log(instructor); //nil



