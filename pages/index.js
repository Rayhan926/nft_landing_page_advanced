import BuySellMintSection from "../components/BuySellMintSection"
import Header from "../components/Header"
import HeroSection from "../components/HeroSection"

function Home() {
  return (
    <div className="p-20" >
      {/* <BluryCircle /> */}
      <Header />
      <HeroSection />
      <BuySellMintSection />
    </div>
  )
}

export default Home
