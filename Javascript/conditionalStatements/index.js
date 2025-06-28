// // if statement

// if(true){
//     console.log("hello User!");

// }

// // if/else statement
// let day=6
// if(day=1){
//     console.log("Today is Monday");
// }
// else if(day=2){
//     console.log("Today is Tuesday");
// }
// else if(day=3){
//     console.log("Today is Wednesday");
// }
// else if(day=4){
//     console.log("Today is Thrusday");
// }
// else if(day=5){
//     console.log("Today is Friday");
// }
// else if(day=6){
//     console.log("Today is Saturday");
// }
// else if(day=7){
//     console.log("Today is Sunday");

// }
// else{
//     console.log("enter Valid day number");

// }

// // switch statement:it alwaysy use strict statement


// let marks='A';

// switch (marks) {
//     case 'A':
//         console.log("student get has secured A grade");
//         break;
//     case 'B':
//         console.log("student has secured B grade ");
//         break;
//     case 'f':
//         console.log("sorry you are failed! Better luck next year");
//         break;

//     default:
//         console.log("Just passed");

//         break;
// }

// ?Write a js Program to display todays :"day"
// !the getDay() is a method returns the week day as  anumber between 0 &6

switch (new Date().getDay()) {
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thrusday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
  case 0:
    console.log("Today is Sunday");
    break;

}
