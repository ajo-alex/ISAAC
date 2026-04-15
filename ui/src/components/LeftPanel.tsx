
const LeftPanel = () => {
    return (
        <div className='p-4 flex flex-col justify-between h-full'>
            <div className='flex items-center gap-2'>
                <span className="relative flex size-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
                </span>
                <div>Brain online</div>
            </div>
            <div className='bg-[#1C1B1C] p-2 flex flex-row rounded'>
                <div className='w-1/2 cursor-pointer p-2 text-center rounded'>Chat</div>
                <div className='w-1/2 bg-[#2D2C2D] cursor-pointer p-2 text-center rounded'>Speak</div>
            </div>
        </div>
    )
}

export default LeftPanel