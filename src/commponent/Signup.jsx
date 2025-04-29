import React from 'react'
import { navdata } from '../constant/Nav'
import { Link } from 'react-router-dom'


const Signup = () => {

    return (
        <div className='signupcontainer'>
            <div className='signflex'>
                <div className='signupimg'>
                    <img src={navdata.signup} alt=''></img>
                    <Link to="/pagefile"><button>Translater</button></Link>
                </div>
                <div className='signupimg'>
                    <img  src={navdata.login} alt=''></img>
                    <Link to ='/pagefile2'><button>Customer</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Signup