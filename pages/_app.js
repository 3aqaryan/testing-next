import '../styles/globals.scss'
import "../components/Header/header.scss";
import '../components/Footer/footer.scss';
import '../components/Carousel/carousel.scss'
import '../components/Store/store.scss'
import '../components/Stores/stores.css'
import '../components/Map/map.css'
import '../components/AboutUs/aboutus.css'
import "./about/aboutpage.css";

// Admin CSS

import './admin/admin.css'
import './admin/dashboard/components/ImageUpload/imageUpload.css'
import './admin/dashboard/components/ProductAdd/table.css'
import './admin/dashboard/components/Sidebar/sidebar.scss'
import './admin/dashboard/components/TablesBoth/TableProducts/tableProduct.scss'
import './admin/dashboard/components/Topnav/topnav.scss'
import './admin/dashboard/components/user-info/user-info.scss'
import './admin/dashboard/layout/main-layout.scss'
import './admin/dashboard/pages/UpdateItem/table.css'
import './admin/dashboard/assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './admin/dashboard/scss/App.scss'

// 

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
export default MyApp
