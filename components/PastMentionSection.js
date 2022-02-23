function PastMentionSection() {
    return (
        <section className="py-28" >
            <div className="container text-center flex flex-col items-center">
                <h2 className="heading_md" >Past mentions</h2>
                <h2 className="spacing_p mt-3 mb-8" >read about what they have to say about us</h2>
            </div>
            <div className="container mt-8">
                <div className="w-[90%] mx-auto grid grid-cols-2 md:grid-cols-5 gap-10 place-items-center">
                    <div className="order-5 md:order-[unset]">
                        <a href="https://nexttrend.wayra.com/en/applications/gazoom/" target="_blank">
                            <img src="/img/wayra-logo-small.svg" alt="wayra" />
                        </a>
                    </div>
                    <div className="order-3 md:order-[unset] grid_col_1_3 md:grid_col_unset">
                        <a href="https://www.lavanguardia.com/economia/emprendedores/20210407/6626034/gazoom-partidas-grabar-videojuegos.html" target="_blank">
                            <img src="/img/lavanguardia-logo 1.svg" alt="lavanguardia" />
                        </a>
                    </div>
                    <div className="order-4 md:order-[unset]">
                        <a href="https://esports.as.com/bonus/videojuegos/GaZoom-herramienta-perfecta-mejores-jugadas_0_1506449345.html" target="_blank">
                            <img src="/img/Logo Movistar Esports.svg" alt="Movistar" />
                        </a>
                    </div>
                    <div className="order-2 md:order-[unset]">
                        <a href="https://www.businessinsider.es/12-startups-espanolas-mundo-gaming-debes-seguir-fondos-920699" target="_blank">
                            <img src="/img/Business_Insider_Logo 1.svg" alt="Business_Insider_Logo" />
                        </a>
                    </div>
                    <div className="order-1 md:order-[unset]">
                        <a href="https://www.overwolf.com/app/Gazoom_Entertainment" target="_blank">
                            <img src="/img/Overwolf_logo_SVG_horizontal 1.svg" alt="Overwolf" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PastMentionSection
