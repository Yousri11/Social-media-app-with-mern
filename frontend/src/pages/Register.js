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
    return <div className='all'>
            <div className='register'>
                <div className='imgs'>
                    <div className='img'></div>                    
                </div>
                <div className='content'>
                    <h1>DARK SPACE</h1>
                    <p>dark space social media appication</p>
                    <div className='inputs' >
                        
                        <input type="text"  placeholder="username" value={firstname} onchange={(e)=>setFirstname(e.target.value)} />
                    </div>
                    <div className='inputs'>
                        
                        <input type="text"  placeholder="lastname" value={lastname} onchange={(e)=>setLastname(e.target.value)} />
                    </div>
                    <div className='inputs'>
                       
                        <input type="email"  placeholder="email" value={email} onchange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div className='inputs'>
                       
                        <input type="password"  placeholder="password" value={password} onchange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <div className='inputs'>
                        
                        <textarea name="" placeholder="your bio" id="" cols="30" rows="10" value={bio} onchange={(e)=>setBio(e.target.value)}></textarea>
                    </div>
                    <div className='inputs'>
                        
                        <input type="file"  placeholder=""  />
                    </div>
                    <div className='inputs'>
                        
                        <input type="date"  placeholder="" value={birthdate} onchange={(e)=>setBirthdate(e.target.value)} />
                    </div>
                    <button className='btnsign'>sign in</button>
                </div>
            </div>
    </div>
}
export default Register 