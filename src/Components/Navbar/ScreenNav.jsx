import { useEffect, useRef, useState } from "react";
import './Nav.css'
import { ImLeaf } from "react-icons/im";
import { ListName } from "../../Utiliti/data";
import { useTranslation } from "react-i18next";
export const ScreenNav = ({language}) => {
    const [menuIsOpen,setMenuIsOpen]=useState(false);
    let menuRef=useRef();
    let handleClick=()=>{
        setMenuIsOpen(!menuIsOpen)
    }
        const {t,i18n } = useTranslation();
           useEffect(()=>{
           if (language)
            i18n.changeLanguage(language);
        
          },[language,i18n]);

        useEffect( () =>
    {
        let handler = ( e ) =>
        {
            if ( !menuRef.current.contains( e.target ) )
            {
                setMenuIsOpen( false );
            }
        };
        document.addEventListener( "mousedown", handler );
        return () =>
        {
            document.removeEventListener( "mousedown", handler );
        }

    } )
    return (
        <section className="md:hidden z-400 " ref={menuRef} >
                <ImLeaf onClick={handleClick}  className={`flex text-green-400 relative ${language ==='arabic'?'left-0 ':'right-0'}  text-2xl cursor-pointer`}/>
                
                <ul  className={` text-xsl text-gray-600 flex-col absolute  ${language === 'arabic'?'left-1':'right-0'} border-green-400 border-3 z-400 ${menuIsOpen?'flex':'hidden'} slide-bottom`}>
             {
                 ListName.map((ele) => (
                    <li key={ele.key} className={`border-b-2 px-4 py-2 z-4000 bg-lime-400  center flex items-center justify-center  border-green-400 hover:text-green-400 font-bold text-gray-950 ${ele.key==5? "border-none":""} cursor-pointer`}>
                        <a href={`#${ele.title}`}>{ele.title}</a></li>
                 ))
             }
        </ul>
    </section>
    )
}
