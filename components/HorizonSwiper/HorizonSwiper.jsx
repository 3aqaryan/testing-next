import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Mousewheel } from 'swiper'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
 const HorizonSwiper = () => {
    const HorizonSwipeData = [
        {
            id : 1,
            image : '/images/ScrollMenu/mobile_ico.png',
            name : 'Հեռախոսներ',
        },
        {
            id : 2,
            image : '/images/ScrollMenu/ipad_ico.png',
            name : 'Պլանշետներ',
        },
        {
            id : 3,
            image : '/images/ScrollMenu/watch_ico.png',
            name : 'Ժամեր',
        },
        {
            id : 4,
            image : '/images/ScrollMenu/pc_ico.png',
            name : 'Համակարգիչներ',
        },
        {
            id : 5,
            image : '/images/ScrollMenu/accessories_ico.png',
            name : 'Աքսեսուարներ',
        },
        {
            id : 6,
            image : '/images/ScrollMenu/camera_ico.png',
            name : 'Տեսախցիկներ',
        },
        {
            id : 7,
            image : '/images/ScrollMenu/gamepad_ico.png',
            name : 'Սարքավորումներ',
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
                    <a href="/#">{slide.name}</a>
                </div>
            </div>
        </SwiperSlide>
        ))}
    </Swiper>
  )
}
export default HorizonSwiper;