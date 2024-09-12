import { useState } from "react"

const Login = () => {


const [currentState,setCurrentState]=useState('Signup');
const onSubmitHandler= async (event) => {
  event.preventDefault();
}


  return (
    <form className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-500" action="">

      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800 " />


      </div>
      {currentState==='Login'?'':<input type="text" className="w-full px-3 py-2 border border-gray-800 " placeholder="Name" />}
      <input type="email" className="w-full px-3 py-2 border border-gray-800 " placeholder="Email" />
      <input type="password" required className="w-full px-3 py-2 border border-gray-800 " placeholder="PassWord" />
      <div className="w-full flex justify-between text-sm mt-[-8px] ">
        <p className="Cursor-Pointer">Forgot your password? </p>
        {
        currentState==='Login'?<p onClick={()=>setCurrentState('Signup')} className="cursor-pointer">Sign up</p>: <p onClick={()=>setCurrentState('Login')}  className="cursor-pointer">Login</p>
        }

      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4">{currentState==='Login'?'Sign in':'Sign up'}</button>

    </form>
  )
}

export default Login