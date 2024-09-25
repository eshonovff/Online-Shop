import { useDispatch, useSelector } from "react-redux";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './swiper.css';

// Import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useEffect } from "react";
import { Gettodo } from "../Api/TodoApi";

const Swiperjs = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.counter);
 
  useEffect(() => {
    dispatch(Gettodo());
  }, [dispatch]); // Adding 'dispatch' to the dependency array

  return (
    <div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {data.map((elem) => {
          return (
            <SwiperSlide key={elem.id}> {/* Add unique 'key' prop */}
              <img src={elem.image} alt={elem.title || "Image"} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Swiperjs;
