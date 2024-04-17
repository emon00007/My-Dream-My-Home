import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const BannerSlider = () => {
  return (
    // <!-- Slider main container -->
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop={true}
      className='sm:h-[400px] md:h-[400px] lg:h-[600px] z-10'>
      <SwiperSlide >
        <img className='relative w-screen' src="10-Companies-That-Hire-for-Remote-Real-Estate-Jobs-1024x512.jpg" alt="" />
        <div className='absolute hidden lg:block bg-white p-8 rounded-2xl left-[40%] top-[40%]'>
          <h1 className='font-semibold text-xl md:text-2xl md:font-bold lg:text-3xl lg:font-bold' >Choice your home  <br />
            Make your invest safe</h1>
            <p className='mt-4'>Why are you late .take you home <br /> Happy home, happy family </p>
        </div>
      </SwiperSlide>

      <SwiperSlide >
        <img className='relative w-screen' src="hero-real-estate-facts-trends.jpeg" alt="" />
        <div className='absolute hidden lg:block bg-white p-8 rounded-2xl left-[40%] top-[40%]'>
          <h1 className='font-semibold text-xl md:text-2xl md:font-bold lg:text-3xl lg:font-bold' >Choice your home  <br />
            Make your invest safe</h1>
            <p className='mt-4'>Why are you late .take you home <br /> Happy home, happy family </p>
        </div>
      </SwiperSlide>

      <SwiperSlide  >
        <img className='relative w-screen' src="house-1867187_1920.jpg" alt="" />
        <div className='absolute hidden lg:block bg-white p-8 rounded-2xl left-[40%] top-[40%]'>
          <h1 className='font-semibold text-xl md:text-2xl md:font-bold lg:text-3xl lg:font-bold' >Choice your home  <br />
            Make your invest safe</h1>
            <p className='mt-4'>Why are you late .take you home <br /> Happy home, happy family </p>
        </div>
      </SwiperSlide>

      <SwiperSlide >
        <img className='relative w-screen' src="pexels-david-mcbee-1546168.jpg" alt="" />
        <div className='absolute hidden lg:block bg-white p-8 rounded-2xl left-[40%] top-[40%]'>
          <h1 className='font-semibold text-xl md:text-2xl md:font-bold lg:text-3xl lg:font-bold' >Choice your home  <br />
            Make your invest safe</h1>
            <p className='mt-4'>Why are you late .take you home <br /> Happy home, happy family </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <img className='relative w-screen' src="What_are_real_estate_comps.jpg" alt="" />
        <div className='absolute hidden lg:block bg-white p-8 rounded-2xl left-[40%] top-[40%]'>
          <h1 className='font-semibold text-xl md:text-2xl md:font-bold lg:text-3xl lg:font-bold' >Choice your home  <br />
            Make your invest safe</h1>
            <p className='mt-4'>Why are you late .take you home <br /> Happy home, happy family </p>
        </div>
      </SwiperSlide>

    </Swiper>
  );
};

export default BannerSlider;