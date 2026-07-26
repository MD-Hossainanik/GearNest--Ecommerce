
import FeatureProduct from "../component/FeatureProduct"
import HeroSection from "../component/HeroSection"
import Services from "../component/Services"
import Trusted from "../component/Trusted"

const HomePage = () => {
  return (
    <>
      <HeroSection name="GearNest_Store" />
      <FeatureProduct/>
      <Services />
      <Trusted/>
    </>
  )
}



export default HomePage
