import { Link } from "react-router-dom"

 

const Section3 = ({id, productName, price, quantity, image,}) => {
  return (
    <div>
            <div key={id}>
              <div className="flex flex-col max-w-[270px]">
                <div className=" card flex overflow-hidden gap-1 items-start px-3 pt-3 pb-12 w-full rounded bg-white relative">
                  <div className="flex flex-col text-xs whitespace-nowrap text-neutral-50">
                    <div className="gap-2.5 self-start px-3 py-1 bg-red-500 rounded">
                      -40%
                    </div>
                    <img
                      loading="lazy"
                      srcSet={image}
                      className="object-contain self-end mt-3 max-w-[200px] aspect-[1.13] w-full"
                    />
                  </div>

       <Link to={`/productbyID/${id}`}>
                  <div className="flex flex-col">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/00d93adab53c5214ab1a164999c542db25c2e68622e0085e7c9140fbeae9a9e5?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                      className="object-contain aspect-square w-[34px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/92f95af307a693492ef165c4482565d88008392560df9e3855fc15ed6903d028?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                      className="object-contain mt-2 aspect-square w-[34px]"
                    />
                  </div>
                    </Link>

                    <button   className="buttonCard w-[100%] h-[5svh] text-white text-[20px] rounded-md bg-black absolute bottom-0 right-0 hidden">Add To Card</button>
                </div>



                <div className="flex flex-col items-start self-start mt-4 text-base font-medium">
                  <div className="self-stretch text-black">
                    {productName}
                  </div>
                  <div className="flex gap-3 items-start mt-2 whitespace-nowrap">
                    <div className="text-red-500">${price}</div>
                    <div className="text-black opacity-50 line-through">
                      ${price * 1.4}
                    </div>
                  </div>
                  <div className="flex gap-2 items-start mt-2 text-sm font-semibold text-black whitespace-nowrap">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f79bd71a6471f38d5d1fc5e45c151fa99346fc4a5342fd2b25d87f1e68ade395?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                      className="object-contain shrink-0 aspect-[5] w-[100px]"
                    />
                    <div className="w-8 opacity-50">({quantity})</div>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Section3
