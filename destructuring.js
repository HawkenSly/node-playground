const obj = {a: 1, b: 2};

const {a, b} = obj;

//console.log(a);
//1
//console.log(b);
//2

//so what's happening here is that I'm creating the (a) variable by destructuring it from the obj object. So instead of (obj.a), I can simply use (a)
//this saves space and makes code easier to manage