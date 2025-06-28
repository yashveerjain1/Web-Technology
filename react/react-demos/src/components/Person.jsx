import React from 'react'

const Person = () => {
  return (
    <PersonInfo  
        name="Kamina"
        age={23}
    />
    
  )
}
const PersonInfo=(({name,age})=>{
     return <section>
        <h1>PersonName:{name}</h1>
        <p>PersonAge:{age}</p>
     </section>
})
export default Person