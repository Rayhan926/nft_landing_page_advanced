import Head from "next/head"
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
    <>
      <Head>
        <title>Gazoom | Gaming NFT Marketplace</title>
      </Head>
      <Header />
      <HeroSection />
      <BuySellMintSection />
      <GamingGuild />
      <TeamSection />
      <BackersSection />
      <PastMentionSection />
      <OwnFutureOfGamingSection />
      <Footer />
    </>
  )
}

export default Home
