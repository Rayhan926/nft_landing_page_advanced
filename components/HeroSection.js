import { MdChevronRight } from 'react-icons/md';
import BluryCircle from "./BluryCircle";
import Button from './Button';

function HeroSection() {
    return (
        <section className="container py-16" >
            <div className="grid grid-cols-1 md:grid-cols-[30%,40%,30%]">
                {/* Left --Start-- */}
                <div className="relative" >
                    <img src="/img/Group 3-crop.png" alt="" className="-translate-x-14" />
                    {/* <BluryCircle color="#00FF6E" /> */}
                </div>
                {/* Left --End-- */}

                {/* Center --Start-- */}
                <div className="flex flex-col items-center justify-center text-center relative" >
                    <BluryCircle color="#EBFF00" />
                    <h1 className="font-syncopate font-bold uppercase text-5xl" >
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#EBFF00]" >Gaming NFT</p>
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#EBFF00]" >Marketplace</p>
                    </h1>
                    <p className="spacing_p mt-3" >A marketplace for the gaming community</p>
                    <div className="flex items-center gap-5 mt-10 w-[150%] justify-center" >

                        <Button className="to-[#00FFFF] text-[#00FFFF]" text="Sign up for Alpha" icon={<MdChevronRight size={22} />} />
                        <Button className="to-[#EBFF00] text-[#EBFF00]" text="Get Whitelisted" icon={<MdChevronRight size={22} />} />

                    </div>
                </div>
                {/* Center --End-- */}

                {/* Right --Start-- */}
                <div className="relative" >
                    <img src="/img/Cards GAME ITEMS-crop.png" alt="" className="scale-[1.2] translate-y-8 origin-left" />
                    <p className="spacing_p w-[60%] mx-auto rotate-[5deg] text-center translate-y-10 translate-x-10" >Only pre-screened nft games</p>
                    {/* <BluryCircle color="#00FFFF" /> */}
                </div>
                {/* Right --End-- */}
            </div>
        </section>
    )
}

export default HeroSection
