import React from "react";
import BGIMG from "../../assets/Images/13.webp";
import Shape1 from "../../assets/Images/br_shape1.png";
import Shape2 from "../../assets/Images/br_shape2.png";
import { Link } from "react-router-dom";

const BannerSection = ({ title, desc }) => {

  const isMobile = window.innerWidth < 760;

  return (
    <section
      className="min-h-[350px] font-Jakarta flex flex-col items-center justify-center "
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${BGIMG})`,
        backgroundPosition: "right",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="h-[138px] w-full flex flex-row items-center justify-center relative">
        <div className="container w-[90%] z-10">
          <h2 className="text-[1.5rem] md:text-[2.5rem] lg:text-[3rem]  font-bold text-left text-white capitalize">
            {title}
          </h2>
          {!isMobile && <p className="text-white text-[14px] md:text-[16px] mt-6">{desc}</p>}
          {/* <ul className="flex flex-row space-x-2 h-fit py-2 items-center bg-white rounded-md capitalize w-fit px-5 font-semibold ">
            <Link to={"/"}>Home /</Link>
            <a>{title}</a>
          </ul> */}
        </div>

        <div className="absolute inset-0 w-[95%] flex flex-row justify-between">
          <div className="animate-zoomin">
            <img src={Shape1} alt="" />
          </div>
          <div className="flex flex-row w-[200px] relative animate-zoomin">
            <img src={Shape2} alt="" />
            <div className="absolute flex flex-row justify-between inset-0 space-y-1">
              <div className="aboslute  bottom-0 w-[40px] h-[40px] bg-white rounded-full"></div>
              <div className="w-[80px]  h-[80px] bg-white/10 lg:bg-white md:bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;

{
  /* <section className='min-h-[450px] font-Jakarta flex flex-col items-center justify-center bg-right bg-no-repeat bg-cover' style={{
    background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${BGIMG}) no-repeat`,
}}>
    <div className="h-[138px] w-full flex flex-row  items-center justify-center relative ">
        <div className='container w-[90%] z-10  flex md:flex-row flex-col lg:flex-row items-center gap-0  lg:gap-40'>

            <div>
            <h2 className='text-[60px] font-bold text-left'>{title}</h2>
          
          <ul className='flex flex-row space-x-2 h-[25px] items-center bg-white rounded-md w-fit px-5 font-semibold '>
              <Link to={"/"}>Home /</Link>
              <a>{title}</a>
         </ul>

            </div>
            <div className='  flex-col gap-8 items-center justify-center font-Jakarta text-white -ml-10 lg:flex hidden'>
  <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:false}} transition={{duration:0.8,ease:'easeInOut'}} className='text-[1.8rem] font-bold text-center'>{heading}</motion.h2>
  <p className='text-white text-[1rem] font-medium text-center'>{description}</p>
  <Link to={'/contactus'}><motion.button initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:false}} transition={{duration:0.8,ease:'easeInOut'}} className='text-[1.2rem] bg-primary py-2 px-4 rounded-lg text-white font-semibold '>{cta}</motion.button></Link>
  

</div>
       
       
           
        </div>

        
        

        <div className='absolute inset-0 w-[95%] flex flex-row justify-between'>

        <div className='animate-zoomin'>
            <img src={Shape1} alt="" />
        </div>
        <div className='flex flex-row w-[200px] relative animate-zoomin'>
            <img src={Shape2} alt="" />
            <div className='absolute flex flex-row justify-between inset-0 space-y-1'>
            <div className='aboslute  bottom-0 w-[40px] h-[40px] bg-white rounded-full'></div>
            <div className='w-[80px]  h-[80px] bg-white rounded-full'></div>
                
            </div>
        </div>

        </div>



    </div>

</section> */
}
