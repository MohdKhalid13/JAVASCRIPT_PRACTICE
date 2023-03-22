// Removing Duplicates method 1

const myNumbers = [1,4,4, 1, -20, -7, 5, 9, -6];

let num = myNumbers.filter((element, index) => { 
       return myNumbers.indexOf(element) === index
})

// Removing Duplicates method 2

console.log(num);

let data = [...(new Set(myNumbers))]

console.log(data);

// Functions 1

function sum(x,y){
    if(x === y){
        let sum = x *3;
        console.log(sum);
    }else{
        let sum = x + y;
        console.log(sum);
    }
}
sum(2,3)

// Functions 2

function check(x){
    if(x%7 === 0 || x%3 === 0 ){
        console.log("Given Number is Perfect Divisible");
    }else{
        console.log("Given Number is Not Perfect Divisible");
    }
}
check(49)

// callback function

function name(some){
    console.log(some); 
}

function display(x,y){
    let z = x + y;
    name(z)
}

display(3,3)

// Promises is something that is completed in future.
// It takes two parameters i.e state and result

// 1. If promise object is pending the result will be undefined
// 2. If promise object is fullfilled the result will be value
// 3. If promise object is rejected the result will be error


function promise(some){
    console.log(some);
}

let prom = new Promise((resolve,reject)=>{
    let x = 0;
    if(x == 1){
        resolve("succes")
    }else{  
        reject("denied")
    }
});

prom.then((value)=>{
    promise(value)
}).catch((error)=>{
    promise(error)
})

// Async await is used to perform asynchronous task. it is mainly used with promises.,
// when a long running task is needs to perform without blocking the main thread of execution then async await is used
// The async keyword is used before the function to make a function return a promise.,
// The await keyword is used to pause the execution till program resolve/reject the promise. 


  let api = async () => {
    let url = "https://jsonplaceholder.typicode.com/users";
    let data = await fetch(url);
    let x = await data.json();
    let y = x.map((e)=>{
        return `Name : ${e.name} , Email : ${e.email}` 
    })
    console.log(y);
  }

  api()

// In JavaScript, closure provides access to the outer scope of a function
// from inside the inner function, even after the outer function 
// has closed.

  function greet() {

    // variable defined outside the inner function
    let name = 'John';

    // inner function
    function displayName() {

        // accessing name variable
        return 'Hi' + ' ' + name;
      
    }

    return displayName;
}

const g1 = greet();
console.log(g1); // returns the function definition
console.log(g1()); // returns the value


// class is an template for objects
// constructor is used to create the objects
// super is used to call parent class

class Car{
    constructor(name,brand){
        this.name = name,
        this.brand = brand
    }

    get(){
        return `My car name is ${this.name} it's brand is ${this.brand}`
    }
}

class Bus extends Car{
    constructor(name,brand,age){
        super(name,brand);
        this.age = age
    }
    data(){
        return `${this.get()} and its age is ${this.age}`
    }

}

let vehicle = new Car("suv","tata")  // Here we created a new object
console.log(vehicle.get());

let bus = new Bus("Bus","BEST",60)   // Here we created a new object
console.log(bus.data());