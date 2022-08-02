// let newArray = [1,2,3,1,3];
// let newSet = new Set(newArray);

// console.log(newSet); this is for sets and sets are gay

let set1 = ["red", "blue", "orange"];

set1.pop();
let value1 = set1.pop();
//console.log(value1)
//blue
//console.log(set1)
//["red"]

set1.push("purple");
let value2 = set1.push("green");

//console.log(set1)
//[ 'red', 'purple', 'green' ]
//console.log(value2)
//3

set1.shift();
let value3 = set1.shift();
//console.log(set1);
//[ 'green' ]
//console.log(value3);
//purple


set1.push("Yellow", "Purple");
//console.log(set1);
//[ 'green', 'Yellow', 'Purple' ]

let value4 = set1.unshift("Cyan");
//console.log(set1);
//[ 'Cyan', 'green', 'Yellow', 'Purple' ]
//console.log(value4);
//4

//access element via brackets
set1[1] = "Teal";
//console.log(set1);
//[ 'Cyan', 'Teal', 'Yellow', 'Purple' ]

set1.unshift("Orange");
//console.log(set1);
//[ 'Orange', 'Cyan', 'Teal', 'Yellow', 'Purple' ]
