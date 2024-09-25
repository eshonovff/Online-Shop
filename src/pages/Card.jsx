import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {  deleteAllProducts, deleteTodo, getProductsCart, increaseProductQuantity, reduceProductQuatity } from "../Api/products/product";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";


 
const Card = () => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);
  const { cart, } = useSelector((state) => state.counterSlice);
 
 
    useEffect(() => {
      dispatch(getProductsCart());
    }, []);
    
    useEffect(() =>
    {
      if(cart?.length>0){
        const total = cart.reduce((acc, crr) =>{
         return  acc + (+crr.product.price) * (+crr.quantity)
        },0)
        setPrice(total)
        
      }
    } , [cart])
 
  
   
  return (
    <div className="px-[10%] mb-[15%]"> 
        <h1 className="text-3xl m-10"> <Link to={"/"} className="text-red-500">Home</Link> <span>/Cart</span></h1>


        <div className="flex flex-col mb-[10%] text-base">
      <div className="flex overflow-hidden flex-wrap gap-10 justify-between items-start px-8 w-full whitespace-nowrap rounded text-black text-opacity-60 max-md:px-5 max-md:max-w-full">
        <div className="w-60">Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div className="w-[125px]">Subtotal</div>
      </div>
      {cart.map((elem)=>{
        return (
        <div key={elem.id} className="flex flex-col mt-6 w-full text-black max-md:max-w-full">
        <div className="flex overflow-hidden flex-wrap gap-10 justify-between items-center px-8 py-5 w-full bg-white rounded shadow-sm max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 items-center self-stretch my-auto w-60 text-black">
            <img
              loading="lazy"
              src={import.meta.env.VITE_APP_FILE_URL + elem.product.image}
              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[54px]"
            />
            <div className="self-stretch my-auto">{elem.product.productName}</div>
          </div>
          <div className="self-stretch my-auto">${elem.product.price}</div>
          <div className="flex justify-center items-center">
          <h1 className="mr-5">{elem.quantity}</h1>
          <div className="flex flex-col">
          <Button onClick={()=>dispatch(increaseProductQuantity(elem.id))} sx={{backgroundColor:"white" , '&:hover':{backgroundColor:'green'}}}  className='text-green-700 border-green-700 font-[700] px-1 rounded-full hover:bg-[green]'>+</Button>

            <Button onClick={()=>dispatch(reduceProductQuatity(elem.id))} className="text-red-700 font-[700] border-red-700 px-1 rounded-full hover:bg-slate-200">- </Button>
          </div>
          </div>
          <div className="flex gap-10 items-center self-stretch my-auto font-semibold whitespace-nowrap">
            <div className="self-stretch my-auto">${+(elem.product.price) * (elem.quantity)}</div>
            <img
              loading="lazy"
              onClick={() => dispatch(deleteTodo(elem.id))}
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ee4f09f98513ff78ba8f7438116c49fe29359f2ec6e69d898ec61167baf9e61?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
          </div>
        </div>
     
      </div>
        )
      })}
      <div className="flex flex-wrap gap-10 justify-between items-start pt-5 mt-6 w-full font-medium max-md:max-w-full">
        <button className="gap-2.5 self-stretch px-12 py-4 text-black rounded border border-solid border-black border-opacity-50 max-md:px-5">
          Return To Shop
        </button>
        <div className="flex gap-3 items-start min-w-[240px]">
          <button className="gap-2.5 self-stretch px-12 py-4 text-black rounded border border-solid border-black border-opacity-50 max-md:px-5">
            Update Cart
          </button>
          <button  onClick={() => dispatch(deleteAllProducts())}  className="gap-2.5 self-stretch px-12 py-4  text-red-500 rounded border hover:border-red-800  border-red-500 border-solid max-md:px-5">
            Remove all 
          </button>
        </div>
      </div>
    </div>

    <div className="flex flex-wrap gap-10 justify-between items-start">
      <div className="flex gap-4 items-end text-base min-w-[240px] max-md:max-w-full">
        <div className="flex overflow-hidden flex-col justify-center items-start px-6 py-4 text-black rounded border border-black border-solid min-w-[240px] w-[300px] max-md:px-5">
          <input type="text" placeholder="Enter coupon code" className="w-full outline-none bg-transparent" />
        </div>
        <div className="gap-2.5 self-stretch px-12 py-4 font-medium text-red-500 whitespace-nowrap rounded border border-red-500 border-solid max-md:px-5">
          Apply
        </div>
      </div>  
      <div className="flex overflow-hidden flex-col items-center px-6 py-5 rounded border-2 border-black border-solid min-w-[240px] w-[468px] max-md:px-5 max-md:max-w-full">
        <div className="self-stretch text-xl font-medium leading-snug text-black max-md:max-w-full">
          Cart Total
        </div>
        <div className="flex gap-10 items-start mt-5 text-base text-black whitespace-nowrap max-md:max-w-full">
          <div>Subtotal:</div>
          <div>${price}</div>
        </div>
        <div className="flex gap-10 items-start mt-5 text-base text-black whitespace-nowrap max-md:max-w-full">
          <div>Shipping:</div>
          <div>Free</div>
        </div>
        <div className="flex flex-col mt-5 max-w-full rotate-[8.742277657347563e-8rad] w-[422px]">
          <div className="z-10 shrink-0 h-px bg-black border border-black border-solid max-md:max-w-full" />
        </div>
        <div className="flex gap-10 justify-between items-start mt-5 max-w-full text-xl font-semibold leading-tight text-black whitespace-nowrap w-[424px]">
          <div>Total:</div>
          <div>${price}</div>
        </div>
        <Link to="/checkout"  className="gap-2.5 self-stretch px-12 py-4 mt-5 text-base font-medium bg-red-500 rounded text-neutral-50 max-md:px-5">
          Procees to checkout
        </Link >
      </div>
    </div>
 
    </div>
  )
}

export default Card
 

 

 