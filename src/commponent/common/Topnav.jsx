
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { navdata } from '../../constant/Nav';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';


function Topnav() {
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
// popup
  const [openpopup,setopenpopup] = useState(false)
  // popup
  // dropdown
  const[value,setvalue] = useState('')
  const options =[
    {label:"felix",value:1},
    {label:"muthu",value:2},
    {label:"thanga",value:3},
    {label:"natha",value:4},
  ]
  function handleSelect(event){
    setvalue(event.target.value)
  }
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary px-5">
    <Navbar.Brand href="/"><img src={navdata.image} className="logo" alt="" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav>
        <NavDropdown title="Who we are" id="basic-nav-dropdown" className='topnavdrop'>
         <NavDropdown.Item href="/aiservice"className='navfont'>AIServices for Translation<br/>requirements</NavDropdown.Item>
         <hr></hr>
          <NavDropdown.Item href="/human">
          Human Translation 
          </NavDropdown.Item>
          <hr></hr>
          <NavDropdown.Item href="/mtaudits">MT Audits</NavDropdown.Item>
          <hr></hr>
          <NavDropdown.Item href="#action/3.4">Transcription</NavDropdown.Item>
          <hr></hr>
          <NavDropdown.Item href="#action/3.5">Video Localization&Subtitles</NavDropdown.Item>
          <hr></hr>
          <NavDropdown.Item href="#action/3.6">Website Localization </NavDropdown.Item>
          <hr></hr>
          <NavDropdown.Item href="#action/3.7">E-Learning materials </NavDropdown.Item>
        </NavDropdown >
        <NavDropdown title="Industries" id="basic-nav-dropdown" className='topnavdrop2'>
          <NavDropdown.Item href="#action/3.1">Healthcare</NavDropdown.Item>
          <hr></hr>
          <NavDropdown.Item href="#action/3.2">
          Automotive
          </NavDropdown.Item>
          <hr></hr>
          <NavDropdown.Item href="#action/3.3">Media and Entertainment</NavDropdown.Item>
          <hr></hr>
          <NavDropdown.Item href="#action/3.4">E-commerce</NavDropdown.Item>
          <hr></hr>
          <NavDropdown.Item href="#action/3.5">Software Localization</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Join our translation team" id="basic-nav-dropdown" className='topnavdropteam'>
          <NavDropdown.Item href="/signup" className='register-btn'>Register</NavDropdown.Item>
        </NavDropdown>
        {
          openpopup &&
        <div className='popup'>
          <div className="popup-container">
          <div className='mainform'>
    <h2 className='powerheading' style={{color:'#B96CFD'}}>Register</h2>
    <div className='form'>
      <i class="fa-solid fa-xmark" onClick={()=> setopenpopup(false)}></i>
      <input placeholder='Entre your email' type='email' {...register('email')}></input>
      <input placeholder='Enter Your Name' type='text' {...register('name')}></input>
      <input type='text' placeholder='Enter your work' {...register('work')}></input>

      <div className='d-flex justify-content-center mt-5'>
        <div className='w-50 p-3 border rounded'>
          <select onChange={handleSelect}>
            {options.map(options => (
            <option>{options.label}</option>   
            ))}
          </select>
        </div>

      </div>
      <div className='submit' onClick={handleSubmit(onSubmit)}>
      <button onClick={()=>setopenpopup(false)}>Submit</button> 
      </div>
    </div>
   </div>
     </div>
        </div>
      }
      </Nav>
    </Navbar.Collapse>
  </Navbar>

  );
}

export default Topnav;