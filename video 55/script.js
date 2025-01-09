console.log("hey i am video 55")

var a = 5; // var makes the variables as global variables
var b = 6;
var c = "Kanish";

console.log(a+b+8)
console.log(typeof a, typeof b, typeof c)

const a1 = 6;  //constant variable
// a1 = a1+6; not allowed

console.log(a)
{
    let a = 100;  // Variables declared by let are only available inside the block where they're defined
    console.log(a)
}
console.log(a)

let x = "Kanish Mittal"
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)

//creating an object in js
let o = {
    name: "Kanish Mittal", // key:value
    "job code": 1051, // job code is written in "" since it has space in between, other it could have been writen like name without ""
    "is-handsome": true
}
console.log(o);
o.salary = "50lpa";
console.log(o);
o.salary = "60lpa";
console.log(o);