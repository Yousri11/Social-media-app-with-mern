import react, { useState } from 'react'
import "../designcss/register.css"
const Register =()=>{
    const [firstname,setFirstname]=useState('')
    const [lastname,setLastname]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [bio,setBio]=useState('')
    const [birthdate,setBirthdate]=useState('')
    const [picture,setPicture]=useState('')


    const Register=(e)=>{
        e.preventDefault()
        console.log("saha lmef " , firstname)
    }
    return <div className='all'>
            <div className='register'>
                <div className='imgs'>
                    <div className='img'></div>                    
                </div>
                <form className='content' onSubmit={Register}>
                    <h1>DARK SPACE</h1>
                    <p>dark space social media appication</p>
                    <div className='inputs' >
                        
                        <input type="text"  placeholder="username" value={firstname} onChange={(e)=>setFirstname(e.target.value)} />
                    </div>
                    <div className='inputs'>
                        
                        <input type="text"  placeholder="lastname" value={lastname} onChange={(e)=>setLastname(e.target.value)} />
                    </div>
                    <div className='inputs'>
                       
                        <input type="email"  placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div className='inputs'>
                       
                        <input type="password"  placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <div className='inputs'>
                        
                        <textarea name="" placeholder="your bio" id="" cols="30" rows="10" value={bio} onChange={(e)=>setBio(e.target.value)}></textarea>
                    </div>
                    <div className='inputs'>
                        
                        <input type="file"  placeholder=""  />
                    </div>
                    <div className='inputs'>
                        
                        <input type="date"  placeholder="" value={birthdate} onChange={(e)=>setBirthdate(e.target.value)} />
                    </div>
                    <button className='btnsign' type='submit'>sign in</button>
                </form>
            </div>
    </div>
}
export default Register 