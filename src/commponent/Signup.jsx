import React from 'react'
import { useState } from 'react'
import { navdata } from '../constant/Nav'




const Signup = () => {
    const [value, setvalue] = useState('')
    const options = [
        { label: "Translator", value:"to become part of the tevacraft community"},
        { label: "customer", value:"to order translation" },
    ]
    function handleselect(event) {
        setvalue(event.target.value)
    }
    return (
        <div className='signupcontainer'>
            <div className='signflex'>
                <div className='signupimg'>
                    <img src={navdata.signup}></img>
                </div>
                <div className='boxcontainer'>
                    <h2 className='span'>Create an account us</h2>
                    <div>
                        <div>
                            <select onChange={handleselect}>
                                {options.map(options => (
                                    <option value={options.value}>{options.label}</option>
                                ))}
                            </select>
                            <p>{value}</p>
                        </div>
                     </div>

                    <input type="email" placeholder=' Enter your email' className='signitems' />
                    <input type="password" placeholder=' Enter your password' className='signitems' />
                    <input type='checkbox'></input>
                    <button>Sign up</button>
                    <p>already have an account ?<span className='signincolor'><a href="/signin">login</a></span></p>
                </div>
            </div>
        </div>
    )
}

export default Signup