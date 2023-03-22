// functions to print largest or smallest number from an array

var arr1 = [1,2,3,4,5,8,6,99,8,44]

var a = arr1.reduce((x,y)=>{
    return (x > y) ? x : y
})

console.log(a);

// functions to print largest or smallest string from an array

var arr2=["Raj","Maithily","Aditya","Vinod","Omkar","Jinal","Shailendra"];

var b = arr2.sort((x,y) => {
    return (y.length - x.length)

} )[0]

console.log(b);

// function to exclude a number from particular range

function hello(x,y,z){
    for(let i=x ; i<=y ; i++){
        z.includes(i) ? "Hello" : console.log("data",i)
    }
}
hello(1,10,[11])

// function to print duplicates from an array

let num = [1,1,3,4,5,5,6,7,8,8,9]

let num1 = num.filter((x,y)=>{
  return  num.indexOf(x) === y
})

console.log(num1);

// print first name and last name from array of object

const users = [
    {
      first_name: 'Mike',
      last_name: 'Sheridan'
    },
    {
      first_name: 'Tim',
      last_name: 'Lee'
    },
    {
      first_name: 'John',
      last_name: 'Carte'
    }
  ];

  let abc = users.map((e)=>{
    return e.first_name + " " + e.last_name
  })

  console.log(abc);

