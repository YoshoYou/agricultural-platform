import "tailwindcss"
import { SiOverleaf } from 'react-icons/si';
import { ScreenNav } from './ScreenNav';
import { ArabicListName, ListName } from "../../Utiliti/data";
import { useState } from "react";
import EnArButton from "../EnArButton/EnArButton";
export const Navbar = ({language}) =>
{
  return (
    <nav className={`sticky ${language} `}>
      <section className='green-side  bg-lime-400 w-full h-6'></section>
      <section className='white-side sm:px-16 py-3 px-4  flex flex-row justify-around items-center border-b-3 border-lime-400'>
        <div className="flex justify-center items-center">
          <SiOverleaf className="text-4xl text-green-400 " />
          <figcaption className="font-bold text-2xl">Jouney</figcaption>
        </div>
        <ul className=" md:flex hidden flex-row gap-4 text-xl text-gray-600 ">
          {language==='english'&&
            ListName.map( ( e ) => (
              <li  className="cursor-pointer text-gray-950 font-medium hover:text-green-400" key={e.key} >
                <a href={`#${e.key}`}>{e.title}</a></li>
            )) 
          }
          {language==='arabic'&&
            ArabicListName.map( ( e ) => (
              <li  className="cursor-pointer text-gray-950 font-medium hover:text-green-400" key={e.key} >
                <a href={`#${e.key}`}>{e.title}</a></li>
            )) 
          }
          {/* <button /> */}
        </ul>
        <ScreenNav />
      </section>
    </nav>
  )
}
