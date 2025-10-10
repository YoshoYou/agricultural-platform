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


function App ()
{

    const [selectedValue, setSelectedValue] = useState('english');
    const [selectedMood, setSelectedMood] = useState(true);
    const [toggleMood, setToggleMood] = useState(false);
    const handleToggledMood =()=>{
      setToggleMood(!toggleMood);
    }
    const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    };
    const handleSelectedMood = (imgMood)=>{
      setSelectedMood(imgMood);
    }
    useEffect(()=>{
      console.log(selectedMood)
    },[selectedMood]); 
    const listRef=useRef();
           useEffect( () =>
    {
        let handler = ( e ) =>
        {
            if ( !listRef.current.contains( e.target ) )
            {
                setToggleMood( false );
            }
        };
        document.addEventListener( "mousedown", handler );
        return () =>
        {
            document.removeEventListener( "mousedown", handler );
        }

    } )

  return (
    <div className={`${selectedValue==='english'?'text-direction-en':'text-direction-ar '} ${selectedMood?'bg-white':'bg-black'}`}>
     <>
    <select className={`absolute ${selectedMood ? 'text-black':'text-white '} ${selectedValue==='arabic'?'top-[45px] md:left-[10px] left-[110px]  ':'top-[45px] md:right-[12px] right-[120px]'} z-100 cursor-pointer `} name="select language"  onChange={handleSelectChange}>
      <option value="arabic" className={`cursor-pointer text-black   `}> ar</option>
      <option  value="english" className='cursor-pointer text-black' selected> en</option>
    </select>
      <section ref={listRef} >
      <img src={bright}  className={`absolute z-1000  w-8 h-8  cursor-pointer ${selectedValue === 'arabic'?'top-[45px] md:left-[55px] left-[70px]  ':'top-[45px] md:right-[50px] right-[80px]'}`} onClick={handleToggledMood} alt="" />
      <ul   className={`${toggleMood?'':'hidden'} absolute bg-white top-[90px] ${selectedValue === 'arabic'? 'md:left-[55px] left-[70px]':' md:right-[50px] right-[80px]'}  ` } >
        <li><img src={lightMood} className='w-8 h-8 mb-2 cursor-pointer hover:bg-lime-400' alt="" onClick={()=>handleSelectedMood(true)} /></li>
        <li><img src={darkMood} className='w-8 h-8 cursor-pointer hover:bg-lime-400' alt="" onClick={()=>handleSelectedMood(false)} /></li>
      </ul>
      </section>
      </>  
      <Navbar language={selectedValue} mood={selectedMood}  />
      <Home language={selectedValue} />
      <AboutMe language={selectedValue} mood={selectedMood} />
      <WorkExperience />
      <ContactForm language={selectedValue} mood={selectedMood}/>
      {/* <SlideShow /> */}
      <Footer language={selectedValue} />
    </div>
  )
}

export default App
