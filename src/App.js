import React, { useState }  from 'react';
import './App.css';
import ContactForm from './ContactForm';
import ProfileInfo from './ProfileInfo';

function App()  {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [profileData, setProfileData] = useState({});

  function submitForm(values) {
    setIsSubmitted(true)
    console.log('values', values)
    setProfileData(values)
  }
 
  return (
    <div className="container">
      <ContactForm submitForm={submitForm} />
      {isSubmitted ? <ProfileInfo values={profileData} /> : '' }
    </div>
  );
}

export default App;
