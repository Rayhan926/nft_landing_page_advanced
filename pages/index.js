import BackersSection from "../components/BackersSection"
import BuySellMintSection from "../components/BuySellMintSection"
import Footer from "../components/Footer"
import GamingGuild from "../components/GamingGuild"
import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import OwnFutureOfGamingSection from "../components/OwnFutureOfGamingSection"
import PastMentionSection from "../components/PastMentionSection"
import TeamSection from "../components/TeamSection"

function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      {/* <BuySellMintSection /> */}
      <GamingGuild />
      <TeamSection />
      {/* <BackersSection /> */}
      {/* <PastMentionSection /> */}
      {/* <OwnFutureOfGamingSection /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default Home
