import Image from 'next/image';
import { MdChevronRight } from 'react-icons/md';
import { SiDiscord } from 'react-icons/si';
import BluryCircle from './BluryCircle';
import Button from "./Button";
function GamingGuild() {
    return (
        <section className="mt-28" >
            <div className="container text-center">
                <h2 className="heading_md" >Gaming Guild of Gazoomia</h2>
                <h2 className="spacing_p mt-3 mb-8" >SUpport early {'&'} get Benefits</h2>
                <Button text="Join our Discord!" className="via-[#5865F2] to-black text-white" startIcon={<SiDiscord />} />
            </div>
            <section style={{
                backgroundImage: "url('/img/Decorations Benefits.png')",
                backgroundSize: '100%',
                backgroundPosition: 'top center'
            }}
                className="pb-20 pt-32 -mt-8 bg-no-repeat"
            >

                <div className="container grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-32 px-10 md:px-5">
                    {/* Left Box --Start-- */}
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 gap-y-12 md:gap-y-16 relative text-center md:text-left px-10 md:px-0">
                            <BluryCircle className="hidden md:block bg-soft-green blur-[180px] left-8 translate-x-0" />
                            <div>
                                <h4 className="text-xl font-syncopate uppercase font-bold mx-auto text-soft-green" >Dao</h4>
                                <p className="text-white font-inter font-medium mt-2.5 mx-auto" >Be part of the DAO and support community projects.</p>
                            </div>
                            <div>
                                <h4 className="text-xl font-syncopate uppercase font-bold mx-auto text-purple" >STaking</h4>
                                <p className="text-white font-inter font-medium mt-2.5 mx-auto" >Stake and earn tokens {'&'} rewards.</p>
                            </div>
                            <div>
                                <h4 className="text-xl font-syncopate uppercase font-bold mx-auto text-yellow" >Reduced
                                    tRansaction fee</h4>
                                <p className="text-white font-inter font-medium mt-2.5 mx-auto" >We only list pre-screened NFT-based games and their assets.</p>
                            </div>
                            <div>
                                <h4 className="text-xl font-syncopate uppercase font-bold mx-auto text-soft-sky" >Exclusisve
                                    Whitelist spots</h4>
                                <p className="text-white font-inter font-medium mt-2.5 mx-auto" >Exclusive whitelist spots of launchpad projects.</p>
                            </div>
                        </div>
                    </div>
                    {/* Left Box --Start-- */}
                    {/* Right Box --End-- */}
                    <div className="relative" >
                        <BluryCircle className="bg-soft-sky blur-[180px]" />
                        {/* Visible in desktop --Start-- */}
                        <div className="md:hidden" >
                            <Image width={318} height={622} src="/img/NFt cards responsive.png" alt="NFT floating cards" />
                        </div>
                        {/* Visible in desktop --Start-- */}

                        {/* Visible in desktop --End-- */}
                        <div className="hidden md:block" >
                            <Image src="/img/NFT floating cards export.png" width={669} height={569} alt="NFT floating cards" />
                        </div>
                        {/* Visible in desktop --End-- */}
                    </div>
                    {/* Right Box --End-- */}
                </div>

                <div className="flex justify-center mt-5 md:-mt-16" >
                    <Button className="to-[#EBFF00] text-[#EBFF00]" text="Get Whitelisted" icon={<MdChevronRight size={22} />} />
                </div>

            </section>
        </section>
    )
}

export default GamingGuild
