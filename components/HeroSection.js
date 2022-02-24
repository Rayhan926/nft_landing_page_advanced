import Image from 'next/image';
import { MdChevronRight } from 'react-icons/md';
import BluryCircle from "./BluryCircle";
import Button from './Button';

function HeroSection() {
    return (
        <section className="py-16 pt-36 md:pt-40 container" >
            <div className="grid grid-cols-1 md:grid-cols-[30%,40%,30%]">
                {/* Left --Start-- */}
                <div className="relative order-3 md:order-[unset] md:-translate-x-14" >
                    <Image width={516} height={441} src="/img/Group 3-crop.png" alt="" />
                    {/* <BluryCircle color="#00FF6E" /> */}
                </div>
                {/* Left --End-- */}

                {/* Center --Start-- */}
                <div className="flex flex-col items-center justify-center text-center relative order-1 md:order-[unset] mb-8 md:mb-0" >
                    <BluryCircle color="#EBFF00" />
                    <h1 className="font-syncopate font-bold uppercase text-3xl md:text-5xl" >
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#EBFF00]" >Gaming NFT</p>
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#EBFF00]" >Marketplace</p>
                    </h1>
                    <p className="spacing_p w-[70%] mx-auto md:w-full mt-3" >A marketplace for the gaming community</p>
                    <div className="flex flex-col md:flex-row items-center gap-5 mt-10 w-fit mx-auto md:mx-[unset] md:w-[150%] justify-center" >
                        <Button className="to-[#00FFFF] text-[#00FFFF] w-full md:w-auto" text="Sign up for Alpha" icon={<MdChevronRight size={22} />} />
                        <Button className="to-[#EBFF00] text-[#EBFF00] w-full md:w-auto" text="Get Whitelisted" icon={<MdChevronRight size={22} />} />

                    </div>
                </div>
                {/* Center --End-- */}

                {/* Right --Start-- */}
                <div className="relative order-3 md:order-[unset]" >
                    <div className="translate-y-4 origin-left">
                        <Image width={599} height={499} src="/img/Cards GAME ITEMS-crop.png" alt="" />
                    </div>
                    <p className="spacing_p w-[60%] mx-auto rotate-[5deg] text-center translate-y-0 translate-x-5 md:translate-x-2" >Only pre-screened nft games</p>
                    {/* <BluryCircle color="#00FFFF" /> */}
                </div>
                {/* Right --End-- */}
            </div>
        </section>
    )
}

export default HeroSection
