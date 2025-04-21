import React from 'react'
import { useState } from 'react'
import { navdata } from '../constant/Nav'
import { useForm } from 'react-hook-form'
import axios from 'axios'




const Signup = () => {
    // mail function start
    const {formState: {errors},register,handleSubmit} = useForm()
    const onSubmit = async(data)=>{
        try {
          const response =await axios.post('https://tevabackend.onrender.com/register/postdetails',data)
          console.log(response.data)
  
          
        } catch (error) {
          console.log(error)  
        }
    }
    // mail function end
    const [value, setvalue] = useState('')
    const options = [
        {label:"select yours"},
        { label: "Translator", value1:"to become part of the tevacraft community"},
        { label: "customer", value:"to order translation" },
    ]
    function handleselect(event) {
        setvalue(event.target.value)
    }
    return (
        <div className='signupcontainer'>
            <div className='signflex'>
                <div className='signupimg'>
                    <img src={navdata.signup} alt=''></img>
                </div>
                <div className='boxcontainer'>
                    <h2 className='span'>Create an account us</h2>
                    <div>
                        <div>
                            <select onChange={handleselect}>
                                {options.map(options => (
                                    <option value={options.value1}>{options.label}</option>
                                ))}
                            </select>
                            <p><a href='/translate'>{value}</a></p>
                        </div>
                     </div>

                    <input type="email" placeholder=' Enter your email' className='signitems' {...register('email')}/>
                    <input type="password" placeholder=' Enter your password' className='signitems'{...register('password')}/>
                    <input type='checkbox'></input>
                    <button onClick={handleSubmit(onSubmit)}>Sign up</button>
                    <p>already have an account ?<span className='signincolor'><a href="/signin">login</a></span></p>
                </div>
            </div>
        </div>
    )
}

export default Signup