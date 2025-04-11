import React from 'react'
import { useState } from "react";

const Translateform = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    email: "",
    phone: "",
    location: "",
    city: "",
    education: "",
    college: "",
    primaryLanguage: "",
    otherLanguage: "",
    secondaryLanguages: [],
    languageProficiency: "",
    domain: [],
    expertise: [],
    industry: ""
  });

  const handleChanger = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 
  const [formDetails, setFormDetails] = useState({
    currency: "",
    chargesPerWord: "",
    experience: "",
    cv: null,
    sample: null,
    agreedToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;

    if (type === "file") {
      setFormDetails({ ...formDetails, [name]: files[0] });
    } else if (type === "checkbox") {
      setFormDetails({ ...formDetails, [name]: checked });
    } else {
      setFormDetails({ ...formDetails, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formDetails.agreedToTerms) {
      alert("Please agree to the terms and conditions.");
      return;
    }
    console.log("Submitted details:", formDetails);
  };
  return (
    <div>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto p-4 formtranslate">
      <div className="grid grid-cols-2 gap-4">
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChanger}
          placeholder="First Name"
          required
          className="border p-2 rounded"
        />
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChanger}
          placeholder="Last Name"
          required
          className="border p-2 rounded"
        />
      </div>

      <select
        name="gender"
        value={formData.gender}
        onChange={handleChanger}
        required
        className="border p-2 rounded w-full"
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChanger}
        required
        className="border p-2 rounded w-full"
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChanger}
        placeholder="Email"
        required
        className="border p-2 rounded w-full"
      />

      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChanger}
        placeholder="Phone"
        required
        className="border p-2 rounded w-full"
      />

      <select
        name="location"
        value={formData.location}
        onChange={handleChanger}
        required
        className="border p-2 rounded w-full"
      >
        <option value="">Current Location</option>
        <option value="India">India</option>
        <option value="Other">Other</option>
      </select>

      {formData.location === "India" && (
        <select
          name="city"
          value={formData.city}
          onChange={handleChanger}
          className="border p-2 rounded w-full"
        >
          <option value="">Select City</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Bangalore">Bangalore</option>
        </select>
      )}

      <select
        name="education"
        value={formData.education}
        onChange={handleChanger}
        required
        className="border p-2 rounded w-full"
      >
        <option value="">Select Education</option>
        <option value="High School">High School</option>
        <option value="Bachelor's">Bachelor's</option>
        <option value="Master's">Master's</option>
        <option value="PhD">PhD</option>
      </select>

      <input
        type="text"
        name="college"
        value={formData.college}
        onChange={handleChanger}
        placeholder="Name of College"
        className="border p-2 rounded w-full"
      />

<select name="primaryLanguage" onChange={handleChange} required className="border p-2 rounded w-full">
        <option value="">Select Primary Language</option>
        <option>English</option>
        <option>Hindi</option>
        <option>Spanish</option>
      </select>

      <input
        name="otherLanguage"
        placeholder="If others, please specify"
        className="border p-2 rounded w-full"
        onChange={handleChange}
      />

      <select
        name="secondaryLanguages"
        multiple
        onChange={handleChange}
        className="border p-2 rounded w-full h-32"
      >
        {["ASL", "Afrikaans", "Akan", "Albanian", "Amharic"].map((lang) => (
          <option key={lang}>{lang}</option>
        ))}
      </select>

      <select name="languageProficiency" onChange={handleChange} required className="border p-2 rounded w-full">
        <option value="">Select Language Proficiency</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
        <option>Native</option>
      </select>

      <select
        name="domain"
        multiple
        onChange={handleChange}
        className="border p-2 rounded w-full h-32"
      >
        {["Technical", "Educational", "Medical", "Legal"].map((domain) => (
          <option key={domain}>{domain}</option>
        ))}
      </select>

      <select
        name="expertise"
        multiple
        onChange={handleChange}
        className="border p-2 rounded w-full h-32"
      >
        {["Translation", "Proofreading", "Reviewing", "Editing"].map((expertise) => (
          <option key={expertise}>{expertise}</option>
        ))}
      </select>

      <input
        name="industry"
        placeholder="Industry"
        className="border p-2 rounded w-full"
        onChange={handleChange}
      />
       <select
        name="currency"
        onChange={handleChange}
        className="border p-2 rounded w-full"
      >
        <option value="">Select Currency</option>
        <option value="INR">INR</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>

      <input
        type="number"
        name="chargesPerWord"
        placeholder="Charges Per Word"
        className="border p-2 rounded w-full"
        onChange={handleChange}
      />

      <input
        type="number"
        name="experience"
        placeholder="Experience in Years"
        className="border p-2 rounded w-full"
        onChange={handleChange}
        required
      />

      <div>
        <label className="block font-medium mb-1">Upload CV</label>
        <input
          type="file"
          name="cv"
          accept=".pdf,.doc,.docx"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Upload Sample</label>
        <input
          type="file"
          name="sample"
          accept=".pdf,.doc,.docx"
          onChange={handleChange}
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
          onChange={handleChange}
          className="accent-blue-600"
        />
        <label>I agree to the Terms and Conditions *</label>
      </div>

      <button type="submit" className="bg-blue-600 text-black py-2 px-4 rounded">
        Submit
      </button>
    </form>
    </div>
  )
}

export default Translateform