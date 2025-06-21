import './App.css'
import './Components/Styles/styles.css'
import { Navbar } from './Components/Navbar/Navbar';
import { Home } from './Components/Home/Home';
import AboutMe from './Components/AboutMe/AboutMe';
import { useState } from 'react';
import { ContactForm } from './Components/ContactForm/ContactForm';
import { Footer } from './Components/Footer/Footer';
function App ()
{
    const [selectedValue, setSelectedValue] = useState('english');
    const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };



  return (
    <div className={`${selectedValue==='english'?'text-direction-en':'text-direction-ar '}`}>
     <>
    <select className={`absolute ${selectedValue==='arabic'?'top-[45px] sm:left-[10px] left-[40px]  ':'top-[45px] sm:right-[12px] right-[45px]'} z-100 `} name="select language"  onChange={handleSelectChange}>
      <option value="arabic" > ar</option>
      <option  value="english" selected> en</option>
    </select>
      </>  
      <Navbar language={selectedValue}  />
      <Home language={selectedValue} />
      <AboutMe language={selectedValue} />
      <ContactForm language={selectedValue} />
      <Footer />
    </div>
  )
}

export default App
