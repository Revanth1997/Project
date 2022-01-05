import Header from '../Header'
import ReactSlider from '../Carousel'
import Restaurants from '../Restaurants'
import Footer from '../Footer'
import './index.css'

const HomeRoute = () => (
  <div className="home-container">
    <Header />
    <ReactSlider />
    <Restaurants />
    <Footer />
  </div>
)
export default HomeRoute
