import BluryCircle from "./BluryCircle"

function BackersSection() {
    return (
        <section className="py-28 relative" style={{
            backgroundImage: "url('/img/deco baked by.png')",
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
        }} >
            <BluryCircle className="bg-[#004EFE] blur-[200px]" />
            <div className="container text-center flex flex-col items-center">
                <h2 className="heading_md" >The Backers</h2>
                <h2 className="spacing_p mt-3 mb-8" >THEY Back {'&'} Trust us</h2>
            </div>

            <div className="container mt-10">
                <div className="w-[80%] mx-auto grid grid-cols-3 gap-5">
                    <Box imgSrc="/img/0587d387-logo-dozen 1.svg" />
                    <Box color="#00AFFF" imgSrc="/img/wayra-logo.svg" />
                    <Box imgSrc="/img/Masterbrand-Logo_color 1.svg" />
                </div>
            </div>
        </section>
    )
}

export default BackersSection


const Box = ({ imgSrc, color = "#31D0AA" }) => {
    return (
        <div className="rounded px-[2.5px]" style={{
            background: `linear-gradient(to bottom, rgb(0 10 35), ${color} , rgb(0 10 35))`
        }}>
            <div className="rounded text-center py-10 px-8 h-full" style={{
                background: 'linear-gradient(45deg, #27334F, rgb(0 10 35))'
            }}>
                <img src={imgSrc} alt="Backer" />
            </div>
        </div>
    )
}