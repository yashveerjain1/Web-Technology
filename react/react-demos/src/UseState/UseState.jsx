import { use } from "react";
import { useState } from "react";
import React from 'react'

const UseState = () => {
    const [friends,setFriends]= useState(["Alexa","Prince","Yash"])


    const addOneFriend=()=>{
        setFriends([...friends,"Aashish"])
    }
    const RemoveOneFriend=()=> setFriends(friends.filter((f)=> f!=='Alexa'))

    // const [count,setCount]=useState(0);
    // const increment=()=>{
    //     setCount(count+1);
    // }
    // const decrement=()=>setCount(count-1);
  return (
    <div>
    {
        friends.map((f)=>(
            <li key={Math.random()}>{f}</li>
        ))
    }
    <button onClick={addOneFriend}>Add new Friend</button>
    <button onClick={RemoveOneFriend}>Remove Friend</button>

        {/* <h1>{
            count
            }
        </h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button> */}
    </div>
  )
}

export default UseState