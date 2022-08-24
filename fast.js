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
for (let i = 0; i < arg.length; i++) {
glue.push(arg[i].toUpperCase());
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


let array55 = ["hi", "hi", "hello"];
//console.log(array55.length)

let array11 = [5, 77, 32, 4] 

//console.log(Math.min(...array11))
//10


let vartest = [];
//console.log(vartest.length);
//0


function find_average(array) {
  let average = 0;
  let size = array.length;
  let value = 0;
  for (let x of array) {
    average += array[x];
  }
  value = (average / size);
  return value;
}

//console.log(find_average([3, 4, 3]));

let value12 = "testing";
//console.log(value12.endsWith("ing"));
//true

// console.log(`I am ${value12} out ecmascript
// features`);

// I am testing out ecmascript
// features