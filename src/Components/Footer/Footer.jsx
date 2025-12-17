import { useEffect } from "react";
import { floral, lotus ,insta,facebook,telegram, rightC } from "../../assets/export"
import { useTranslation } from "react-i18next";
import { useMood } from "../UseContext/MoodContext";

export const Footer = () => {
  const {t,i18n } = useTranslation();
  const {language,theme } = useMood();
         useEffect(()=>{
         if (language)
           i18n.changeLanguage(language);
        },[language,i18n]);
  return (
    <footer className={`flex flex-col bg-lime-400 sm:px-10 py-5 px-5 `}>
        <p>{t("footer")}</p> 
       <div className={`my-5 w-full sm:text-lg text-sm  flex flex-row justify-between  `}>
            <a  href="" className={`flex flex-row items-center    hover: cursor-pointer hover:text-green-700`}> <img src={facebook} className={`sm:w-7 sm:h-7 w-5 h-5 ${language === 'arabic'?' ml-1 sm:ml-3':'m-1 sm:mr-3'} `} alt="" />{t("facebook")}</a>
            <a  href="" className="flex flex-row items-center  hover: cursor-pointer hover:text-green-700"> <img src={insta} className={` sm:w-7 sm:h-7 w-5 h-5 ${language === 'arabic'?' ml-1 sm:ml-3':' mr-1 sm:mr-3'}  `} alt="" />{t("insta")}</a>
            <a  href="" className="flex flex-row items-center  hover:cursor-pointer hover:text-green-700" > <img src={telegram} className={`sm:w-7 sm:h-7 w-5 h-5 ${language === 'arabic'?' ml-1 sm:ml-3':'mr-1 sm:mr-3'}  `}alt="" />{t("tele")}</a>
       </div>
    <p className="flex flex-row justify-center text-center bg-green-400 w-full">All the right reserved 2025 <img src={rightC} className="w-10 h-8" alt="" /> Aya Jouney </p>
    </footer>
  )
}
