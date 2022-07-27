import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Mousewheel } from 'swiper'
import Image from 'next/image'
import Link from "next/link"
import 'swiper/css'
import 'swiper/css/navigation'
import useTranslation from "next-translate/useTranslation";

 const HorizonSwiper = () => {
    
    const { t } = useTranslation();

    const HorizonSwipeData = [
        {
            id : 1,
            image : '/images/ScrollMenu/mobile_ico.png',
            name : 'phones',
        },
        {
            id : 2,
            image : '/images/ScrollMenu/ipad_ico.png',
            name : 'tablets',
        },
        {
            id : 3,
            image : '/images/ScrollMenu/watch_ico.png',
            name : 'watches',
        },
        {
            id : 4,
            image : '/images/ScrollMenu/pc_ico.png',
            name : 'computers',
        },
        {
            id : 5,
            image : '/images/ScrollMenu/accessories_ico.png',
            name : 'accessories',
        },
        {
            id : 6,
            image : '/images/ScrollMenu/camera_ico.png',
            name : 'photoCameras',
        },
        {
            id : 7,
            image : '/images/ScrollMenu/gamepad_ico.png',
            name : 'equipments',
        }
    ]
  return (
    <Swiper
        className="swiper__menu"
        modules={[Navigation, Mousewheel]}
        navigation
        // mousewheel={{ sensivity : 1 }}
        loop
        loopedSlides={6}
        freeMode
        spaceBetween={1}
        slidesPerView={6}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
            0: {
                slidesPerView: 2,
              },
              480: {
                slidesPerView: 3,
              },
              705: {
                slidesPerView: 4,
              },
              1366: {
                slidesPerView: 6,
              },
              1920: {
                slidesPerView: 7,
              },
          }}
    >
        {HorizonSwipeData.map(slide => (
        <SwiperSlide key={slide.id} className="menu__slide">
            <div className='menu__slide__content'>
                <div className='menu__slide__image'>
                    <Image src={slide.image} alt="slide.name" width={42} height={46} />
                </div>
                <div className='menu__slide__name'>
                    <Link href="/#">
                        <a>{t(`swiper:${slide.name}`)}</a>
                    </Link>
                </div>
            </div>
        </SwiperSlide>
        ))}
    </Swiper>
  )
}
export default HorizonSwiper;