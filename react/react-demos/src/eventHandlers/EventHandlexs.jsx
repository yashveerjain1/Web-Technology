import React from 'react'

const DontCopy=()=>{
    const copyHandler=()=>{
        alert("Warning Don't Stealing My Data!")
    }
    return (
        <p onCopy={copyHandler}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, deleniti sequi reprehenderit provident laboriosam quos vero, officiis quas laborum nam enim nulla illo non eligendi nisi! Modi et enim perferendis! 
        </p>
    )
}

const Move=()=>{
    const moveHandler=()=>{
        alert("Mouse Is Moved use Only Keyboard!")
    }
    return(
        <p onMouseMove={moveHandler}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, officia!</p>
    )
}
const Copy = () => {
  return (
    <div>
         <Move/>
        <DontCopy/>
    </div>
  )
}

export default Copy