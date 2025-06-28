
// Array methods

// // Concat Method
// let arr1=["c","c++","java"]

// var concatedarray=arr1.concat(arr2)
// console.log(concatedarray);

// // Copywithin method
// // 3 things hoti hai start,target, and end
// let arr2=["Html","javascript","Android","C"]
// var CopywithinArray=arr2.copyWithin(0,1,3)
// console.log(CopywithinArray);

// entries method
// let arr2=["Html","javascript","Android","C"]
// var entriesArray=arr2.entries();

// //! we use loop because it makes it as a object 
// for(value of entriesArray){

//     console.log(value);

// }


// // every method()
// let arr=[51,43,55,18]
// function check(value){
//     return value>30;
    
// }
// console.log(arr.every(check));


// // Flat Method()
// let arr=[[2,3,4,5],[5,6,6,7]];
// console.log(arr.flat());


// // flat map method
// let arr1=[2,4,6,8];
// let flatmappedArray=arr1.flatMap(x=>[x/2]);
// console.log(flatmappedArray);


// // fill() method
// let arr=["html","c",":css"];

// let res=arr.fill("js",1,3);
// console.log(res);


// // from()method
// console.log(Array.from("abs"));


// // filter method
// let arr=[2,3,4,5]
// function divisibleBy2 (value){
//     return value>3;
// }
// let res=arr.filter(divisibleBy2);
// console.log(res);


// // find() method 
// let arr=[2,3,4,5]
// let res=arr.find(value=>value>3);
// console.log(res);

// // findIndex()method
// let arr=[2,3,4,5]
// let res=arr.findIndex(value=>value>3);
// console.log(res);


// // for each method
// let arr=[1,4,5,6,7,8,9,23,45,66,67];
// arr.forEach(function(fetch){
//     console.log(fetch+10)
// });


//includes ()method 

// let arr=["C","C++","python","java"]
// console.log(arr.includes("C"));

// // indexof()method
// let arr=["C","C++","python","java"]
// console.log(arr.indexOf("C"))

// // isArray () method 
// let arr=["c","python","Java"];
// console.log(Array.isArray([1,2,233]));
 


// // join() method

// let arr=["c","python","Java"];
// console.log(arr.join("@"));



// // keys() method 
// let arr=["c","python","Java","c"]
// let keyValuedArray=arr.keys();
// for(value of keyValuedArray){
// console.log(value);
// }


// // lastIndexof() method
// let arr=["c","python","Java","c"]
// console.log(arr.lastIndexOf("c"));


// // map () method
// let arr2=[50,55,60,65,70,80]

// let mappedArray=arr2.map(x=>x/5)
// console.log(mappedArray);



// of () method 
// console.log("Array Generated using of():"+Array.of(1,2,3,"hello",6,7));


// pop() & push(),reverse()
// let a=[2,3,4,"Hello" ,3,1];
// a.push("World");
// a.push(1);
// a.pop();
// console.log(a);

// let b=[2,3,4,5,6,6,7]
// console.log(a.reverse());


// reduce() method ->accumulator(hold the previous value), current value(for ne w value)
//  let c=[4,2,9,1]
//  let as=c.reduce(function(accumulator,currentValue){
//     return accumulator-currentValue;
//  })
// console.log(as);

// some() method 
// let a=[2,34,5,6]
// function test(argument){
//     return argument>32;
// }
// let res=a.some(test)
// console.log(res);



// // shift () method 

// let a=[2,34,5,6]
// a.shift();
// console.log(a);


// // slice()method 
// let a=[1,2,33,4,4,5,5,6,67,6];
// let b=a.slice(4)
// console.log(b);
// console.log(a);


// // sort () method 
// let a=[2,4,5,6,7,8,1];
// a.sort();
// console.log(a);


// splice()method 

// let b=[12,32,4,4,5];
// b.splice(1,0,5);
// console.log(b);

// b.splice(2,2,102);
// console.log(b);


// // toLocaleString() method  & toString( )method 
// let a=[1,23,4,5];
// a.toLocaleString();
// console.log(typeof(a[0]));

// a.toString()
// console.log(typeof(a[0]));



// // unshift() method 
// let a=[2,34,5,56];
// a.unshift(1,7);
// console.log(a);


// values()  methods

let weekdays=["Mon","tues","wed","thrus","Friday"];
let weeks=weekdays.values();
for(item of weeks){
    console.log(item)
    
}
console.log(weeks);


 