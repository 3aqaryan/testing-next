import '../styles/globals.scss'
import "../components/Header/header.scss";
import '../components/Footer/footer.scss';
import '../components/Carousel/carousel.scss'
import '../components/Store/store.scss'
import '../components/Stores/stores.css'
import '../components/Map/map.css'
import '../components/AboutUs/aboutus.css'
import "./about/aboutpage.css";
import "./admin/dashboard/dashboard.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
export default MyApp
