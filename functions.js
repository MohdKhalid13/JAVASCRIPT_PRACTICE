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

async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
      setTimeout(function() {resolve("I love You !!");}, 3000);
    });
    document.getElementById("demo").innerHTML = await myPromise;
  }

   const display = async ()  =>{

    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let x = 0;
            if(x == 9){
                resolve("I love you")
            }else{
                reject("I Hate You")
            }
        },1000)
    })
    let sata = await promise
    console.log(sata);

  }

  display()

  let api = async () => {
    let url = "https://jsonplaceholder.typicode.com/users";
    let data = await fetch(url);
    let x = await data.json();
    let y = x.map((e)=>{
        return e.name
    })
    console.log(y);
  }

  api()