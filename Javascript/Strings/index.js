// creation of Strings
let myFirstString="Hello I Am a developer";
console.log(typeof(myFirstString));
console.log(myFirstString);

// let myFirstStrg='software';
// console.log(typeof(myFirstStrg));
// console.log(myFirstStrg);

// string interpolation
// myFirstStrg=`Hello I Am a ${myFirstStrg}  developer`;
// console.log(typeof(myFirstStrg));
// console.log(myFirstStrg);

// string concatenation
// let a="hello"
// let b="bhaiya"
// console.log(a+" "+b);
// console.log(myFirstString.concat(" of engineering"));

// ? .............................................string methods......................................................
console.log(myFirstString.length);

console.log(myFirstString.at(-2)); //at method work for the negative integers also 
console.log(myFirstString.charAt(0));
console.log(myFirstString.charCodeAt(0));//ascii value btata hai 
console.log(myFirstString.endsWith("re"));//string ki ending position kya hoti hai 
console.log(myFirstString.includes("hello"));//string k ander string present hai ki nhi yeh check krta hai 
console.log(myFirstString.indexOf("developer"));//first charactor check krta hai 
console.log(myFirstString.slice(0,5));
console.log(myFirstString.split(" "));
console.log(myFirstString.toUpperCase());
console.log(myFirstString.toLowerCase());
let n="2344";
console.log(typeof(parseInt(n)));
myFirstString=myFirstString.substring(0,10).concat(" Here");
console.log(myFirstString);
myFirstString=myFirstString.split(" ");
console.log(myFirstString);

console.log(myFirstString.join());



console.log(5<<3);
