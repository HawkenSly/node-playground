let test = ["hello", "GOODBYE"];

//console.log(test[0].toUpperCase());
//HELLO
//console.log(test[1].toLowerCase());
//goodbye


let array1 = ['a', 'b', 'c'];
let array2 = ['d', 'e', 'f'];
let greeting = "Hello!";

let array3 = array1.concat(array2);


function upperCaseArray(arg) {
    let glue = [];
if (Array.isArray(arg)) {
for (let i = 1; (arg.length + 1) > i; i++) {
glue.push(arg[i - 1].toUpperCase());
}
  return glue;
}
  else {
  return "not an array!"}
}

//console.log(upperCaseArray(array3))
//[ 'A', 'B', 'C', 'D', 'E', 'F' ]
//console.log(upperCaseArray(greeting))
//not an array!
//console.log(upperCaseArray(test));
//[ 'HELLO', 'GOODBYE' ]
//console.log(greeting.toLowerCase());
//hello!

let value1 = "hello there!"
//console.log(value1.substring(0,5));
//hello
//console.log(value1.substring(6))
//there!
//argument 1 is starting position, argument 2 is end position

let value2 = [];
let value3 = [];
//console.log(Array.isArray(value2, value3));
//true

value1.toUpperCase();
//console.log(value1);
//hello there!

array1.join(" ");
//console.log(array1);
//[ 'a', 'b', 'c' ]

let value4 = "Hello there my friend!"
let array4 = value4.split(" ");
//console.log(array4);
//[ 'Hello', 'there', 'my', 'friend!' ]
let array5 = value4.split(" ", 2);
//console.log(array5);
//[ 'Hello', 'there' ]


let array6 = value4.slice(0,6);
//console.log(array6);
//Hello