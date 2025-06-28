// for-loop
    // for(let i=0;i<=10;i++){
    //     console.log(i);
    // }
    // console.log("\n")
// while loop
    // let a=0;
    // while(a<=10){
        
    //     console.log(a);
    //     a++;        
    // }

// do-while
// let a=0;
//     do {
//         console.log(a);
//         a++;
//     } while (a<10);
   

// for-in-loop
    // !it is used for the objects\
    // let temp=""
    // let person={
    //     firstName:"Deo",
    //     lastname:"John",
    //     age:23
    // }
    // for(value in person){
    //     console.log(value);
    //     console.log(person[value]);
    // }
    

// for-of loop
    // it is used for the Array and Object

    // ?through objects 
    // let person={
    //         firstName:"Deo",
    //         lastname:"John",
    //         age:23
    //     }
    // ?we cannot use this at this place
        // for(value of person){
        //     console.log(person[value]);
            
        // }


    // ?through array 
        let person=["john","deo",28]
         for(value of person){
            console.log(value);
            
        }
        // !for in loop use at array it not give you a error it gives you indexes of array
        for(value in person){
            console.log(person[value]);   
        }

