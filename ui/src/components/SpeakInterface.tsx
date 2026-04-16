import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const SpeakInterface = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center gap-8">
                <DotLottieReact src="animations/wave.json" autoplay loop />
                <div className="text-center text-[#00F0FF]">ISAAC is listening....</div>
            </div>
        </div>
    )
}

export default SpeakInterface