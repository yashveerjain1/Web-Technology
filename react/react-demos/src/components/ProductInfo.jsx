const ProductInfo = () => {
  const Product = [
    {
      name: "Laptop",
      price: 50000,
      availability: "in stock",
    },
    {
      name: "Phone",
      price: 24500,
      availability: "in stock",
    },
    {
      name: "Headphone",
      price: 5000,
      availability: "in stock",
    },
  ];
  return (
    <div>
      {
        Product.map(user=>(
          <ul key={Math.random()}>
            <li>{user.name}</li>
            <li>{user.price}</li>
            <li>{user.availability}</li>

          </ul>
        ))
    }
    </div>
  );
};

export default ProductInfo;
