// import React from "react";
// const ValidPassword = () => <h1>Valid Password</h1>;
// const InValidPassword = () => <h1>InValid Password</h1>;

// const Password = ({isValid}) => {
//     return isValid ? <ValidPassword/> :<InValidPassword/>;
// };
// const ConditionalRendering = () => {
//   return (
//     <section>
//       <Password isValid={false} />
//     </section>
//   );
// };

// export default ConditionalRendering;




// another example 

import React from 'react'

const Cart=()=>{
    const Items=["maggie","coldDrinks","Phones","laptop","pens"];
    return <div>
    <h1 > Cart🛒🛒 </h1>
    {
        Items.length>0 && <h2>You Have {Items.length} items in your Cart</h2>
    }
    <ul>
        <li>Products </li>
    </ul>
    {
        Items.map(item=>(
            <li key={Math.random()}>{item}</li>
        ))
    }
    
</div>
   
}

const ConditionalRendering = () => {
  return (
    <div>
        <Cart />
    </div>
  )
}

export default ConditionalRendering