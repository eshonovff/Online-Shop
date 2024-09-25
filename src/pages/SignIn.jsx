import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

 
const SignIn = () => {
const [userName, setUserName] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate()


const handleSubmit = async ()=>{
  const login ={
    "userName": userName,
    "password": password
  }
  try {
    const data = await axios.post("http://135.181.152.249:8072/Account/login" , login)
      console.log(data);
      if(data.status == 200)
        {
          navigate("/")
          console.log("s",data)
          localStorage.setItem("access_token" , data.data.data)
        }
        console.log(data)
      
  } catch (error) {
    console.error(error);
    
  }
  window.location.reload()
 }
  return (
    <div className="flex justify-center my-36">
          <div className="flex flex-col max-w-[420px]">
      <div className="flex flex-col w-full text-black">
        <div className="text-4xl font-medium tracking-widest">
          Log in to Exclusive
        </div>
        <div className="mt-2 text-base">Enter your details below</div>
      </div>
      <div className="flex flex-col mt-10 w-full">
        <div className="flex flex-col w-full">
          <div className="flex relative flex-col w-full tracking-normal">
            <div className="flex z-0 flex-col px-3 w-full text-base whitespace-nowrap rounded border border-solid border-black border-opacity-20 text-black text-opacity-90">
              
                <input type="email" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="userName" className="bg-transparent outline-none overflow-hidden flex-1 shrink self-stretch py-4 w-full min-h-[24px] min-w-[24px]" />
 
            </div>
            <div className="absolute left-3 gap-2.5 self-start px-1 h-0.5 text-xs leading-none bg-white text-black text-opacity-60">
              Email or phone number
            </div>
          </div>
          <div className="flex relative flex-col mt-5 w-full">
            <div className="flex z-0 flex-col px-3 w-full rounded border border-solid border-black border-opacity-20">
              <div className="flex overflow-hidden relative items-start py-4 w-full min-h-[24px] min-w-[24px]">
                
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="***********" className="z-0 flex-1 shrink my-auto text-base tracking-normal basis-0 text-black text-opacity-90 bg-transparent outline-none" />
              
                <div className="flex absolute right-0 top-2/4 z-0 items-center self-start w-6 h-px -translate-y-2/4 translate-x-[0%]">
                   
                </div>
              </div>
            </div>
            <div className="absolute left-3 gap-2.5 self-start px-1 h-0.5 text-xs tracking-normal leading-none whitespace-nowrap bg-white text-black text-opacity-60">
              Password
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-5 w-full text-base font-medium">
         <h1>dont have an account <Link to="/signUp" className="opacity-70"> Sign up</Link> </h1>
          <button  onClick={handleSubmit} className="gap-2.5 self-stretch px-12 py-4 mt-3 w-full bg-red-500 rounded text-neutral-50">
            Log In
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SignIn


 

 