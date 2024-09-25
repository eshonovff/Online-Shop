import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, Navigate, useParams } from "react-router-dom"
import { GetProductsbyId } from "../Api/products/product"
import { axiosRequest } from "../utils/axiosRequest"
const PageByid = () => {
  const dispatch = useDispatch()

  const {id}= useParams()
  useEffect(() => {
    dispatch(GetProductsbyId(id))
  }, [id, dispatch])

  const { data } = useSelector((state) => state.counterSlice);
  console.log(data); 
  console.log(import.meta.env.VITE_APP_FILE_URL + data?.data?.images);


  async function addToCart(id) {
    try {
      const data = await axiosRequest.post(`/Cart/add-product-to-cart?id=${id}`);
      console.log("addTOCART",data)
    } catch (error) {
      console.error(error);
    }
  }


     const  handleClick = (id) => {
      const token = localStorage.getItem("access_token")
      if(token){
        addToCart(id)
        
      }
      else{
        Navigate("/signIn")
      }

  }
  
  
   
   let [cnt , setCnt] = useState(1)
  return (
    <div>
       <h1 className="text-3xl m-10"> <Link to={"/"} className="text-red-500">Home</Link> <span>/Gaming/{data?.data?.productName}</span></h1>
        
    <div className="flex flex-wrap justify-center my-32 gap-10 items-start">
      <div className="flex flex-wrap gap-8 items-start min-w-[340px] max-md:max-w-full">
        <div className="flex flex-col w-[170px]">
          <div className="flex overflow-hidden flex-col justify-center px-4 py-3 max-w-full rounded bg-white w-[170px] max-md:px-5">
            <img
              loading="lazy"
              srcSet={import.meta.env.VITE_APP_FILE_URL + data?.data?.images[0]?.images}
              className="object-contain w-full aspect-[1.06]"
            />
          </div>
          <div className="flex overflow-hidden flex-col justify-center px-4 py-5 mt-4 max-w-full rounded bg-white w-[170px] max-md:px-5">
            <img
              loading="lazy"
              srcSet={import.meta.env.VITE_APP_FILE_URL + data?.data?.images[0]?.images}
              className="object-contain w-full aspect-[1.15]"
            />
          </div>
          <div className="flex overflow-hidden flex-col justify-center px-4 py-6 mt-4 max-w-full rounded bg-white w-[170px]">
            <img
              loading="lazy"
              srcSet={import.meta.env.VITE_APP_FILE_URL + data?.data?.images[0]?.images}
              className="object-contain w-full aspect-[1.43]"
            />
          </div>
          <div className="flex overflow-hidden flex-col justify-center px-4 py-4 mt-4 max-w-full rounded bg-white w-[170px] max-md:px-5">
            <img
              loading="lazy"
              srcSet={import.meta.env.VITE_APP_FILE_URL + data?.data?.images[0]?.images}
              className="object-contain w-full aspect-[1.15]"
            />
          </div>
        </div>
        <div className="flex overflow-hidden flex-col justify-center px-7 py-36 rounded bg-white min-w-[240px] w-[700px] max-md:px-5 max-md:py-24 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet={import.meta.env.VITE_APP_FILE_URL + data?.data?.images[0]?.images}
            className="object-contain w-full aspect-[1.42] max-md:max-w-full"
          />
        </div>
      </div>
      <div className="flex flex-col min-w-[240px] w-[400px]">
        <div className="flex flex-col w-full max-w-[400px]">
          <div className="text-2xl font-medium tracking-wider leading-none text-black">
          {data?.data?.productName}
          </div>
          <div className="flex gap-4 items-start self-start mt-5 text-sm">
            <div className="flex gap-2 items-start text-black">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c35d903ef32712f74f1d691c7776b06b738b9c9c861a4482d47d9f9e4b9b6d4a?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                className="object-contain shrink-0 aspect-[5] w-[100px]"
              />
              <div className="opacity-50">(150 Reviews)</div>
            </div>
            <div className="flex gap-4 items-center font-semibold text-green-500">
              <div className="shrink-0 self-stretch my-auto w-0 h-4 bg-black border border-black border-solid opacity-50" />
              <div className="self-stretch my-auto">{data?.data?.productInMyCart==true?"In Stock": "Out Stock"}</div>
            </div>
          </div>
          <div className="mt-5 text-2xl font-bold tracking-wider leading-none text-black">
            ${data?.data?.price}.00
          </div>
          <div className="mt-5 text-sm leading-5 text-black text-opacity-60">
            {data?.data?.description}
          </div>
          <div className="flex flex-col mt-5 w-full">
            <div className="shrink-0 h-px bg-black border border-black border-solid" />
          </div>
          <div className="flex gap-6 items-start self-start mt-5">
            <div className="text-xl tracking-wide leading-none text-black">
              Colours:
            </div>
            <div className="flex gap-2 items-start">
              <div className="flex flex-col w-5">
                <div className="flex flex-col justify-center items-center px-0.5 w-5 h-5 rounded-3xl border-2 border-black border-solid">
                  <div className="flex shrink-0 w-3 h-3 bg-indigo-300 rounded-xl" />
                </div>
              </div>
              <div className="flex shrink-0 w-5 h-5 bg-red-400 rounded-full fill-red-400" />
            </div>
          </div>
        </div>
        <div className="flex gap-6 items-center self-start mt-8 whitespace-nowrap">
          <div className="self-stretch my-auto text-xl tracking-wide leading-none text-black">
            Size:
          </div>
          <div className="flex gap-3 items-start self-stretch my-auto text-sm font-medium text-black min-w-[240px]">
            <div className="overflow-hidden px-3 pt-1.5 pb-4 w-10 rounded border border-solid border-black border-opacity-50">
              XS
            </div>
            <div className="overflow-hidden px-4 pt-1.5 pb-4 w-10 rounded border border-solid border-black border-opacity-50">
              S
            </div>
            <div className="overflow-hidden px-3.5 pt-1.5 pb-4 w-10 bg-red-500 rounded text-neutral-50">
              M
            </div>
            <div className="overflow-hidden px-4 pt-1.5 pb-4 w-10 rounded border border-solid border-black border-opacity-50">
              L
            </div>
            <div className="overflow-hidden px-3 pt-1.5 pb-4 w-10 rounded border border-solid border-black border-opacity-50">
              XL
            </div>
          </div>
        </div>
        <div className="flex gap-5 items-center mt-8 font-medium">
          <div className="flex gap-0 items-start self-stretch my-auto text-xl leading-snug text-black whitespace-nowrap min-h-[44px] w-[159px]">
            <img
              loading="lazy"
              onClick={()=> setCnt(cnt-1)}
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed9ed51dc91da1a317a6ec57e005b4e5f8a1b0bff1721c29819dbbc2af1e9ae3?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
              className="object-contain shrink-0 w-10 rounded aspect-[0.91]"
            />
            <div className="overflow-hidden px-4 py-2 w-20 border-t border-b border-black border-opacity-50 max-md:px-5">
              {cnt}
            </div>
            <img
              loading="lazy"
              onClick={()=> setCnt(cnt+1)}
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a09c076caa5a0aa0236a51fa2801afde79e8017a579e89aa6abb403c0af33200?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
              className="object-contain shrink-0 aspect-[0.93] w-[41px]"
            />
          </div>
          <div onClick={()=> handleClick(id)}  className="gap-2.5 self-stretch px-12 py-2.5 my-auto text-base bg-red-500 rounded text-neutral-50 max-md:px-5">
            Buy Now
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/96b388edb85323f98c8e7e985856939fb1e202a7b2c62362d9367fbfb2293b30?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
            className="object-contain shrink-0 self-stretch my-auto w-10 rounded aspect-square"
          />
        </div>
        <div className="flex overflow-hidden flex-col py-5 mt-8 w-full rounded border border-solid border-black border-opacity-50 max-w-[399px]">
          <div className="flex gap-4 items-center px-5 w-full font-medium">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfa522da2d574193363b6a38c8d2df4302a58b3a76df0f3aea6065c7e09d80cd?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
              className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
            />
            <div className="flex flex-col self-stretch my-auto min-w-[240px]">
              <div className="text-base text-black">Free Delivery</div>
              <div className="mt-1 text-xs text-black">
                Enter your postal code for Delivery Availability
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-5 w-full rotate-[-2.4492937051703357e-16rad]">
            <div className="shrink-0 h-px bg-black border border-black border-solid" />
          </div>
          <div className="flex gap-4 items-center px-5 mt-5 w-full font-medium text-black">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/741908bf78860f9d53b3bd8c16453c5b003937697b4c020652f43bbe8942fb48?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
              className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
            />
            <div className="flex flex-col self-stretch my-auto">
              <div className="text-base">Return Delivery</div>
              <div className="mt-1 text-xs leading-5 underline">
                Free 30 Days Delivery Returns.{" "}
                <span className="underline">Details</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default PageByid





 
