import "tailwindcss"
import { SiOverleaf } from 'react-icons/si';
import { ScreenNav } from './ScreenNav';
import { ArabicListName, ListName } from "../../Utiliti/data";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import UseMyEffect from "../UseMyEffect/UseMyEffect";

export const Navbar = ({language,mood}) =>
{
    const {t,i18n } = useTranslation();
       useEffect(()=>{
       if (language)
        i18n.changeLanguage(language);
    
      },[language,i18n]);
    useEffect(()=>{
      window.onload = alert("THIS WEBSITE IS NOT COMPLETED YET , It's in progress ...... \n \n WAIT FOR IT")
  },[])
      
  return (
    <nav className={` ${mood?'text-black':'text-white'} sticky border-b-3 border-lime-400  ${language} `}>
      <section className='green-side  bg-lime-400 w-full h-6'></section>
      <section className=' py-3 px-4  flex flex-row  justify-between items-center  md:w-[90%] w-full '>
        <div className="flex justify-center items-center">
          <SiOverleaf className="text-4xl text-green-400 " />
          <figcaption className={` font-bold text-2xl`}>Jouney</figcaption>
        </div>
        <ul className={`  md:flex  hidden  flex-row gap-4 text-xl text-gray-600  `}>
              <li  className="cursor-pointer text-gray-950 font-medium hover:text-green-400" key={t("Home")}  > <a href={`#${t("Home")}`}>{t("Home")}</a></li>
              <li  className={` ${mood?'text-black':'text-white'} cursor-pointer text-gray-950 font-medium hover:text-green-400`} key={t("About")}  > <a href={`#${t("About")}`}>{t("About")}</a></li>
              <li  className={` ${mood?'text-black':'text-white'} cursor-pointer text-gray-950 font-medium hover:text-green-400`} key={t("Services")} > <a href={`#${t("Services")}`}>{t("Services")}</a></li>
              <li  className={`${mood?'text-black':'text-white'} cursor-pointer text-gray-950 font-medium hover:text-green-400`} key={t("Project")}  > <a href={`#${t("Project")}`}>{t("Project")}</a></li>
              <li  className={` ${mood?'text-black':'text-white'} cursor-pointer text-gray-950 font-medium hover:text-green-400`} key={t("Contact")} > <a href={`#${t("Contact")}`}>{t("Contact")}</a></li>
        </ul>
        <ScreenNav language={language}/>
      </section>
    </nav>
  )
}
