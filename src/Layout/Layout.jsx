import { Link, Outlet } from "react-router-dom"
import TemporaryDrawer from "./TemporaryDrawer"
import { getToken, romoveToken } from "../utils/token"
import "./Layout.css"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
 
const Layout = () => {
  const user = getToken()

  const [menu, setMenu] = useState(false)
  const logout = () =>{
    romoveToken()
    setMenu(!menu)
  }
   

  const { cnt } = useSelector((state) => state.counterSlice);
  

 
  
  
  useEffect(() =>{
   

  },[user,menu, cnt])

  return (
    <div>
        <header className="flex sticky top-0 z-40 flex-wrap gap-10 sm:justify-between items-center px-[5%] py-3 bg-white border-b border-black border-opacity-10 max-md:px-5">
          <TemporaryDrawer />
      <div className="flex sm:hidden flex-wrap flex-1 shrink gap-10 justify-between items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
        
        <Link to={"/"} className="flex gap-2.5 self-stretch my-auto text-2xl whitespace-nowrap text-neutral-800 w-[166px]">
        
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/43b38c8ba8699811dd8a027ed8bb7bc8ca8545b061c2aad2a8fab9c0fc4ee4ef?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
            className="object-contain shrink-0 w-11 rounded-none aspect-[0.92]"
          />
          <div className="my-auto basis-auto">fastcart</div>
        </Link>
        <div className="flex  sm:hidden gap-8 items-start self-stretch my-auto text-base text-center text-black min-w-[240px]">
          <div className="flex flex-col items-center w-12 whitespace-nowrap   border-opacity-30">
            <Link to={"/"} >Home</Link>
            <div className="flex w-12 min-h-0" />
          </div>
          <Link to={"/contact"} className="whitespace-nowrap w-[66px]">Contact</Link>
          <Link to={"/about"} className="w-12 whitespace-nowrap">About</Link>
          <Link to={"/signIn"} className="w-[61px]">Sign In</Link>
         
        </div>
      </div>
      <div className="flex gap-6  items-center self-stretch my-auto  ">
        <div className="flex  flex-col justify-center items-center self-stretch py-2 pr-3 pl-5 my-auto text-xs text-black rounded bg-neutral-100  ">
          <div className="flex gap-9 justify-center items-center">
            <input className="w-[250px] rounded-md h-[30px] outline-none pl-2" type="search" placeholder="What are you looking for?" />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a36546edd30f9649053810fdbf6c98d92541e863e7b8b10ab13af855343b34e?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
          </div>
        </div>
        <div className="flex sm:hidden gap-4 justify-center items-center self-stretch my-auto">
          <Link to={`/wishlist`}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/850597cc14d3bfef027aa097fc5bca3ac1b650d683dc1d3c8c0134d5cd9a061d?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
            className="object-contain sm:hidden shrink-0 self-stretch my-auto w-8 aspect-square"
            />
            </Link>
          <Link to={"/cart"} >

              {cnt && <h1 className="absolute top-8 px-[6px] text-white bg-red-600 rounded-full font-[700]">{cnt}</h1>}
          <img
            loading="lazy"
            src="https://avatars.mds.yandex.net/i?id=edf9ce98e09fa7b59fa216b31f9d8fb2b297eaa9-8313736-images-thumbs&n=13"
            className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
            />
            </Link >


          {user && <div>

<img

  loading="lazy"
  onClick={()=> setMenu(!menu)
    
  }
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/505a01368e57ac667ecd551fd161eb3fa8202cee72841e5b11d9f712055e4607?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
  className="object-contain  shrink-0 self-stretch my-auto w-8 aspect-square"
  />
    

    {menu &&   <div className="flex    absolute overflow-hidden flex-col items-start px-5 py-4 text-sm text-center rounded bg-black bg-opacity-70 max-w-[190px] shadow-[2px_4px_12px_rgba(0,0,0,0.35)] text-neutral-50">
<div className="flex gap-4  items-center whitespace-nowrap">
<img
loading="lazy"
src="https://cdn.builder.io/api/v1/image/assets/TEMP/31eec40b116d92b4b7503e885e8d1629b5b0ecf2e3fc38a62be558ba7aecca2a?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
/>
<div className="self-stretch my-auto">Account {user&& <h1> : {user.name} </h1>}</div>

</div>
<div className="flex gap-4 items-center mt-4">
<img
loading="lazy"
src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ca2606808d70f6c17d0a81b6b0bf390fd5c6c089fad99d24dbb560cee45a8d5?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
/>
<div className="self-stretch my-auto">My Order</div>
</div>
<div className="flex gap-4 items-center mt-4 whitespace-nowrap text-neutral-50">
<img
loading="lazy"
src="https://cdn.builder.io/api/v1/image/assets/TEMP/db71c9cec62d9b4164f9d435baba015be4d208593b6814a71b9f4c3cec13c877?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
/>
<Link  to={`/wishlist`} className="self-stretch my-auto">Wishlist</Link  >
</div>
<div onClick={() => logout()} className="flex hover:bg-[#00000050] gap-4 items-center mt-4 whitespace-nowrap">
<img
loading="lazy"
src="https://cdn.builder.io/api/v1/image/assets/TEMP/5dd4ef2221a26eb97c44021b855f72d1aa05086d707c891b3a9c34b08b015240?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
/>
<div  className="self-stretch  my-auto">Logout</div>
</div>
</div>
}




  
  </div> }
          
        </div>
      </div>

      </header>


      <Outlet />


      <footer className="flex overflow-hidden flex-col pt-16 pb-6  bg-black">
      <div className="flex flex-wrap gap-10 justify-center items-start self-center max-md:max-w-full">
        <div className="flex flex-col text-neutral-50 w-[257px]">
          <div className="flex flex-col self-start">
            <div className="flex flex-col max-w-full whitespace-nowrap w-[118px]">
              <div className="w-full text-2xl font-bold tracking-wider leading-none">
                Exclusive
              </div>
              <div className="mt-6 text-xl font-medium leading-snug">
                Subscribe
              </div>
            </div>
            <div className="mt-6 text-base">Get 10% off your first order</div>
          </div>
          <div className="flex gap-8 items-center py-3 pr-0 pl-4 mt-4 max-w-full text-base rounded border-solid border-[1.5px] border-neutral-50 w-[217px]">
            <div className="self-stretch my-auto opacity-40">
              Enter your email
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6bac8a3a4556d00df359345f40c4304fa01a92d9d278e1cc8be218cdcd6e20d8?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
          </div>
        </div>
        <div className="flex flex-col text-neutral-50 w-[257px]">
          <div className="text-xl font-medium leading-snug">Support</div>
          <div className="flex flex-col mt-6 max-w-full text-base w-[175px]">
            <div className="leading-6">
              Tajikistan Dushanbe Borbad 95
            </div>
            <div className="mt-4">fariduneshon02@gmail.com</div>
            <div className="mt-4">+992 009 88 65 88</div>
          </div>
        </div>
        <div className="flex flex-col text-neutral-50 w-[257px]">
          <div className="text-xl font-medium leading-snug">Account</div>
          <div className="flex flex-col mt-6 text-base">
            <div>My Account</div>
            <div className="mt-4">Cart</div>
            <div className="mt-4">Wishlist</div>
            <div className="mt-4">Shop</div>
          </div>
        </div>
        <div className="flex flex-col text-neutral-50 w-[257px]">
          <div className="text-xl font-medium leading-snug">Quick Link</div>
          <div className="flex flex-col mt-6 text-base">
            <div>Privacy Policy</div>
            <div className="mt-4">Terms Of Use</div>
            <div className="mt-4">FAQ</div>
            <div className="mt-4">Contact</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-xl font-medium leading-snug text-neutral-50">
            Social{" "}
          </div>
          <div className="flex gap-6 items-start mt-6">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/30ef1881c8ba382ad841b10dec22c4728e1ac56594cd8fd1b8fc54e4c0c91052?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
              className="object-contain shrink-0 w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa62b411571b5571a23ad352c17344f310c8a88a8254c342f0a9c0b85fed4a12?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
              className="object-contain shrink-0 w-6 aspect-square"
            />
            <img
              loading="lazy"
              
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0b67f52bb53b8c3b436cfc50867157e647c1cc5fa6f7cc373ba309b35f3d286?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
              className="object-contain shrink-0 w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/017f03fd6271e23e94e189db8506f53ec67e53623ecac07e20b0cc0e64aa481c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
              className="object-contain shrink-0 w-6 aspect-square"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-10 w-full max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="w-full h-px bg-white border border-white border-solid opacity-40 min-h-[1px] max-md:max-w-full" />
        </div>
        <div className="flex gap-3 items-center mt-4 text-base text-white">
          <div className="flex gap-1.5 items-center self-stretch my-auto min-w-[240px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/63d130c445c2cf637fd1e84407b3842e9603ef36f8aa5d47db94707cedcf5786?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            />
            <div className="self-stretch my-auto">
              Copyright Rimel 2022. All right reserved
            </div>
          </div>
        </div>
      </div>
    </footer>

    </div>
  )
}

export default Layout





 
 
