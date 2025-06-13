import { useEffect, useState } from "react";
import { floral, flow, flowers, jouney, maya, planting, pre_agr, sakura } from "../../assets/export"
import { AboutTheOwnerAr, AboutTheOwnerEn } from "../../Utiliti/data"
import './AboutMe.css'

const AboutMe = ({language}) => {
     const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
                if (window.scrollY >= 400) { // Example target height of 400 pixels
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };      
    }, []);
  return (
    <>
        <div className="  flex justify-center md:m-16   items-center sm:m-10 m-5" id="About">
            <img className=" w-15 sm:w-30 sm:mr-20 mr-10  " src={pre_agr} alt="" />
            <span className=" text-4xl sm:text-7xl/25 tracking-widest  text-lime-400">Maya  Jouney</span>
        </div>
        <div className="flex lg:flex-row flex-col-reverse  m-16 sm:justify-between items-center gap-9  justify-center overflow-hidden ">
            {
                language==='english'&&
                AboutTheOwnerEn.map((ele)=>(
                        <div className={`${isVisible?'slide-right':''}  basis-1/3 flex flex-col justify-center items-center flex-1 relative  -left-400 overflow-hidden`} key={ele.key}>
                            <p className=" aboutme-p sm:text-2xl/13 sm:p-5 text-l/15 leading-[2] tracking-widest p-2">{ele.des}</p>
                             <button className=" rounded-4xl w-50 hover:bg-green-400 p-4 m-10 bg-lime-400 cursor-pointer">
                            <a href="" className=" text-lg font-semibold" download="">Download CV</a>
                            </button>
                        </div>
                ))
            }
            {
                language==='arabic'&&
                AboutTheOwnerAr.map((ele)=>(
                        <div className={`${isVisible?'slide-right':''}  basis-1/3 flex flex-col justify-center items-center flex-1 relative  -left-400 overflow-hidden`} key={ele.key}>
                            <p className=" aboutme-ar sm:text-2xl/13 sm:p-5 text-l/15 leading-[2] p-2">{ele.des}</p>
                             <button className=" rounded-4xl w-50 hover:bg-green-400 p-4 m-10 bg-lime-400 cursor-pointer">
                            <a href="" className=" text-lg font-semibold" download="">Download CV</a>
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

    </>

  )
}

export default AboutMe
