import react from 'react'
import "../designcss/register.css"
const Register =()=>{
    return <div className='all'>
            <div className='register'>
                <div className='imgs'>
                    <div className='img'></div>                    
                </div>
                <div className='content'>
                    <h1>DARK SPACE</h1>
                    <p>dark space social media appication</p>
                    <div className='inputs'>
                        
                        <input type="text"  placeholder="username"/>
                    </div>
                    <div className='inputs'>
                        
                        <input type="text"  placeholder="lastname"/>
                    </div>
                    <div className='inputs'>
                       
                        <input type="email"  placeholder="email"/>
                    </div>
                    <div className='inputs'>
                       
                        <input type="password"  placeholder="password"/>
                    </div>
                    <div className='inputs'>
                        
                        <textarea name="" placeholder="your bio" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className='inputs'>
                        
                        <input type="file"  placeholder="" />
                    </div>
                    <div className='inputs'>
                        
                        <input type="date"  placeholder="" />
                    </div>
                </div>
            </div>
    </div>
}
export default Register 