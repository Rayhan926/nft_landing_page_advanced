import { MdChevronRight } from "react-icons/md"
import Button from "./Button"

function OwnFutureOfGamingSection() {
    return (
        <section className="py-32 pt-20" >
            <div className="w-fit mx-auto flex flex-col items-center py-14" style={{
                backgroundImage: "url('/img/deco cta.png')",
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top'
            }}>
                <h2 className="heading_md mb-6 text-center px-10 md:px-0">OWN THE FUTURE OF GAMING</h2>
                <Button text="Sign up for Alpha" className="via-[#00FFFF] to-black text-white" icon={<MdChevronRight size={22} />} />
            </div>
        </section>
    )
}

export default OwnFutureOfGamingSection
