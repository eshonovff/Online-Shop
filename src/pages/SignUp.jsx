import axios from "axios"
import { useState } from "react"
import {  useNavigate } from "react-router-dom"

const SignUp = () => {
  const navigate = useNavigate()
  const [userName , setUserName] = useState("")
  const [phoneNumber , setPhoneNumber] = useState("")
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [confirmPassword , setConfirmPassword] = useState("")

  const handleSubmit = async () =>
    {
      
      const user = 
      {
        "userName": userName,
        "phoneNumber": phoneNumber,
        "email": email,
        "password": password,
        "confirmPassword": confirmPassword
      }
      try
      {
        const data = await axios.post("http://135.181.152.249:8072/Account/register" , user)
        if(data.status == 200)
        {
          navigate("/signIn")
        }
        console.log(data)
      }
      catch(error)
      {
        console.log(error)
      }
    }




  return (
    <div className="flex justify-center my-36">
          <div className="flex flex-col max-w-[420px]">
      <div className="flex flex-col w-full text-black">
        <div className="text-4xl font-medium tracking-widest">
          Create an account
        </div>
        <div className="mt-2 text-base">Enter your details below</div>
      </div>
      <div className="flex flex-col mt-12 w-full text-base">
        <div className="flex flex-col w-full tracking-normal text-black text-opacity-60">
          <div className="flex flex-col w-full whitespace-nowrap">
            <div className="flex flex-col px-3 w-full rounded border border-solid border-black border-opacity-20">
            
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Name" className="overflow-hidden bg-transparent outline-none flex-1 shrink self-stretch py-4 w-full min-h-[24px]" />
    
            </div>
          </div>
          <div className="flex flex-col mt-5 w-full">
            <div className="flex flex-col px-3 w-full rounded border border-solid border-black border-opacity-20">
       
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-transparent outline-none overflow-hidden flex-1 shrink self-stretch py-4 w-full min-h-[24px]" />
 
            </div>
          </div>
          <div className="flex flex-col mt-5 w-full">
            <div className="flex flex-col px-3 w-full rounded border border-solid border-black border-opacity-20">
       
                <input type="text" placeholder="Phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="bg-transparent outline-none overflow-hidden flex-1 shrink self-stretch py-4 w-full min-h-[24px]" />
 
            </div>
          </div>
          <div className="flex flex-col mt-5 w-full whitespace-nowrap">
            <div className="flex flex-col px-3 w-full rounded border border-solid border-black border-opacity-20">
             
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-transparent outline-none overflow-hidden flex-1 shrink self-stretch py-4 w-full min-h-[24px] " />
     
          
            </div>
          </div>
          <div className="flex flex-col mt-5 w-full whitespace-nowrap">
            <div className="flex flex-col px-3 w-full rounded border border-solid border-black border-opacity-20">
             
                <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="bg-transparent outline-none overflow-hidden flex-1 shrink self-stretch py-4 w-full min-h-[24px] " />
     
          
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10 w-full text-black">
          <button onClick={() => handleSubmit()} className="gap-2.5 self-stretch px-32 py-4 w-full font-medium bg-red-500 rounded text-neutral-50">
            Create Account
          </button>
          <div className="flex flex-col justify-center items-start px-20 py-4 mt-4 w-full rounded border border-solid border-black border-opacity-40">
            <button className="flex gap-4 items-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4dc1fc1c3b2625f8012682edd78f0ebf23204a2c4ed2000990836f7a113cb80a?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                className="object-contain shrink-0 w-6 aspect-square"
              />
              <div>Sign up with Google</div>
            </button>
          </div>
          <div className="flex gap-4 justify-center items-center py-4 mt-4 w-full">
 
            <div className="flex flex-col self-stretch my-auto font-medium w-[50px]">
                
            
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SignUp



 

 