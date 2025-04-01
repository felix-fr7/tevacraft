import React from 'react'
import { navdata } from '../constant/Nav'

const Signin = () => {

  return (
        <div className='signupcontainer'>
            <div className='signflex'>
                <div className='signupimg'>
                    <img src={navdata.login}></img>
                </div>
                <div className='boxcontainer'>
                    <h2 className='span'>login</h2>
                    <input type="email" placeholder=' Enter your email' className='signitems' />
                    <input type="password" placeholder=' Enter your password' className='signitems' />
                  <label>  <input type='checkbox'></input> Remember me</label> 
                    <button>login</button>
                    <p>create an account us <span className='signincolor'><a href="/signup">Sign up</a></span></p>
                </div>
            </div>
        </div>
  )
}

export default Signin;