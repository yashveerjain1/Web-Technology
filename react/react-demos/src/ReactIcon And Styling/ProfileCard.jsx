import React from 'react'
import { FaBeerMugEmpty } from "react-icons/fa6";
const Styles={
backgroundColor:"lightgray", padding:"15px", border:"5px solid black", color:"Blue", borderRadius:"50px" ,margin:"10px"
}

const ProfileCard = () => {
  return (
    <div style={Styles}>
        
        <h1 style={{textAlign:"right"}}><FaBeerMugEmpty style={{font:"30px", color:"gold", textAlign:"center"}} /> Your Name</h1>
        <br />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, ducimus placeat. Soluta amet incidunt doloremque eum consequuntur optio, similique cum architecto quae, molestias officiis, laborum earum! Suscipit fugiat dolorem dicta!</p>
        </div>
  )
}

export default ProfileCard