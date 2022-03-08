import Header from '../Header'
import ReactSlider from '../Carousel'
import Restaurants from '../Restaurants'
import Footer from '../Footer'
import './index.css'

const HomeRoute = () => (
  <>
    <Header />
    <div className="home-container">
      <ReactSlider />
      <Restaurants />
    </div>

    <Footer />
  </>
)
export default HomeRoute
