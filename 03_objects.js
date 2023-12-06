// singleton //constructor ne banlele //literals ne banlele not singleton
// Object.create


// object literals
//in array myArray = ["n", "i"];myArray[1] asch access karto but obj madhe both key and value defind karu shakto ;


const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", //typeof is symbol , mykey1
    mySym: "mykey1",   //typeof is string
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) //hitesh@google.com
// console.log(JsUser["email"]) //hitesh@google.com
// console.log(JsUser["full name"]) //never access using . (dot)
// console.log(JsUser[mySym]) //mykey1

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(JsUser.greeting()); //hellow js user

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greetingTwo());

console.log(JsUser);
