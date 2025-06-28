// let   object1={
//     a:1,
//     b:2,
//     c:3,
// }
// let  object2={
//     d:4,
//     e:5,
//     f:6,
// }

// // Objects.assign methods 
// let  object3=Object.assign(object1,{name:"First Object",d:5});
// console.log(object3);




// function fruit(){
//     this.name="Oranges";
// }

// function fun(){
//     fruit.call(this);
// }

// // Object.create methods
// fun.prototype=Object.create(fruit.prototype);
// const app=new fun();
// console.log(app);




// // Object.freeze method
// const object1={
//     age:23
// }
// const object2=Object.freeze(object1);
// object2.age=32;
// console.log(object2);



// // Object.is( )method
// let Object1 = {};
// let Object2 = {};
// console.log(Object.is(Object1, Object2));

// // But if we do:
// let Object3 = Object1;
// console.log(Object.is(Object1, Object3)); 

// let Object4 = {
//     age:12,
//     name:"Hello"
// };
// let Object5 = {
//     age:12
// };
// console.log(Object.is(Object4.age, Object5.age));



// // object.isExtensible()method it checks whether we can add properties in it or not 
// const object1={

// }
// // Object.freeze(object1)
// console.log(Object.isExtensible(object1));



// // object.isfrozen()method determines if an object is frozen. A frozen object means it cannot be modified in any way—its properties cannot be added, deleted, or changed, and its prototype cannot be modified. Essentially, a frozen object is immutable.

// const object1={
//    age:20
// }
// Object.freeze(object1)
// console.log(Object.isFrozen(object1));

// object1.name="hello"
// console.log(object1.name);
// console.log(object1);



// // Object.seal()method and isSealed ()method
// const object1={
//     name:"abc"

// }
// const object2=Object.seal(object1);
// object2.name="def"
// console.log(object2.name);
// delete object2.name
// console.log(object2.name);

// console.log(Object.isSealed(object2));



// object.value( )method
const object1={
    a:"abc",
    b:23,
    c:true
}
console.log(Object.values(object1));
