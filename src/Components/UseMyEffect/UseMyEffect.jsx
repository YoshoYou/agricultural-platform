import { useEffect } from "react"
import './../../i18n'
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

const UseMyEffect = ({prop}) => {
      const {t,i18n } = useTranslation();
    
      useEffect(()=>{
       if (prop)
        i18n.changeLanguage(prop);
    
      },[prop,i18n]);
    
}

export default UseMyEffect
