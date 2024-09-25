import { Link } from "react-router-dom"

 

const Checkout = () => {
  return (
    <div>
          <h1 className="text-3xl m-10"> <Link to={"/"} className="text-red-500">Product</Link> <Link to={"/cart"}>/View Cart</Link> <span>/CheckOut</span></h1>
      
    </div>
  )
}

export default Checkout
