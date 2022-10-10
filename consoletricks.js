let var1 = ["Hello", "There"];
let var2 = {name: "var", place: "here"};

console.log({var1});
console.log({var2});

console.table(var1);
//creates a table in the console listing the values in the array as well as their index!

console.table(var2);
//creates a table in the console listing the elements in an object. "index" refers to each element's name.

console.dir("test");
//This one only works in the browser, not nodejs