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