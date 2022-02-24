import Image from "next/image";
import Avalance from "../icons/Avalance";
import Binance from "../icons/Binance";
import BuySellCards from "../icons/BuySellCards";
import Ethereum from "../icons/Ethereum";
import Polygon from "../icons/Polygon";
import Solana from "../icons/Solana";

function BuySellMintSection() {
    return (
        <section style={{
            backgroundImage: "url('/img/Line Decorations bg.png')",
            backgroundSize: '100%',
            backgroundPosition: 'center'
        }}
            className="py-20 bg-no-repeat" >
            <div className="container">
                <h2 className="heading_md text-center" >buy, sell {'&'} mint</h2>
                <p className="spacing_p text-center mt-3" >A marketplace for the gaming community</p>

                <div className="sr-only md:not-sr-only">
                    <VisibleInMobile />
                </div>


                {/* Visible In Mobile --Start-- */}
                <div
                    style={{
                        backgroundImage: "url('/img/Deco backgroun mbl.png')",
                        backgroundSize: '100%'
                    }}
                    className="bg-center md:!hidden" >

                    <div className="px-9 mb-16">
                        <Box color="#00FFFF" title="GAME SPECIFIC EXPERIENCE" description="We provide a unique and inmersive experience for each of the listed games." />
                    </div>

                    <div className="flex justify-center mb-4" >
                        <Image width={326} height={632} src="/img/Group 3.png" alt="Group 3" />
                    </div>
                    <div className="px-9 space-y-5">
                        <Box color="#EBFF00" title="scam prevention" description="We only list pre-screened  Game NFT Collections." />
                        <Box color="#CC6AFF" title="comunity rewards" description="Get rewards for trading & staking." />
                        <Box color="#00FF6E" title="LaunchPad" description="Launch your game with the right community" />

                    </div>

                    <div className="flex flex-col items-center mt-10">
                        <div>
                            <Avalance />
                        </div>
                        <div>
                            <Polygon />
                        </div>
                        <p className="spacing_p mb-3">and coming soon...</p>
                        <div>
                            <img src="/img/Group 1.svg" alt="" />
                        </div>
                    </div>
                </div>
                {/* Visible In Mobile --End-- */}
            </div>
        </section>
    )
}

export default BuySellMintSection


const Box = ({ color, title, description }) => {
    return (
        <div className="rounded p-0.5" style={{
            background: `linear-gradient(to bottom, black, ${color}, black)`
        }}>
            <div className="rounded text-center py-10 px-10" style={{
                background: 'linear-gradient(45deg, #27334F, black)'
            }}>
                <h4 style={{ color }} className="text-xl font-syncopate uppercase font-bold w-[80%] mx-auto" >{title}</h4>
                <p className="text-white font-inter font-medium mt-2.5 w-[80%] mx-auto" >{description}</p>
            </div>
        </div>
    )
}

const VisibleInMobile = () => {
    return (

        <div className="mt-20">
            <div className="grid grid-cols-[1fr,300px,1fr] gap-16" >
                {/* Left Box --Start-- */}
                <div className="flex flex-col items-end relative" >
                    <div className="absolute top-1/2 -translate-y-1/2 right-0" >
                        <p className="spacing_p">and coming soon...</p>
                    </div>
                    <div className="translate-y-20" >
                        <Avalance />
                    </div>
                    <div className="-translate-x-40 translate-y-10" >
                        <Polygon />
                    </div>
                    <div className="-translate-x-[120px] translate-y-20" >
                        <Binance />
                    </div>
                    <div className="translate-x-12 -translate-y-0">
                        <Solana />
                    </div>
                    <div>
                        <Ethereum />
                    </div>
                </div>
                {/* Left Box --End-- */}
                {/* Center Box --Start-- */}
                <div className="space-y-4" >
                    <Box color="#00FFFF" title="GAME SPECIFIC EXPERIENCE" description="We provide a unique and inmersive experience for each of the listed games." />
                    <Box color="#EBFF00" title="scam prevention" description="We only list pre-screened  Game NFT Collections." />
                    <Box color="#CC6AFF" title="comunity rewards" description="Get rewards for trading & staking." />
                    <Box color="#00FF6E" title="LaunchPad" description="Launch your game with the right community" />
                </div>
                {/* Center Box --End-- */}
                {/* Right Box --Start-- */}
                <div className="translate-y-20" >
                    <BuySellCards />
                </div>
                {/* Right Box --End-- */}
            </div>
        </div>
    )
}