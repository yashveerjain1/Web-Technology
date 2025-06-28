// ! props/properties are the arguments passed into react component
// ! props allows us to pass data parent component to a child component
// ! Props are passed to components via HTMl attributes

/*
        const App=()=>{
            return {


            <user
            img="//path"
            name="xyz"
            age={122334}
            isMarried={false/true}
            hobbies=["coding","Reading","Sleeping"]
            />            
            }            
            }



            // calling from the parent components throught the parent component 
            const User=(props)=>{

                return {
                    <section>
                        <img src={props.img} alt={props.name} width={200}/>
                        h1 name:{props.name}
                    </section>
                
                }
                
                
                }


                Now let understand with real example 


*/


    const Props=()=>{
        return<User 
            name="Xyxzz"
            isMarried={false}
            age={23}
                   
        />


    }

    const User=(props)=>{
        return   <section>
            <h1>Name:{props.name}</h1>
            <h1>age:{props.age}</h1>
            <h1>isMarried:{props.isMarried}</h1>

        </section>
       
    }


    export default Props;