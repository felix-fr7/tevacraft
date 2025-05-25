import React from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';


const Pagefile = () => {
  // mail function start
  const { formState: { errors }, register, handleSubmit } = useForm()
const onSubmit = async (data) => {
  try {
    const response = await axios.post('https://tevabackend.onrender.com/register/postdetails', data);

    if (response.status === 200) {
      alert('Registered Successfully');
    }
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      alert(error.response.data.message); 
    } else {
      alert('Something went wrong. Please try again.');
    }
    console.error(error);
  }
};


  return (
    <div>

      <div className='mainform'>
      <h2 className='powerheading' style={{ color: '#B96CFD' }}>Register</h2>
      <div className='form'>
        <input
          placeholder='Enter your email'
          type='email'
          {...register('email', { required: 'Email is required' })}/>
        {errors.email && <p className='error'>{errors.email.message}</p>}

        <input
          placeholder='Enter Your Name'
          type='text'
          {...register('firstname', { required: 'First name is required' })}/>
        {errors.firstname && <p className='error'>{errors.firstname.message}</p>}

        <input
          type='text'
          placeholder='Last name'
          {...register('lastname', { required: 'Last name is required' })}/>
        {errors.lastname && <p className='error'>{errors.lastname.message}</p>}

        <div>
          <select
            className='formselect'
            {...register('gender', { required: 'Gender is required' })}>
            <option value=''>Select Gender</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Other'>Other</option>
          </select>
          {errors.gender && <p className='error'>{errors.gender.message}</p>}
        </div>

        <input
          type="date"
          placeholder='Date of Birth'
          {...register('dob', { required: 'Date of birth is required' })}
        />
        {errors.dob && <p className='error'>{errors.dob.message}</p>}

        <input
          type="tel"
          placeholder='Phone'
          {...register('phone', { required: 'Phone number is required' })}/>
        {errors.phone && <p className='error'>{errors.phone.message}</p>}

          <select className='formselect' {...register('currentlocation', { required: 'Current location is required' })}>
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
      {errors.currentlocation && (
  <p className="error">{errors.currentlocation.message}</p>)}
      
     {/* Education */}
<select className='formselect' {...register("education", { required: "Education is required" })}>
  <option value="">Select Education</option>
  <option value="High School">High School</option>
  <option value="Bachelor's">Bachelor's</option>
  <option value="Master's">Master's</option>
  <option value="PhD">PhD</option>
</select>
{errors.education && <p className="error">{errors.education.message}</p>}

{/* College Name */}
<input {...register("nameofcollege", { required: "College name is required" })} type="text" placeholder="Name of College" />
{errors.nameofcollege && <p className="error">{errors.nameofcollege.message}</p>}

{/* Primary Language */}
<select className='formselect' {...register("primarylanguage", { required: "Primary language is required" })}>
  <option value="">Select Primary Language</option>
  <option>English</option>
  <option>Hindi</option>
  <option>Spanish</option>
</select>
{errors.primarylanguage && <p className="error">{errors.primarylanguage.message}</p>}

{/* If Others */}
<input {...register('ifothers')} placeholder="If others, please specify" />
{/* Optional – no validation */}

{/* Secondary Language */}
<select className='formselect' {...register("secondarylanguage", { required: "Secondary language is required" })}>
  <option value="">Secondary Languages</option>
  <option>ASL</option>
  <option>Afrikaans</option>
  <option>Akan</option>
  <option>Albanian</option>
  <option>Amharic</option>
</select>
{errors.secondarylanguage && <p className="error">{errors.secondarylanguage.message}</p>}

{/* Language Proficiency */}
<select className='formselect' {...register("languageproficiency", { required: "Proficiency is required" })}>
  <option value="">Select Language Proficiency</option>
  <option>Beginner</option>
  <option>Intermediate</option>
  <option>Advanced</option>
  <option>Native</option>
</select>
{errors.languageproficiency && <p className="error">{errors.languageproficiency.message}</p>}

{/* Domain */}
<select className='formselect' {...register('domain', { required: "Domain is required" })}>
  <option value="">Domain</option>
  <option>Technical</option>
  <option>Educational</option>
  <option>Medical</option>
  <option>Legal</option>
</select>
{errors.domain && <p className="error">{errors.domain.message}</p>}

{/* Expertise */}
<select className='formselect' {...register('expertise', { required: "Expertise is required" })}>
  <option value="">Expertise</option>
  <option>Translation</option>
  <option>Proofreading</option>
  <option>Reviewing</option>
  <option>Editing</option>
</select>
{errors.expertise && <p className="error">{errors.expertise.message}</p>}

{/* Industry */}
<input placeholder='Industry' {...register('industry', { required: "Industry is required" })} />
{errors.industry && <p className="error">{errors.industry.message}</p>}

{/* Currency */}
<select className='formselect' {...register('currency', { required: "Currency is required" })}>
  <option value="">Select Currency</option>
  <option value="INR">INR</option>
  <option value="USD">USD</option>
  <option value="EUR">EUR</option>
</select>
{errors.currency && <p className="error">{errors.currency.message}</p>}

{/* Charges Per Word */}
<input {...register('chargesperword', {
  required: "Charge per word is required",
  valueAsNumber: true,
  min: { value: 0.01, message: "Minimum charge must be greater than 0" }
})} placeholder="Charges Per Word" type="number" />
{errors.chargesperword && <p className="error">{errors.chargesperword.message}</p>}

{/* Experience in Years */}
<input {...register('experienceinyears', {
  required: "Experience is required",
  valueAsNumber: true,
  min: { value: 0, message: "Experience cannot be negative" }
})} type="number" placeholder="Experience in Years" />
{errors.experienceinyears && <p className="error">{errors.experienceinyears.message}</p>}


<div>
  <label className="block font-medium mb-1">Upload CV</label>
  <input
    type="file"
    accept=".pdf,.doc,.docx"
    {...register("cv", {
      required: "CV is required",
      validate: {
        fileType: (value) =>
          value[0] && ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(value[0]?.type) || "Invalid file type",
      }
    })}
  />
  {errors.cv && <p className="text-red-500 text-sm">{errors.cv.message}</p>}
</div>

<div>
  <label className="block font-medium mb-1">Upload Sample</label>
  <input
    type="file"
    accept=".pdf,.doc,.docx"
    {...register("sample", {
      required: "Sample file is required",
      validate: {
        fileType: (value) =>
          value[0] && ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(value[0]?.type) || "Invalid file type",
        fileSize: (value) =>
          value[0] && value[0].size <= 1024 * 1024 || "File size must be under 1MB"
      }
    })}
  />
  <p className="text-sm text-gray-500 italic">Maximum size limit - 1 MB</p>
  {errors.sample && <p className="text-red-500 text-sm">{errors.sample.message}</p>}
</div>

       
       <div className="scrollbar">
      <div>
        <h3 className= "text-lg font-semibold mb-2">Language Consultant Agreement</h3>
        <p className="whitespace-pre-wrap text-sm">
           Language Consultant Agreement
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
          WHEREAS, the Company desires to engage the Consultant to provide certain services in the area of Consultant’s expertise and the Consultant is willing to provide such services to the Company;

NOW, THEREFORE, the Parties hereby agree as follows:
<br></br>
<br></br><hr></hr>
1.       Engagement and Services
(a)      Engagement. The Company hereby engages the Consultant to provide and perform the services set forth in Exhibit A attached hereto (the “Services”), and the Consultant hereby accepts the engagement.
(b)      Standard of Services. All Services to be provided by Consultant shall be performed with promptness and diligence in a workmanlike manner and at a level of proficiency to be expected of a consultant with the background and experience that Consultant has represented it has. The Company shall provide such access to its information, property and personnel as may be reasonably required in order to permit the Consultant to perform the Services.
(c)      Tools, Instruments and Equipment. Consultant shall provide Consultant’s own tools, instruments and equipment and place of performing the Services, unless otherwise agreed between the Parties.
(d)      Representation and Warranty. Consultant represents and warrants to the Company that it is under no contractual or other restrictions or obligations which are inconsistent with the execution of this Agreement or which will interfere with the performance of the Services.
<br></br>
<br></br><hr></hr>
2.       Consultancy Period
(a)      Commencement. This Agreement shall commence on the Effective Date and shall remain in effect until the completion of the Services or the earlier termination of this Agreement as provided in Article 2 (b) (the “Consultancy Period”).
(b)      Termination- This Agreement may be terminated by either Party by giving 30 calendar days written notice of such termination to the other Party in the event of a material breach by the other Party. “Material breach” shall include: (i) any violation of the terms of Articles 1 (d), 3, 4, 5, 6, 8, 10 and 11,
(c)     Effect of Termination. Upon the effective date of termination of this Agreement, all legal obligations, rights and duties arising out of this Agreement shall terminate except for such legal obligations, rights and duties as shall have accrued prior to the effective date of termination and except as otherwise expressly provided in this Agreement.
<br></br>
<br></br><hr></hr>
3.  Consultancy Fee and Expenses
(a)      Consultancy Fee. In consideration of the Services to be rendered hereunder, the Company shall pay Consultant a Consultancy fee as per Annexure-II.
(b)      Expenses. On a case to case basis and on specific assignments the company may agree to reimburse certain expenses. The company will issue a letter in writing detailing the nature of reimbursement and the amounts that will be reimbursed. Based on the above, the Consultant shall be entitled to reimbursement for all pre-approved expenses reasonably incurred in the performance of the Services, upon submission and approval of written statements and receipts in accordance with the written agreement in this regard. No expenses would be reimbursed without any written agreement.
(c)      Payment. The Consultant shall submit to the Company a monthly invoice detailing the Services performed during the preceding month and the amount due. All such invoices shall be due and payable as per the slabs mentioned below  after receipt thereof by the Company.
<br></br>
<br></br><hr></hr>
        <table className="table-auto w-full border border-gray-300 mt-4 ">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Invoice Amount</th>
              <th className="border px-4 py-2">Payment Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Below 100,000</td>
              <td className="border px-4 py-2">In 60 Days</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Above 1 lakh</td>
              <td className="border px-4 py-2">60 days to 90 days</td>
            </tr>
          </tbody>
        </table>
<br></br>
<br></br><hr></hr>
4.       Work Product and License

(a)      Defined. In this Agreement the term "Work Product" shall mean all work product generated by Consultant solely or jointly with others in the performance of the Services, including, but not limited to, any and all information, notes, material, drawings, records, diagrams, formulae, processes, technology, firmware, software, know-how, designs, ideas, discoveries, inventions, improvements, copyrights, trademarks and trade secrets.

(b)      Ownership. Consultant agrees to assign and does hereby assign to Company all right, title and interest in and to the Work Product. All Work Product shall be the sole and exclusive property of the Company and Consultant will not have any rights of any kind whatsoever in such Work Product.

Consultant agrees, at the request and cost of Company, to promptly sign, execute, make and do all such deeds, documents, acts and things as Company may reasonably require or desire to perfect Company's entire right, title, and interest in and to any Work Product.

Consultant will not make any use of any of the Work Product in any manner whatsoever without the Company’s prior written consent. All Work Product shall be promptly communicated to Company.

(c)      License. In the event that Consultant integrates any work that was previously created by the Consultant into any Work Product, the Consultant shall grant to, and Company is hereby granted, a worldwide, royalty-free, perpetual, irrevocable license to exploit the incorporated items, including, but not limited to, any and all copyrights, patents, designs, trade secrets, trademarks or other intellectual property rights, in connection with the Work Product in any manner that Company deems appropriate. Consultant warrants that it shall not knowingly incorporate into any Work Product any material that would infringe any intellectual property rights of any third party.
<br></br>
<br></br><hr></hr>
5.       Confidential Information
(a)      Defined. In this Agreement the term “Confidential Information” shall mean the Work Product and any and all information relating to the Company’s business, including, but not limited to, research, developments, product plans, products, services, diagrams, formulae, processes, techniques, technology, firmware, software, know-how, designs, ideas, discoveries, inventions, improvements, copyrights, trademarks, trade secrets, customers, suppliers, markets, marketing, finances disclosed by Company either directly or indirectly in writing, orally or visually, to Consultant. Confidential Information does not include information which:
(i) is in or comes into the public domain without breach of this Agreement by the Consultant,

(ii) was in the possession of the Consultant prior to receipt from the Company and was not acquired by the Consultant from the Company under an obligation of confidentiality or non-use,

(iii) is acquired by the Consultant from a third party not under an obligation of confidentiality or non-use to the Company, or

(iv) is independently developed by the Consultant without use of any Confidential Information of the Company.
(b) Obligations of Non-Disclosure and Non-Use. Unless otherwise agreed to in advance and in writing by the Company, Consultant will not, except as required by law or court order, use the Confidential Information for any purpose whatsoever other than the performance of the Services or disclose the Confidential Information to any third party.

Consultant may disclose the Confidential Information only to those of its employees who need to know such information. In addition, prior to any disclosure of such Confidential Information to any such employee, such employee shall be made aware of the confidential nature of the Confidential Information and shall execute, or shall already be bound by, a non-disclosure agreement containing terms and conditions consistent with the terms and conditions of this Agreement. In any event, Consultant shall be responsible for any breach of the terms and conditions of this Agreement by any of its employees. Consultant shall use the same degree of care to avoid disclosure of the Confidential Information as it employs with respect to its own Confidential Information of like importance, but not less than a reasonable degree of care.
(c) Return of Confidential Information. Upon the termination or expiration of this Agreement for any reason, or upon Company’s earlier request, Consultant will deliver to Company all of Company’s property or Confidential Information in tangible form that Consultant may have in its possession or control. The Consultant may retain one copy of the Confidential Information in its legal files.
<br></br>
<br></br><hr></hr>
6.       Interference with Business
(a)      Non-Competition. During the term of this Agreement, Consultant will engage in no business or other activities which are, directly or indirectly, competitive with the business activities of the Company without obtaining the prior written consent of the Company.
(b)      Non-Solicitation. Consultant agrees that for a period of one (1) year after termination of this Agreement, Consultant shall not:

(i) divert or attempt to divert from the Company any business of any kind in which it is engaged, including, without limitation, the solicitation of or interference with any of its suppliers or customers, or

(ii) Employ, solicit for employment, or recommend for employment any person employed by the Company, during the Consultancy Period and for a period of one (1) year thereafter.
<br></br>
<br></br><hr></hr>
7. Insurance
Consultant shall maintain at its sole expense liability insurance covering the performance of the Services by Consultant. Such insurance coverage shall have limits and terms reasonably satisfactory to Company, and Company may require Consultant to provide to Company a certificate of insurance evidencing such coverage.
<br></br>
<br></br><hr></hr>
8. Independent Contractor
<br></br>
<br></br><hr></hr>
The Consultant agrees that all Services will be rendered by it as an independent contractor and that this Agreement does not create an employer-employee relationship between the Consultant and the Company. The Consultant shall have no right to receive any employee benefits provided by the Company to its employees. Consultant agrees to pay all taxes due in respect of the Consultancy Fee and to indemnify the Company in respect of any obligation that may be imposed on the Company to pay any such taxes or resulting from Consultant’s being determined not to be an independent contractor. This Agreement does not authorize the Consultant to act for the Company as its agent or to make commitments on behalf of the Company.
9. Force Majeure
<br></br>
<br></br><hr></hr>
Either Party shall be excused from any delay or failure in performance required hereunder if caused by reason of any occurrence or contingency beyond its reasonable control, including, but not limited to, acts of God, acts of war, fire, insurrection, strikes, lock-outs or other serious labor disputes, riots, earthquakes, floods, explosions or other acts of nature. 
The obligations and rights of the Party so excused shall be extended on a day-to-day basis for the time period equal to the period of such excusable interruption. When such events have abated, the Parties’ respective obligations hereunder shall resume.
<br></br>
<br></br><hr></hr>
10. Non-Publicity
The Consultant agrees not to disclose the existence or contents of this Agreement to any third party without the prior written consent of the Company: (i) to its advisors, attorneys or auditors who have a need to know such information, (ii) as required by law or court order, (iii) as required in connection with the reorganization of a Party, or its merger into any other corporation, or the sale by a Party of all or substantially all of its properties or assets, or  (iv) as may be required in connection with the enforcement of this Agreement.
<br></br>
<br></br><hr></hr>
11. Assignment
The Services to be performed by Consultant hereunder are personal in nature, and Company has engaged Consultant as a result of Consultant’s expertise relating to such Services. Consultant, therefore, agrees that it will not assign, sell, transfer, delegate or otherwise dispose of this Agreement or any right, duty or obligation under this Agreement without the Company’s prior written consent. Nothing in this Agreement shall prevent the assignment by the Company of this Agreement or any right, duty or obligation hereunder to any third party.
<br></br>
<br></br><hr></hr>
12. Injunctive Relief
Consultant acknowledges that a violation of Article 5 or 6 would cause immediate and irreparable harm to the Company for which money damages would be inadequate. Therefore, the Company will be entitled to injunctive relief for Consultant’s breach of any of its obligations under the said Articles without proof of actual damages and without the posting of bond or other security. Such remedy shall not be deemed to be the exclusive remedy for such violation, but shall be in addition to all other remedies available at law or in equity.
<br></br>
<br></br><hr></hr>
13. Governing Law and Dispute Resolution
This Agreement shall be governed by and construed in accordance with the laws of India without giving effect to any choice of law or conflict of law provisions. The Parties consent to the jurisdiction and venue in the courts of Pune in the city of Pune.
<br></br>
<br></br><hr></hr>
14. General
This Agreement constitutes the entire agreement of the Parties on the subject hereof and supersedes all prior understandings and instruments on such subject. This Agreement may not be modified other than by a written instrument executed by duly authorized representatives of the Parties.
Should any provision of this Agreement be held by a court of competent jurisdiction to be illegal, invalid or unenforceable, such provision may be modified by such court in compliance with the law giving effect to the intent of the Parties and enforced as modified. All other terms and conditions of this Agreement shall remain in full force and effect and shall be construed in accordance with the modified provision.
<br></br>
<br></br><hr></hr>
15. Survival of Provisions
The following provision of this Agreement shall survive the termination of this Agreement: Articles 2 (c), 3, 4, 5, 6 (b), 7, 8, 10 and 15 and all other provisions of this Agreement that by their nature extend beyond the termination of this Agreement. 
IN WITNESS WHEREOF, and intending to be legally bound, the Parties have duly executed this Agreement by their authorized representatives as of the date first written above.

        </p>
      </div>
      </div>
      <div className="flex items-center space-x-2">
  <input
    type="checkbox"
    className="accent-blue-600"
    {...register("agreedToTerms", {
      required: "You must agree to the terms and conditions", })} />
  <label>I agree to the Terms and Conditions *</label>
</div>
{errors.agreedToTerms && (
  <p className="text-red-500 text-sm">{errors.agreedToTerms.message}</p>
)}

          <div className='submit' >
            <button onClick={handleSubmit(onSubmit)}>Submit</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Pagefile