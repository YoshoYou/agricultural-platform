import './App.css'
import './Components/Styles/styles.css'
import { Navbar } from './Components/Navbar/Navbar';
import { Home } from './Components/Home/Home';
import AboutMe from './Components/AboutMe/AboutMe';
import EnArButton from './Components/EnArButton/EnArButton';
import { useState } from 'react';
import { ContactForm } from './Components/ContactForm/ContactForm';
function App ()
{
    const [selectedValue, setSelectedValue] = useState('english');
    const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };



  return (
    <div className={`${selectedValue==='english'?'text-direction-en':'text-direction-ar '}`}>
     <>
    <select className={`absolute ${selectedValue==='arabic'?'top-[45px] left-[10px]  ':'top-[45px] right-[12px]'} z-100 `} name="select language"  onChange={handleSelectChange}>
      <option value="arabic" > عربي</option>
      <option  value="english" selected> English</option>
    </select>
      </>  
      <Navbar language={selectedValue} />
      <Home language={selectedValue} />
      <AboutMe language={selectedValue} />
      <ContactForm language={selectedValue} />
    </div>
  )
}

export default App
