import { useEffect } from "react";
import { floral, lotus ,insta,facebook,telegram, rightC } from "../../assets/export"
import { useTranslation } from "react-i18next";

export const Footer = ({language}) => {
  const {t,i18n } = useTranslation();
         useEffect(()=>{
         if (language)
           i18n.changeLanguage(language);
        },[language,i18n]);
  return (
    <footer className={`flex flex-col bg-lime-400 sm:px-10 py-5 px-5 `}>
        <p>{t("footer")}</p> 
       <div className={`m-5 w-30 text-lg ${language === 'arabic'?'flex justify-end flex-col':'flex flex-col justify-start'} `}>
            <a  href="" className={`flex flex-row justify-between m-1 p-1 hover: cursor-pointer hover:text-green-700`}> <img src={facebook} className={`w-7 h-7 ${language === 'arabic'?'ml-10':'mr-10'} `} alt="" />{t("facebook")}</a>
            <a  href="" className="flex flex-row justify-between m-1 p-1 hover: cursor-pointer hover:text-green-700"> <img src={insta} className={`w-7 h-7 ${language === 'arabic'?'ml-10':'mr-10'}  `} alt="" />{t("insta")}</a>
            <a  href="" className="flex flex-row justify-between m-1 p-1 hover:cursor-pointer hover:text-green-700" > <img src={telegram} className={`w-7 h-7 ${language === 'arabic'?'ml-10':'mr-10'}  `}alt="" />{t("tele")}</a>
       </div>
    <p className="flex flex-row justify-center text-center bg-green-400 w-full">All the right reserved 2025 <img src={rightC} className="w-10 h-8" alt="" /> Aya Jouney </p>
    </footer>
  )
}
