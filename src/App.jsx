import './App.css'
import './i18n'
import './Components/Styles/styles.css'
import { Navbar } from './Components/Navbar/Navbar';
import { Home } from './Components/Home/Home';
import AboutMe from './Components/AboutMe/AboutMe';
import { useEffect, useRef, useState } from 'react';
import { ContactForm } from './Components/ContactForm/ContactForm';
import { Footer } from './Components/Footer/Footer';
import { WorkExperience } from './Components/WorkExperience/WorkExperience';
import SlideShow from './Components/SlideShow/SlideShow';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { bright, darkMood, lightMood } from './assets/export';
import { useMood } from './Components/UseContext/MoodContext';


function App ()
{

   

    const {theme,language}=useMood();
  return (
    <div className={`${language==='english'?'text-direction-en ':'text-direction-ar '} ${theme === 'light' ? 'bg-white' : 'bg-black'}`}>
      <Navbar   />
      <Home  />
      <AboutMe />
      <WorkExperience />
      <ContactForm />
      {/* <SlideShow /> */}
      <Footer  />
    </div>
  )
}

export default App
