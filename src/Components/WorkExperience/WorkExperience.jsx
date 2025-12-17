import { useEffect, useRef, useState } from "react"
import { Experience } from "../../Utiliti/data"
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import './WorkExperience.css'
import SlideShow from "../SlideShow/SlideShow";
import { useTranslation } from "react-i18next";
import { useMood } from "../UseContext/MoodContext";

 export const WorkExperience = () => {
      const {t,i18n } = useTranslation();
      const {language,theme}=useMood();
  
         useEffect(()=>{
         if (language)
          i18n.changeLanguage(language);
      
        },[language,i18n]);



  return (
    <div className="  mx-15 mt-15 mb-40 " id="Project">
        <p className="text-3xl w-fit   sm:text-5xl    my-10 text-lime-400 md:p-10">{t("workExperience")}</p>
       <div className="flex justify-center items-center  relative  ">
      <div className="  sm:flex flex-row  sm:w-full hidden   gap-6 h-fit    flex-wrap   " >        
        {
            Experience.map((e)=>(
              <img className="lg:w-70 lg:h-75 w-60 h-50 p-2 border-4 border-green-400" src={e.img} key={e.id} alt="" />
            ))
        }
      </div>
      </div>
      <div className="sm:hidden">
        <SlideShow />
      </div>
    </div>
  )
}

