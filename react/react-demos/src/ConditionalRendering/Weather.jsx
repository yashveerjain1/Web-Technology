import React from 'react'
import { FaCartPlus } from 'react-icons/fa';


const Temp=()=>{
    let temp=3;
    if(temp<15)
        {
            return (
                <div>
                    <FaCartPlus/>
                    <h1 style={{color:"crimson"}}>It's Cold Outside</h1>
                </div>
            )
        }
        else if (temp >= 15 && temp <= 25) {
           return <h1 style={{color:"crimson"}}>It is Cool Whether</h1>
            
        }
        else{
           return  <h1 style={{color:"crimson"}}>It is hot Weather</h1>
        }
};

const Weather = () => {
  return (
    <div >
        <Temp />
    </div>
  )
}

export default Weather