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
        className='h-[600px]'
      >
        <SwiperSlide className=' bg-no-repeat  bg-cover text-center items-center    bg-[url(/public/10-Companies-That-Hire-for-Remote-Real-Estate-Jobs-1024x512.jpg)]'><h1 className=' text-3xl font-bold' >Choice your home  <br />
          Make your invest safe</h1></SwiperSlide>
        <SwiperSlide className=' bg-no-repeat bg-cover  bg-[url(/public/hero-real-estate-facts-trends.jpeg)]'></SwiperSlide>
        <SwiperSlide  className=' bg-no-repeat bg-cover  bg-[url(/public/house-1867187_1920.jpg)]'></SwiperSlide>
        <SwiperSlide  className=' bg-no-repeat bg-cover  bg-[url(/public/pexels-david-mcbee-1546168.jpg)]'></SwiperSlide>
        <SwiperSlide  className=' bg-no-repeat bg-cover  bg-[url(/public/What_are_real_estate_comps.jpg)]'></SwiperSlide>
       
      </Swiper>
    );
};

export default BannerSlider;