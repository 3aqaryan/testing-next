import React from "react";
import { Carousel } from "react-responsive-carousel";
import Slide1 from './../../public/images/slide/slide1.jpg'
import Slide2 from './../../public/images/slide/slide2.png'
import Slide3 from './../../public/images/slide/slide3.jpg'

import Slide1Small from './../../public/images/slide/slide1_small.jpg'
import Slide2Small from './../../public/images/slide/slide2_small.jpg'
import Slide3Small from './../../public/images/slide/slide3_small.jpg'

export default () => (
  <Carousel autoPlay emulateTouch interval='3500' infiniteLoop>
    <div>
      <img
        alt="Slide1"
        src={Slide1.src}
      />
      <img
        alt="Slide1Small"
        src={Slide1Small.src}
      />
    </div>
    <div>
      <img
        alt="Slide2"
        src={Slide2.src}
      />
      <img
        alt="Slide2Small"
        src={Slide2Small.src}
      />
    </div>
    <div>
      <img
        alt="Slide3"
        src={Slide3.src}
      />
      <img
        alt="Slide3Small"
        src={Slide3Small.src}
      />
    </div>
  </Carousel>
);

