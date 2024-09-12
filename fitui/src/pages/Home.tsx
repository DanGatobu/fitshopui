
import BestSeller from "../Components/BestSeller"
import Heros from "../Components/HeroSection"
import LatestCollection from "../Components/LatestCollection"
import MyPolicy from "../Components/MyPolicy"
import NewsLetter from "../Components/NewsLetter"

const Home = () => (
  <div>
    <Heros />
    <LatestCollection />
    <BestSeller/>
    <MyPolicy/>
    <NewsLetter/>

  </div>
)

export default Home