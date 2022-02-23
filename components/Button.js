function Button({ text, icon, className = '', startIcon }) {
    return (
        <button className={`rounded p-0.5 bg-gradient-to-b from-black ${className}`} >
            <span className="bg-gradient-to-b from-black to-[#27334F] duration-200 hover:to-black text-lg font-inter font-semibold px-10 py-3 rounded flex items-center gap-3">
                {startIcon}
                {text}
                {icon}
            </span>
        </button>
    )
}

export default Button
