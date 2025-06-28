import React from 'react'

const StyledCard = () => {
  return (
    <div style={{backgroundColor:"lightblue", padding:"20px", border:"10px"}}>
        <h1>Title</h1>
        <br />
        <p onCopy={console.log("Don't Steal My Details")}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, voluptatem soluta mollitia tempora dolorem earum facilis veritatis inventore architecto magnam recusandae voluptas? Quibusdam odit itaque voluptatum nulla ducimus laboriosam sequi!</p>

    </div>
  )
}

export default StyledCard