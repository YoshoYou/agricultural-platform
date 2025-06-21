import './Home.css'
export const Home = () => {

  return (
    <div className="  home full-size " id="Home">
        <img className=" h-100 w-screen sm:h-screen   bg-[url('../../assets/land_3.jpg')] bg-cover bg-center"  />
        {/* <img src={field} alt="" /> */}
        <p className="absolute hidden sm:block text-4xl w-fit  leading-[2]  sm:leading-[1.4] left-10  top-30 sm:top-50 md:left-40 text-sky-100  font-bold sm:w-120 sm:text-5xl  ">Agriculture Matters to the Future Of Development</p>
    </div>
  )
}
