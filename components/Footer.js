import { BsInstagram, BsTwitter } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";

const { default: Link } = require("next/link");

function Footer() {
    return (
        <footer className="bg-[#151A21] text-center pb-20" >
            <div className="container px-2 md:px-5 flex flex-col items-center">
                <Link href="/" >
                    <a className="-mt-24" >
                        <img src="/img/G004 1.svg" alt="G004" />
                    </a>
                </Link>

                <div className="mt-4 md:mt-8" >
                    <p className="font-inter text-xl text-white/50" >Join us!</p>
                    <div className="flex items-center gap-5 mt-3" >
                        <a href="#" className="flex items-center duration-100 hover:scale-110 justify-center w-11 h-11 rounded-full overflow-hidden text-white bg-[#7289DA]" >
                            <SiDiscord size={20} />
                        </a>
                        <a href="#" className="flex items-center duration-100 hover:scale-110 justify-center w-11 h-11 rounded-full overflow-hidden text-white bg-[#00ACEE]" >
                            <BsTwitter size={20} />
                        </a>
                        <a

                            style={{
                                background: 'linear-gradient(to top right, #FEDA75, #FA7E1E, #D62976, #962FBF, #4F5BD5)'
                            }}

                            href="#" className="flex items-center duration-100 hover:scale-110 justify-center w-11 h-11 rounded-full overflow-hidden text-white" >
                            <BsInstagram size={20} />
                        </a>
                    </div>
                </div>

                <div className="my-8" >
                    <ul className="flex items-center font-inter gap-10 md:gap-20 text-white/40" >
                        <li>
                            <a href="#" className="hover:text-soft-sky">Privacy Policy</a>
                        </li>
                        <li className="text-white text-xl" >
                            English
                        </li>
                        <li>
                            <a href="#" className="hover:text-soft-sky">Terms of service</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="text-white/40 font-inter" >©Gazoom copyright 2021. Gazoom S.L. All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
