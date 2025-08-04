
import { useState , useEffect } from "react";
import ProductList from "./components/productList/product-list";
import AddProduct from "./components/Addproduct/Addproduct";
function App() {
  useEffect(() => {
    
    const sendRequest = async () => {
      const response = await fetch('http://localhost:8000/products')

      const responseDATA = await response.json()

      setproduct(responseDATA)

    }
    sendRequest()
    
  } , [])


  const [products , setproduct] = useState([])

  const addProduct = async (title) => {

   const response = await fetch('http://localhost:8000/products' , {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(title),
    })

    const responseData = await response.json();


    setproduct([...products , responseData])
    
  }


  const deletproduct = async (id) => {

    await fetch(`http://localhost:8000/products/${id}` ,{
      method: 'DELETE'
    })

    setproduct(products.filter((item) => item.id !== id))
  }

  return (
    <div>
      <AddProduct onAdd={addProduct} />
< ProductList products={products} onDelete={deletproduct} />
    </div>
  );
}

export default App;
