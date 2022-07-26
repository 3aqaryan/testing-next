import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

const CarouselImages =  () => (
  <Carousel autoPlay emulateTouch interval="3500" showThumbs={false} infiniteLoop>
    <div>
      <Image alt="Slide1" src='/images/slide/slide1.jpg' width={1920} height={550} />
      <Image alt="Slide1Small" src='/images/slide/slide1_small.jpg' width={414} height={540}/>
    </div>
    <div>
      <Image alt="Slide2" src='/images/slide/slide2.png' width={1920} height={550} />
      <Image alt="Slide2Small" src='/images/slide/slide2_small.jpg' width={414} height={540} />
    </div>
    <div>
      <Image alt="Slide3" src='/images/slide/slide3.jpg' width={1920} height={550}/>
      <Image alt="Slide3Small" src='/images/slide/slide3_small.jpg' width={414} height={540}/>
    </div>
  </Carousel>
);
export default CarouselImages