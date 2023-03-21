// SetInterval Call After Every Interval.

setInterval(()=>{
    let a = new Date();
    let b = a.toLocaleString();
    console.log(b);
},1000)

// With the call() method, you can write a method that can be used on different objects. 

const person = {

    fullname : function(country,city){
        return this.firstname + " " + this.lastname + " " + country + " " + city ;
    }
}

const person1 =  {
    firstname : "Mohd Khalid",
    lastname : "Mansuri"
}

const person2 =  {
    firstname : "Mohd Anas",
    lastname : "Mansuri"
}

const person3 =  {
    firstname : "Mohd Hamza",
    lastname : "Mansuri"
}

console.log(person.fullname.call(person1,"india","mumbai"));   // call - In call Method Takes Arguments Separately. 

console.log(person.fullname.apply(person2,["india","mumbai"]));  // Apply - In Apply Method Takes Arguments in an Array.  

let Data = person.fullname.bind(person3,"india","mumbai");

console.log(Data());  // Bind  - With the bind() method, an object can borrow a method from another object.


// function to exclude a number from particular range

function hello(x,y,z){
    for(let i=x ; i<=y ; i++){
        z.includes(i) ? "Hello" : console.log("data",i)
    }
}
hello(1,10,[11])

// 
