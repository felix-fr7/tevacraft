import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';


const Translateform = () => {

// mail function
    const {formState: {errors},register,handleSubmit} = useForm()
  const onSubmit = (e)=>async(data)=>{
      try {
        const response =await axios.post('http://localhost:3000/register/postdetails',data)
        console.log(response.data)  
      } catch (error) {
        console.log(error)  
      }
  }

   //  mail function

 
  

  return (
    <div>
        <form className="space-y-4 max-w-xl mx-auto p-4 formtranslate">

      <div className="grid grid-cols-2 gap-4">
        <input {...register('firstname')}
          name="firstName"
          placeholder="firstname"
          required
          className="border p-2 rounded"
        />
        <input 
          name="lastName" {...register('lastname')}

          placeholder="lastName"
          required
          className="border p-2 rounded"
        />
      </div>

      <select {...register('gender')}
        name="gender"

        required
        className="border p-2 rounded w-full"
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <input {...register('dob')}
        type="date"
        name="dob"
       
        required
        className="border p-2 rounded w-full"
      />

      <input {...register('email')}
        type="email"
        placeholder="email"
        required
        className="border p-2 rounded w-full"
      />

      <input {...register('phone')}
        type="tel"
        name="phone"
     
        placeholder="Phone"
        required
        className="border p-2 rounded w-full"
      />


        
     
        <select className="border p-2 rounded w-full" {...register("city")}>
          <option value="">Select City</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Bangalore">Bangalore</option>
        </select>
      

      <select placeholder="Select Education" {...register("education")}name="education">
        <option value="">Select Education</option>
        <option value="High School">High School</option>
        <option value="Bachelor's">Bachelor's</option>
        <option value="Master's">Master's</option>
        <option value="PhD">PhD</option>
      </select>

      <input {...register("nameofcollege")}type="text"name="college"/>

<select name="primaryLanguage"{...register("primaryLanguage")}>
        <option value="">Select Primary Language</option>
        <option>English</option>
        <option>Hindi</option>
        <option>Spanish</option>
      </select>

      <input {...register('ifothers')}name="otherLanguage"placeholder="If others, please specify"/>

      <select {...register("secondaryLanguages")}
        name="secondaryLanguages"
        multiple
        
        className="border p-2 rounded w-full h-32"
      >
        {["ASL", "Afrikaans", "Akan", "Albanian", "Amharic"].map((lang) => (
          <option key={lang}>{lang}</option>
        ))}
      </select>

      <select name="languageProficiency" {...register("languageProficiency")}>
        <option value="">Select Language Proficiency</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
        <option>Native</option>
      </select>

      <select {...register('domain')}
        name="domain"
        multiple
       
        className="border p-2 rounded w-full h-32"
      >
        {["Technical", "Educational", "Medical", "Legal"].map((domain) => (
          <option key={domain}>{domain}</option>
        ))}
      </select>

      <select {...register('expertise')}
        name="expertise"
        multiple
        
        className="border p-2 rounded w-full h-32"
      >
        {["Translation", "Proofreading", "Reviewing", "Editing"].map((expertise) => (
          <option key={expertise}>{expertise}</option>
        ))}
      </select>

      <input {...register('industry')}name="industry"/>
       <select {...register('currency')}>
        <option value="">Select Currency</option>
        <option value="INR">INR</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>

      <input {...register('chargesPerWord')}type="number"name="chargesPerWord"/>

      <input {...register('experienceinyears')}type="number" name="experienceinyears"placeholder="Experience in Years"/>

      <div>
        <label className="block font-medium mb-1">Upload CV</label>
        <input
          type="file"
          name="cv"
          accept=".pdf,.doc,.docx"
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Upload Sample</label>
        <input
          type="file"
          name="sample"
          accept=".pdf,.doc,.docx"
         
          className="w-full border p-2 rounded"
        />
        <p className="text-sm text-gray-500 italic">Maximum size limit - 1 MB</p>
      </div>

      <div className="border p-3 rounded bg-gray-50 max-h-40 overflow-auto text-sm text-gray-700">
        <h3 className="font-semibold mb-2 underline">Language Consultant Agreement</h3>
        <p>
          This Consultancy Agreement is made and entered into this on "Date on
          which form filled" by and between Lang-Tal (Branding for White Globe
          Pvt. Ltd). and the language consultant. Lang-Tal principal place of
          business is located at Pune – Maharashtra (India) and the consultant
          with his principal place of business located at "as filled in form"
          location.
          <br /><br />
          WHEREAS, the Company is in the business of Language services and is a
          part Translation & Localisation Industry.
          <br />
          WHEREAS, the Consultant has expertise in the area of x language
          Language for Translation and other associated Services.

        </p>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="agreedToTerms"
          className="accent-blue-600"
        />

        <label>I agree to the Terms and Conditions *</label>
      </div>

      <div>
      <button  onClick={handleSubmit(onSubmit)} type="submit" className="bg-blue-600 text-black py-2 px-4 rounded" >
        Submit
      </button>
      </div>
   
    </form>
    </div>
  )
}

export default Translateform