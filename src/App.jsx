import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChangeSection from './ChangeSection';

function App() {
  const [currentSection, setCurrentSection] = useState('personal-info');

  const changeSection = (section) => {
    setCurrentSection(section);
  };

  return (
    <div>
      <section className='content'>
        <div>
          <h1>Current Section: {currentSection}</h1>
        </div>


        {currentSection === 'personal-info' && (
          <div className="personal-info">
            <label htmlFor="full-name">Full Name</label>
            <input type="text" id='full-name' name='fullName' placeholder='John Wick' />

            <label htmlFor="email">Email</label>
            <input type="text" id='email' name='email' placeholder='johnwick@gmail.com' />

            <label htmlFor="phone-number">Phone Number</label>
            <input type="text" id='phone-number' name='phoneNumber' placeholder='(555) 555-5555' />

            <label htmlFor="location">Location</label>
            <input type="text" id='location' name='location' placeholder='Dallas, TX' />
          </div>
        )}

        <ChangeSection changeSection={changeSection} />
      </section>



    </div>
  )
}

export default App
