import "../designcss/login.css"
import axios from 'axios'
//const MyPromise = require('some-promise-lib');
import confetti from 'canvas-confetti';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import react, { useState } from 'react'
const Login=() => {
    const Login=async (e)=>{
        e.preventDefault()
        const data={
            email : email,
            pass : password
        }
        try{
            const res=await axios.post('http://localhost:5000/users/signin',data)
            confetti({particleCount: 150,spread: 180})
            toast.success("Login ..");
            
        }
            catch(e){
                console.log(e)
                toast.error(e.response.data.message)
            }
            //storage data.taken in local storege
        
                
        
    }
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    return (
        <div>
            <form onSubmit={Login}>
            <h1>login</h1>
            <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required/>
            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required/>
            <button type="submit">login</button>
            </form>
            <ToastContainer />
            
        </div>
    )
}
export default Login 