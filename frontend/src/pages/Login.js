import "../designcss/login.css"
import react, { useState } from 'react'
const Login=() => {
    const Login=(e)=>{
        console.log(email,"  ",password)
        e.preventDefault()
    }
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    return (
        <form onSubmit={Login}>
           <h1>login</h1>
           <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required/>
           <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required/>
           <button type="submit">login</button>
        </form>
    )
}
export default Login 