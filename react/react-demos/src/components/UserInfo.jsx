import React from 'react'


const UserInfo = () => {
    const userInfo=[
        {
            name:"Sukoon",
            age:"13",
            email:"S@gmail.com"
        },
        {
            name:"huxn",
            age:"23",
            email:"S@gmail.com"
        },
        {
            name:"chai or code",
            age:"32",
            email:"S@gmail.com"
        },
        {
            name:"love babber",
            age:"76",
            email:"S@gmail.com"
        },
    ]
  return (
    <div>
       {

        //destructing the property there 
        userInfo.map(({name,email,age}) =>(
            <ul key={Math.random()}>
                <li>{name}</li>
                <li>{email}</li>
                <li>{age}</li>

            </ul>
        ))
    }
    
       
    </div>
  )
}

export default UserInfo