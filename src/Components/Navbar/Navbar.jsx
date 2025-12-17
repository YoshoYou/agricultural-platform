import "tailwindcss"
import { SiOverleaf } from 'react-icons/si';
import { ScreenNav } from './ScreenNav';
import {  ListName } from "../../Utiliti/data";
import {  useEffect } from "react";
import { useTranslation } from "react-i18next";
import {  darkMood, lightMood } from "../../assets/export";
import { useMood } from "../UseContext/MoodContext";

export const Navbar = () =>
{
    const {t,i18n } = useTranslation();
    const {language,toggleLanguage,theme,toggleTheme} = useMood();

       useEffect(()=>{
       if (language){
        i18n.changeLanguage(language);
       }
      },[language,i18n]);
       useEffect(()=>{
        localStorage.setItem('language',JSON.stringify(language))
        localStorage.setItem('theme',JSON.stringify(theme))

      },[language,theme]);
      
  return (
    <nav className={` ${theme === 'dark' ? 'text-white' : 'text-black'} sticky border-b-3 border-lime-400   `}>
      <section className='green-side  bg-lime-400 w-full h-6'></section>
      <section className=' py-3 px-4  flex flex-row  justify-around  items-center  md:w-[90%] w-full '>
        <div className="flex justify-center items-center">
          <SiOverleaf className="text-4xl text-green-400 " />
          <figcaption className={` font-bold text-2xl`}>Jouney</figcaption>
        </div>
        <div className="flex justify-center items-center">
                <ul className={`  md:flex  hidden  flex-row gap-4 text-xl text-gray-600  `}>
                  {ListName.map((item)=>(
                    <li  className={` ${theme === 'dark' ? 'text-white' : 'text-black'} cursor-pointer text-gray-950 font-medium hover:text-green-400`} key={t(`${item.title}`)} > <a href={`#${t(`${item.title}`)}`}>{t(`${item.title}`)}</a></li>
                  ))}
              </ul>
                      </div>
              <div className="flex justify-center items-center">
                        <select className={`absolutez-100 cursor-pointer mx-2 outline-none`} defaultValue={`${language}`} name="" onChange={toggleLanguage}>
                            <option value="arabic" className={`cursor-pointer text-black font-medium `}> ar</option>
                            <option  value="english" className='cursor-pointer text-black font-medium'  > en</option>
                          </select>
                          <button className="w-8 h-8 outline-none "  onClick={toggleTheme}>
                             {theme === 'dark' ? <img src={lightMood} className='w-8 h-8 mb-2 cursor-pointer  hover:shadow-[0_10px_4px_-3px_rgba(255,255,255,0.9)]' alt=""   /> :<img src={darkMood} className='w-8 h-8 mb-2 cursor-pointer  hover:shadow-[0_10px_4px_-3px_rgba(120,120,128,0.4)]' alt=""   />  }
                          </button>
                             
              </div>

       
        <ScreenNav />
         

      </section>
    </nav>
  )
}
