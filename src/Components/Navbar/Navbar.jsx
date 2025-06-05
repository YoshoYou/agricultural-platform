import "tailwindcss"
// import { logo1 } from '../../assets/export';
import { SiOverleaf } from 'react-icons/si';
import 'C:/Users/NewTech/agricultural-platform/src/App.css'
import { ScreenNav } from './ScreenNav';
import { ListName } from "../../Utiliti/data";
import { useState } from "react";
export const Navbar = () =>
{
  const [ click, handleClick ] = useState( false );
  const clickEvent = (e) =>
  {
    handleClick( true );
    if ( click )
    {
      e.classList.add( 'border-bottom' );
      console.log( click );
    }
  }
  return (
    <nav className='sticky '>
      <section className='green-side  bg-green-400 w-full h-6'></section>
      <section className='white-side py-3 px-16  flex flex-row justify-between border-b-3 border-green-400'>
        <caption className="flex justify-center items-center">
          <SiOverleaf className="text-4xl text-green-400 " />
          <figcaption className="font-bold text-2xl">Jouney</figcaption>
        </caption>
        <ul className="flex flex-row gap-4 text-xl text-gray-600 ">
          {
            ListName.map( ( e ) => (
              <li  className="cursor-pointer" key={e.key} >{e.title}</li>
            )) 
          }
          <ScreenNav />
        </ul>
      </section>
    </nav>
  )
}
