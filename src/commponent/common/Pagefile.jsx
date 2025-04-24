import React from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';


const Pagefile = () => {
  // mail function start
  const { formState: { errors }, register, handleSubmit } = useForm()
  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/register/postdetails', data)
      console.log(response.data)

    } catch (error) {
      console.log(error)
    }
  }
  // mail function end
  // popup
  // popup


  return (
    <div>

      <div className='mainform'>
        <h2 className='powerheading' style={{ color: '#B96CFD' }}>Register</h2>
        <div className='form'>
          <input placeholder='Entre your email' type='email' {...register('email')}></input>
          <input placeholder='Enter Your Name' type='text' {...register('firstname')}></input>
          <input type='text' placeholder='lastname' {...register('lastname')}></input>
          <div>
            <select className='formselect' name='gender' {...register('gender')}>
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <input type="date"name="dob" {...register('dob')} />

          <input type="tel" name="phone" placeholder='phone' {...register('phone')}/>

          <select className='formselect' {...register('currentlocation')}>
        <option value="">Current Location</option>
        <option value="Afghanistan">Afghanistan</option>  
        <option value="Albania">Albania</option>
        <option value="Algeria">Algeria</option>
        <option value="Andorra">Andorra</option>
        <option value="Angola">Angola</option>
        <option value="Antigua and Barbuda">Antigua and Barbuda</option>
        <option value="Argentina">Argentina</option>
        <option value="Armenia">Armenia</option>
        <option value="Australia">Australia</option>
        <option value="Austria">Austria</option>
        <option value="Azerbaijan">Azerbaijan</option>
        <option value="Bahrain">Bahrain</option>
        <option value="Bangladesh">Bangladesh</option>
        <option value="Barbados">Barbados</option>
        <option value="Belarus">Belarus</option>
        <option value="Belgium">Belgium</option>
        <option value="Belize">Belize</option>
        <option value="Benin">Benin</option>
        <option value="Bhutan">Bhutan</option>
        <option value="Bolivia">Bolivia</option>
        <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
        <option value="Botswana">Botswana</option> 
        <option value="Brazil">Brazil</option>
        <option value="Brunei">Brunei</option>
        <option value="Bulgaria">Bulgaria</option>
        <option value="Burkina Faso">Burkina Faso</option>
        <option value="Burundi">Burundi</option>
        <option value="Cabo Verde">Cabo Verde</option>
        <option value="Cambodia">Cambodia</option>
        <option value="Cameroon">Cameroon</option>
        <option value="Canada">Canada</option>
        <option value="Central African Republic">Central African Republic</option>
        <option value="Chad">Chad</option>
        <option value="Chile">Chile</option>
        <option value="China">China</option>
        <option value="Colombia">Colombia</option>
        <option value="Comoros">Comoros</option>
        <option value="Congo (Republic)">Congo (Republic)</option>
        <option value="Costa Rica">Costa Rica</option>
        <option value="Croatia">Croatia</option>
        <option value="Cuba">Cuba</option>
        <option value="Cyprus">Cyprus</option>
        <option value="Czechia (Czech Republic)">Czechia (Czech Republic)</option>
        <option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option> 
        <option value="Denmark">Denmark</option>
        <option value="Djibouti">Djibouti</option>
        <option value="Dominica">Dominica</option>
        <option value="Dominican Republic">Dominican Republic</option>
        <option value="Ecuador">Ecuador</option>
        <option value="Egypt">Egypt</option>
        <option value="El Salvador">El Salvador</option>
        <option value="Equatorial Guinea">Equatorial Guinea</option>
        <option value="Eritrea">Eritrea</option>
        <option value="Estonia">Estonia</option>
        <option value="Eswatini">Eswatini</option>
        <option value="Ethiopia">Ethiopia</option>
        <option value="Fiji">Fiji</option>
        <option value="Finland">Finland</option>
        <option value="France">France</option>
        <option value="Gabon">Gabon</option> 
        <option value="Gambia">Gambia</option>
        <option value="Georgia">Georgia</option>
        <option value="Germany">Germany</option>
        <option value="Ghana">Ghana</option>
        <option value="Greece">Greece</option>
        <option value="Grenada">Grenada</option>
        <option value="Guatemala">Guatemala</option>
        <option value="Guinea">Guinea</option>
        <option value="Guinea-Bissau"> Guinea-Bissau</option>
        <option value="Guyana">Guyana</option>
        <option value="Haiti">Haiti</option> 
        <option value="Honduras">Honduras</option>
        <option value="Hungary">Hungary</option>
        <option value="Iceland">Iceland</option> 
        <option value="India">India</option>
        <option value="Indonesia">Indonesia</option>
        <option value="Iran">Iran</option>
        <option value="Iraq">Iraq</option>
        <option value="Ireland">Ireland</option>
        <option value="Israel">Israel</option>
        <option value="Italy">Italy</option>
        <option value="Jamaica">Jamaica</option> 
        <option value="Japan">Japan</option>
        <option value="Jordan">Jordan</option>
        <option value="Kazakhstan">Kazakhstan</option>
        <option value="Kenya">Kenya</option>
        <option value="Kiribati">Kiribati</option>
        <option value="Korea (North)"> Korea (North)</option>
        <option value="Korea (South)"> Korea (South)</option>
        <option value="Kuwait">Kuwait</option>
        <option value="Kyrgyzstan"> Kyrgyzstan</option>
        <option value="Laos">Laos</option>
        <option value="Latvia">Latvia</option>
        <option value="Lebanon">Lebanon</option>
        <option value="Lesotho"> Lesotho</option>
        <option value="Liberia">Liberia</option>
        <option value="Libya"> Libya</option>
        <option value="Liechtenstein"> Liechtenstein</option>
        <option value="Lithuania">Lithuania</option>
        <option value="Luxembourg">Luxembourg</option>
        <option value="Madagascar">Madagascar</option>  
        <option value="Malawi">Malawi</option>
        <option value="Malaysia">Malaysia</option>
        <option value="Maldives"> Maldives</option>
        <option value="Mali">Mali</option>
        <option value="Malta">Malta</option>
        <option value="Marshall Islands">Marshall Islands</option>
        <option value="Mauritania">Mauritania</option>
        <option value="Mauritius">Mauritius</option>
        <option value="Mexico"> Mexico</option>
        <option value="Micronesia">Micronesia</option>
        <option value="Moldova">Moldova</option>
        <option value="Monaco">Monaco</option>
        <option value="Mongolia">Mongolia</option>
        <option value="Montenegro">Montenegro</option>
        <option value="Morocco">Morocco</option>
        <option value="Mozambique"> Mozambique</option>
        <option value="Myanmar">Myanmar</option>
        <option value="Namibia">Namibia</option> 
        <option value="Nauru"> Nauru</option>
        <option value="Nepal">Nepal</option>
        <option value="Netherlands">Netherlands</option>
        <option value="New Zealand">New Zealand</option>
        <option value="Nicaragua">Nicaragua</option>
        <option value="Niger">Niger</option>
        <option value="Nigeria"> Nigeria</option>
        <option value="North Macedonia">North Macedonia</option>
        <option value="Norway">Norway</option>
        <option value="Oman">Oman</option>
        <option value="Pakistan">Pakistan</option> 
        <option value="Palau">Palau</option>
        <option value="Palestine">Palestine</option>
        <option value="Panama">Panama</option>
        <option value="Papua New Guinea"> Papua New Guinea</option>
        <option value="Paraguay">Paraguay</option>
        <option value="Peru">Peru</option>
        <option value="Philippines">Philippines</option>
        <option value="Poland">Poland</option>
        <option value="Portugal">Portugal</option>
        <option value="Qatar">Qatar</option>
        <option value="Romania">Romania</option>
        <option value="Russia">Russia</option>
        <option value="Rwanda">Rwanda</option>
        <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
        <option value="Saint Lucia">Saint Lucia</option>
        <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
        <option value="Samoa">Samoa</option>
        <option value=" San Marino"> San Marino</option>
        <option value="Sao Tome and Principe">Sao Tome and Principe</option>
        <option value="Saudi Arabia">Saudi Arabia</option>
        <option value="Senegal">Senegal</option>
        <option value="Serbia">Serbia</option>
        <option value="Seychelles">Seychelles</option>
        <option value="Sierra Leone">Sierra Leone</option>
        <option value="Singapore">Singapore</option>
        <option value="Slovakia">Slovakia</option>
        <option value="Slovenia">Slovenia</option>
        <option value="Solomon Islands">Solomon Islands</option>
        <option value="Somalia">Somalia</option>
        <option value="South Africa">South Africa</option>
        <option value="South Sudan">South Sudan</option>
        <option value="Spain">Spain</option>
        <option value="Sri Lanka">Sri Lanka</option> 
        <option value="Sudan">Sudan</option>
        <option value="Suriname">Suriname</option>
        <option value="Sweden">Sweden</option>
        <option value="Switzerland">Switzerland</option>
        <option value="Syria">Syria</option>
        <option value="Taiwan">Taiwan</option>
        <option value="Tajikistan">Tajikistan</option>
        <option value="Tanzania">Tanzania</option>
        <option value="Thailand">Thailand</option>
        <option value="Timor-Leste">Timor-Leste</option>
        <option value="Togo">Togo</option>
        <option value="Tonga">Tonga</option>
        <option value="Trinidad and Tobago">Trinidad and Tobago</option>
        <option value="Tunisia">Tunisia</option>
        <option value="Turkey">Turkey</option>
        <option value="Turkmenistan">Turkmenistan</option>
        <option value="Tuvalu">Tuvalu</option>
        <option value="Uganda">Uganda</option>
        <option value="Ukraine">Ukraine</option>
        <option value="United Arab Emirates">United Arab Emirates</option>
        <option value="United Kingdom">United Kingdom</option>
        <option value="United States">United States</option>
        <option value="Uruguay">Uruguay</option>
        <option value="Uzbekistan"> Uzbekistan</option>
        <option value="Vanuatu">Vanuatu</option> 
        <option value="Vatican City">Vatican City</option>
        <option value="Venezuela">Venezuela</option>
        <option value="Vietnam">Vietnam</option>
        <option value="Yemen">Yemen</option>
        <option value="Zambia">Zambia</option>
        <option value="Zimbabwe">Zimbabwe</option>
      </select>
      
      <select className='formselect' {...register("education")}>
        <option value="">Select Education</option>
        <option value="High School">High School</option>
        <option value="Bachelor's">Bachelor's</option>
        <option value="Master's">Master's</option>
        <option value="PhD">PhD</option>
      </select>

      <input {...register("nameofcollege")} type="text" placeholder="Name of College"/>

      <select className='formselect' {...register("primarylanguage")}>
        <option>Select Primary Language</option>
        <option>English</option>
        <option>Hindi</option>
        <option>Spanish</option>
      </select>

      <input {...register('ifothers')} placeholder="If others, please specify"/>

      <select className='formselect' {...register("secondarylanguage")}>
        <option>secondary Languages</option>
        <option>ASL</option>
        <option>Afrikaans</option>
        <option>Akan</option>
        <option>Albanian</option>
        <option>Amharic</option>
      </select>

      <select className='formselect' {...register("languageproficiency")}>
        <option>Select Language Proficiency</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
        <option>Native</option>
      </select>
      
      <select className='formselect' {...register('domain')}>
        <option>domain</option>
        <option>Technical</option>
        <option>Educational</option>
        <option>Medical</option>
        <option>Legal</option>
      </select>

      <select className='formselect' {...register('expertise')}>
        <option>expertise</option>
        <option>Translation</option>
        <option>Proofreading</option>
        <option>Reviewing</option>
        <option>Editing</option>
       </select>

      <input placeholder='industry' {...register('industry')}/>

      <select className='formselect' {...register('currency')}>
        <option value="">Select Currency</option>
        <option value="INR">INR</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>

      <input {...register('chargesperword')} placeholder="charges PerWord" type="number"/>

      <input {...register('experienceinyears')}type="number"placeholder="Experience in Years"/>


      <div>
        <label className="block font-medium mb-1">Upload CV</label>
        <input
          type="file"
          name="cv"
          accept=".pdf,.doc,.docx"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Upload Sample</label>
        <input
          type="file"
          name="sample"
          accept=".pdf,.doc,.docx"
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



          <div className='submit' >
            <button onClick={handleSubmit(onSubmit)}>Submit</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Pagefile