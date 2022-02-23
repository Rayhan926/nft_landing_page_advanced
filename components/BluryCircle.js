function BluryCircle({ color, className = "" }) {
    return (
        <div style={{
            ...(color && {
                backgroundColor: color
            })
        }} className={`w-full md:w-[400px] h-[250px] opacity-90 rounded-full blur-[250px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1] ${className}`} ></div>
    )
}

export default BluryCircle
