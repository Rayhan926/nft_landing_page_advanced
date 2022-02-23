import BluryCircle from "./BluryCircle";
import TeamCard from "./TeamCard";

function TeamSection() {
    return (
        <section className="relative py-28" >
            <BluryCircle className="bg-[#FF42CA] blur-[180px] md:blur-[200px] top-20 translate-y-0 md:top-1/2 md:-translate-y-1/2" />
            <div className="team_bg_mobile" >
                <div className="container text-center flex flex-col items-center">
                    <img src="/img/Logo background Team.svg" alt="Logo background Team" className="mb-5" />
                    <h2 className="heading_md" >Tem Team</h2>
                    <h2 className="spacing_p mt-3 mb-8" >from gamers to gamers</h2>
                </div>
                <div style={{
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center'
                }} className="md:team_bg_desktop" >
                    <div className="container px-2 md:px-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-24 md:gap-5 mt-16">
                        <TeamCard imgSrc="/img/avatar1.svg" title="Lucas Leisner" subtitle="business" />
                        <TeamCard imgSrc="/img/avatar2.svg" title="marc leisner" subtitle="business" />
                        <TeamCard imgSrc="/img/avatar3.svg" title="sergio bravo" subtitle="tech" />
                        <TeamCard imgSrc="/img/avatar4.svg" title="alba silva" subtitle="design" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamSection
