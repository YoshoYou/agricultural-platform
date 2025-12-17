import './Home.css'
import '../../App.css'
import './../../i18n'
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { changeLanguage } from 'i18next';

import { useMood } from '../UseContext/MoodContext';


export const Home = () => { 
  const {theme,language}=useMood();
   const {t,i18n } = useTranslation();
   
    useEffect(()=>{
       if (language)
        i18n.changeLanguage(language);
    
      },[language,i18n]);
  return (
  <div className={`  home full-size `} id="Home">
        <img className=" h-100 w-screen sm:h-screen   bg-[url('../../assets/land_3.jpg')] bg-cover bg-center"  />
        <p className={`absolute hidden sm:block text-4xl w-fit  leading-[2]  sm:leading-[1.4] ${language ==='arabic'?'right-10 md:right-30':' md:left-40'}  top-30 sm:top-50  text-sky-100  font-bold sm:w-120 sm:text-5xl `}>
         {t("Welcome")}   
        </p>  
    </div>
  )
}
