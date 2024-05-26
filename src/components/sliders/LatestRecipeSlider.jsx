/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";

const LatestRecipeSlider = ({recipes}) => {

  return (
   <>
   <h1 className="my-10 text-4xl font-bold text-center">Latest Recipes</h1>
    <div className="flex flex-col items-center justify-center ">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
         
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-full "
      >
        {recipes && recipes?.slice(0,9)?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-center bg-cover aspect-[3/4]"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-60" />
              <div className="relative flex flex-col gap-3">
                {/* <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" /> */}
                <h1 className="text-xl font-bold uppercase lg:text-2xl drop-shadow-lg">{item.title} </h1>
                <h1 className="text-sm drop-shadow-lg">{item.category} </h1>
                <p className="lg:text-[18px] drop-shadow-lg">{item.description} </p>
              </div>
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-red-500 group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
   </>
  );
};
export default LatestRecipeSlider