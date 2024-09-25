 
import { useSelector } from "react-redux"
import { setWishList } from "../reducer/TodoList";
 

 
const Wishlist = () => {
  const {wishlist } = useSelector(    (state) => state.counterSlice)
  console.log("add",wishlist);
  console.log(wishlist);
  
const removeWish = (id) => {
  const wishlist = wishlist.filter((elem) => elem.id !== id);
  setWishList(wishlist);
  
};
  return (
    <div className="ml-[7%] my-[20%]">
    <h1 className=" text-[20px]">Wishlist ({wishlist.length})</h1>
           <div className="flex flex-wrap gap-10">
            {wishlist.map((elem, index) => {
           
                if(typeof elem == 'object'){
                  return (   <div key={elem.id} className="flex flex-col max-w-[270px]">
                  <div className="flex overflow-hidden flex-col pt-3 w-full rounded bg-white">
                    <div className="flex flex-col self-end w-[34px]">
                      <img
                      onClick={() => removeWish(index)}
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d9345dad452b03692cdbc613f709d144e723e1bbf5357d91182186f1925be37?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                        className="object-contain w-full aspect-square"
                      />
                    </div>
                    <img
                      loading="lazy"
                      src={import.meta.env.VITE_APP_FILE_URL +elem.image}
                      className="object-contain self-center mt-5 aspect-[2] w-full "
                    />
                    <div className="flex flex-col justify-center items-center px-16 py-2.5 mt-12 w-full text-xs text-white bg-black rounded-none">
                      <div className="flex gap-2 items-center">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e462325802d0556992aa0397efea5256f6fd0a6001162dca8b6d920936baee1?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                        />
                        <div className="self-stretch my-auto">Add To Cart</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col self-start mt-4 text-base font-medium">
                    <div className="text-black">{elem.productName}</div>
                    <div className="gap-3 self-start mt-2 text-red-500 whitespace-nowrap">
                      $1960
                    </div>
                  </div>
                </div>
                  )
                }
               

              
            })}
              
           </div>
    
    </div>
  )
}

export default Wishlist

 

 