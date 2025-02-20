import { useState } from 'react';
import hid from './assets/plus.svg'


function General({ formData, handleChange}) {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <>
      <Info
      head="General Information"
        title="Fill all details."
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        <GeneralInfo data={formData.general} onChange={handleChange}></GeneralInfo>
      </Info>

      <Info
      head="Education Experience"
        title="Fill all details"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        <Education data={formData.education} onChange={handleChange}></Education>
      </Info>

      <Info
      head="Company Experience"
        title="Fill all details"
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(2)}
      >
        <CompanyInfo data={formData.company} onChange={handleChange}></CompanyInfo>
      </Info>
    </>
  );
}


function Info({ head, title, children, isActive, onShow }) {
    return (
      <section className="info">
        <div className="header">
          <h2 className="head">{head}</h2>
          <img
              style={{
                height: "20px",
                width: "20px"
              }}
            src={hid}
            alt= "open detail"
            onClick={onShow} 
          />
        </div>
        
        {isActive &&
            <div className="children">
              <h3>{title}</h3>
              <div id='child'>
              {children}
              </div>
           
            </div>
        }
      </section>
  );
}

function GeneralInfo({data, onChange}) {
  
  return (
    <div className="Info general">
   
    <label>
        First name:{' '}
        <input
          type="text"
          name="FirstName"
          placeholder="Oyinade"
          value={data.FirstName}
          onChange={(e) => onChange("general", e.target.name, e.target.value)}
          required
        />
      </label>

      <label>
        Last name:{' '}
        <input
           type="text"
           name="LastName"
           placeholder="Olawoyin"
           value={data.LastName}
           onChange={(e) => onChange("general", e.target.name, e.target.value)}
           required
        />
      </label> 

      <label>
        Email:{' '}
        <input
           type="email"
           name="Email"
           placeholder="Oyinade@gmail.com"
           value={data.Email}
           onChange={(e) => onChange("general", e.target.name, e.target.value)}
           required
        />
      </label>

      <label>
        Phone Number:{' '}
        <input
           type="Number"
           name="PhoneNumber"
           placeholder="555-5555-555"
           value={data.PhoneNumber}
           onChange={(e) => onChange("general", e.target.name, e.target.value)}
           required
        />
      </label>
     
      <label>
        Address:{' '}
        <input
           type="text"
           name="Address"
           placeholder="Food Town"
           value={data.Address}
           onChange={(e) => onChange("general", e.target.name, e.target.value)} 
           required            
        />
      </label>

      <label>
        Nationality:{' '}
        <input
           type="text"
           name="Nationality"
           placeholder="Country"
           value={data.Nationality}
           onChange={(e) => onChange("general", e.target.name, e.target.value)}
           required
        />
      </label>
          
    </div>
  )
}


function Education({ data, onChange }) {

    return (
      <div className="Info education">
     
      <label>
          School Name:{' '}
          <input
            type="text"
            name="SchoolName"
            value={data.SchoolName}
            onChange={(e) => onChange("education", e.target.name, e.target.value)}
            required
          />
      </label>
  
      <label>
      Course:{' '}
          <input
             type="text"
             name="Course"
             FirstName        value={data.Course}
             onChange={(e) => onChange("education", e.target.name, e.target.value)}
             required
          /> 
      </label>
              
      <label>
          Start Date:{' '}
          <input
             type="text"
             name="StartDate"
             value={data.StartDate}
             onChange={(e) => onChange("education", e.target.name, e.target.value)}
             required
          />
        </label>
        
  
        <label>
          Date of Study:{' '}
          <input
             type="text"
             name="DateOfStudy"
             value={data.DateOfStudy}
             onChange={(e) => onChange("education", e.target.name, e.target.value)}
             required
          />
        </label>
      </div>
    )
}

function CompanyInfo({ data, onChange}) {

    return (
      <div className="Info company">
     
      <label>
          Company Name:{' '}
          <input
            type="text"
            name="CompanyName"
            value={data.CompanyName}
            onChange={(e) => onChange("company", e.target.name, e.target.value)}
            required
          />
        </label>
  
        <label>
          Position Title:{' '}
          <input
             type="text"
             name="Position"
             value={data.Position}
             onChange={(e) => onChange("company", e.target.name, e.target.value)}
             required
          />
        </label>
  
        <label>
          Worked From:{' '}
          <input
            type="text"
            name="StartDate"
            value={data.StartDate}
            onChange={(e) => onChange("company", e.target.name, e.target.value)}
            required
          />
        </label>

        <label>
          Worked Until:{' '}
          <input
             type="text"
             name="EndDate"
              value={data.EndDate}
              onChange={(e) => onChange("company", e.target.name, e.target.value)}
              required
          />
        </label>

        <label>
        Main responsibilities of your jobs:{' '}
          <textarea
             value={data.Responsibilities}
             name="Responsibilities"
             onChange={(e) => onChange("company", e.target.name, e.target.value)}
             required
          />
        </label>

      </div>
    )
}


function ShowDetails({ formData}) {
  return (
    <div>

      <section className="section">
        <h1>Collected Information</h1>

        <div className="details">  
          <h2>General Information</h2>
          <li><span>First Name:</span> {formData.general.FirstName}</li>
          <li><span>Last Name:</span> {formData.general.LastName}</li>
          <li><span>Email:</span> {formData.general.Email}</li>
          <li><span>Phone Number:</span> {formData.general.PhoneNumber}</li>
          <li><span>Address:</span> {formData.general.Address}</li>
          <li><span>Nationality:</span> {formData.general.Nationality}</li>
        </div>
          
        <div className="details">
          <h2>Education Information</h2>
          <li><span>School Name:</span> {formData.education.SchoolName}</li>
          <li><span>Course:</span> {formData.education.Course}</li>
          <li><span>Date Of Study:</span> {formData.education.DateOfStudy}</li>
        </div>

        <div className="details">
          <h2>Company Information</h2>
            <li><span>Comapny Name:</span> {formData.company.CompanyName}</li>
            <li><span>Position Title: </span> {formData.company.Position}</li>
            <li><span>Main Responsibilities:</span> {formData.company.Responsibilities}</li>
            <li><span>Worked From:</span> {formData.company.StartDate}</li>
            <li><span>Worked Until:</span> {formData.company.EndDate}</li>
        </div>
      </section>

    </div>
  )
}

function App() {
  const [formData, setFormData] = useState({
    general: {
      FirstName: "",
      LastName: "",
      Email: "",
      PhoneNumber: "",
      Address: "",
      Nationality: "",
    },
    education: {
      SchoolName: "",
      Course: "",
      DateOfStudy: "",
    },
    company: {
      CompanyName: "",
      Position: "",
      Responsibilities: "",
      StartDate: "",
      EndDate: "",
    },
  });

  const [showDetails, setShowDetails] = useState(false);

  const handleChange = (category, fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [category]: {
        ...prevData[category],
        [fieldName]: value,
      },
    }));
  };
  

  return (
    <div className="form">
      <div className="cvApplication"> 
        {!showDetails && 
          <>
            <div className="cv">
             <h1>CV APPLICATION FORM</h1>
            </div>
         
            <General formData={formData} handleChange={handleChange} />

            <button
            className="submit"
              type="submit"
              onClick={(e) => {
                e.preventDefault(); 
                setShowDetails(true);
              }}
            >
              Submit
            </button>
          </>}
      </div>
     
      <div className="show">
        {showDetails && 
          <>
            <ShowDetails formData={formData} />
            <button 
            type="button" 
            onClick={() => setShowDetails(false)}
           >
            Edit
          </button>
          </>
         }
      </div>  
    
    </div>
  );
}

export { App }