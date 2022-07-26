import Carousel from "./../components/Carousel/Carousel"
import HorizonSwiper from "./../components/HorizonSwiper/HorizonSwiper"
import Store from "./../components/Store/Store"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MainLayoutComponent from '../components/MainLayout/MainLayoutComponent'
export default function Home() {
  return (
    <MainLayoutComponent title="NewMobile">
      <div className="SlideImage">
        <Carousel />
      </div>
      <div className="container mainpage" id="mainPage">
        <HorizonSwiper />
        <Store />
      </div>
    </MainLayoutComponent>
  )
}
