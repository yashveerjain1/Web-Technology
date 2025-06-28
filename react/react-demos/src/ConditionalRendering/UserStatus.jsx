import React from 'react'
import { FaCartPlus } from 'react-icons/fa'

const UserStatus = () => {
  let loggedIn=true
  let isAdmin=true

  if(loggedIn && isAdmin){
    return(
        <div>
             <h1>Welcome Admin</h1>
            <FaCartPlus/>

        </div>
    )
  }

  if(loggedIn && !isAdmin)
  {
    return <h1>Welcome User </h1>
  }
}

export default UserStatus;