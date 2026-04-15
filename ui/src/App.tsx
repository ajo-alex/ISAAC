import Header from "./components/Header"
import LeftPanel from "./components/LeftPanel"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import RightPanel from "./components/RightPanel";

const App = () => {
  return (
    <div className="bg-[#0A0A0B] text-white h-screen w-full">
      <Header />
      <div className="flex justify-between h-[calc(100vh-56px)]">
        <div className="bg-[#000000] w-[500px] h-full">
          <LeftPanel />
        </div>
        <div className="bg-[#1C1B1C] w-full h-full flex justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-8">
            <DotLottieReact src="animations/wave.json" autoplay loop />
            <div className="text-center text-[#00F0FF]">ISAAC is listening....</div>
          </div>
        </div>
        <div className="bg-[#000000] w-[500px] h-full">
          <RightPanel />
        </div>
      </div>
    </div>
  )
}

export default App