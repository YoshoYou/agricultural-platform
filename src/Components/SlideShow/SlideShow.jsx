import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlideShow.css"
import { Experience } from "../../Utiliti/data";

const SlideShow = () => {
   var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    centerMargin: "20px",
    arrows: true
  };
  return (
    <div className=" !flex !justify-center !text-center  !my-15 ">
    <Slider {...settings} className="!w-50 !h-65 !flex !mb-5 ">
         {
                    Experience.map((e)=>(
                      <div className="">
                      <img className="lg:w-50 lg:h-65 w-50 h-50 p-2 border-4 border-green-400" src={e.img} key={e.id} alt="" />
                      </div>
                    ))
                }
    </Slider>
    </div>
  )
}

export default SlideShow
