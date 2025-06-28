const Greet = () => {
  const name= "Yash"
  const date=new Date;
  return (
    <div>
      <h1>{name}</h1>
      <p>{date.getDate()}</p>
    </div>
  )
}

export default Greet