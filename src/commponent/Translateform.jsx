import React from 'react'

const Translateform = () => {
  return (
    <div>
        <form>
        <div>
            <h2>Translator Registration Form</h2>

            <div>
           <label>Name</label>
            <div>
            <input placeholder='first name' type='text'></input>
            <input placeholder='last name' type='text'></input>
            </div>
            </div>

            <div>
            <label>Gender?</label><br></br>
            <input type='radio'name='male' value='male'/>male<br></br>
            <input type='radio'name='female' value='female'/>female<br></br>
            <input type='radio'name='transexual' value='transexual'/>transexual<br></br>
            </div>

            <div>
                <h4>Date Of Birth</h4>
                <input type='date'></input>
            </div>
            <div>
                <label>email</label>
                <input type='email'></input>
            </div>
        </div>
        </form>
    </div>
  )
}

export default Translateform