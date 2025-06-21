import { useEffect, useState } from "react";
import {  flowers, jouney, maya, maya_jouney_CV, planting, pre_agr, sakura } from "../../assets/export"
import { AboutTheOwnerAr, AboutTheOwnerEn } from "../../Utiliti/data"
import './AboutMe.css'

const AboutMe = ({language}) => {
     const [isVisible, setIsVisible] = useState(false);
     const [width, setWidth] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
                if (width >=640 && window.scrollY >= 700 ) { // Example target height of 400 pixels
                    
                    setIsVisible(true);
                } 
               else if (width <= 640 && window.scrollY >= 200 ) { // Example target height of 100 pixels for small screen

                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            };
            const handleResize =()=>{
                setWidth(window.innerWidth)
            }

            window.addEventListener('resize',handleResize)
            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
                window.addEventListener('resize',handleResize)

            };      
    });
  return (
    <div className="my-15">
        <div className="  flex justify-center md:m-16   items-center sm:m-10 " id="About">
            <img className=" w-15 sm:w-30   " src={pre_agr} alt="" />
           {language=='english' &&  <span className=" text-3xl sm:text-7xl/25  tracking-widest ml-10 text-lime-400">Maya  Jouney</span>}
           {language=='arabic' &&  <span className="content-ar text-4xl sm:text-7xl/25 mr-10  text-lime-400">  مايا جوني</span>}
        </div>
        <div className="flex lg:flex-row flex-col-reverse  m-5 sm:m-16 sm:justify-between items-center   justify-center overflow-hidden ">
            {
                language==='english'&&
                AboutTheOwnerEn.map((ele)=>(
                        <div className={`${isVisible?'slide-right':''}  basis-1/3 flex flex-col justify-center items-center flex-1 relative  -left-400 text-center `} key={ele.key}>
                            <p className=" aboutme-p sm:text-2xl/13 sm:p-5 text-l/15 leading-[2] tracking-widest p-2">{ele.des}</p>
                             <button className=" rounded-4xl w-50 hover:bg-green-400 p-4 m-10 bg-lime-400 cursor-pointer">
                            <a href={maya_jouney_CV} className=" text-lg font-semibold" download="">Download CV</a>
                            </button>
                        </div>
                ))
            }
            {
                language==='arabic'&&
                AboutTheOwnerAr.map((ele)=>(
                        <div className={`${isVisible?'slide-right':''}  basis-1/3 flex flex-col justify-center items-center flex-1 relative  -left-400 text-center`} key={ele.key}>
                            <p className=" content-ar sm:text-2xl/13 sm:p-5 text-l/15 leading-[2] p-2 w-full">{ele.des}</p>
                             <button className=" rounded-4xl w-50 hover:bg-green-400 p-4 m-10 bg-lime-400 cursor-pointer">
                            <a href={maya_jouney_CV} className=" text-lg font-semibold" download="">Download CV</a>
                            </button>
                        </div>
                ))
            }
            <div className={`${isVisible?'slide-left':''} relative -right-400 `}>
                <img className={`  basis-2/3 flex-1 w-100 rounded-4xl mb-14`} src={jouney} alt="" />
            </div>
        </div>
        <div className="flex justify-center items-center w-full mb-15  ">
            <img src={sakura} className="50 w-40  " alt="floral" />
        </div>

    </div>

  )
}

export default AboutMe
