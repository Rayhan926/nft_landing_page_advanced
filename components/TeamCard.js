import { RiLinkedinFill } from 'react-icons/ri';
function TeamCard({ imgSrc, title, subtitle }) {
    return (
        <div style={{
            backgroundImage: "url('/img/team_card_bg.png')",
            backgroundColor: '#000',
            backgroundSize: '100%',
            backgroundPosition: 'top'
        }}
            className="bg-no-repeat rounded-xl flex-col flex items-center space-y-3 h-[165px] md:w-[298px] md:h-[236px]" >
            <div className="relative flex flex-col items-center -mt-[75px] md:-mt-10">
                <div className="w-[120px] h-[120px] md:w-[180px] md:h-[180px]">
                    <img src={imgSrc} alt={title} className="w-full h-full object-cover" />
                </div>
                <a href="#" className="-mt-5" >
                    <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center text-white bg-[#0E76A8] hover:bg-[#03557a]" >
                        <RiLinkedinFill />
                    </div>
                </a>
            </div>
            <div className="text-center" >
                <h4 className="spacing_p font-bold text-white">{title}</h4>
                <p className="spacing_p mt-1">{subtitle}</p>
            </div>
        </div>
    )
}

export default TeamCard
