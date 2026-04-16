import ChatInterface from "./components/ChatInterface";
import Header from "./components/Header"
import LeftPanel from "./components/LeftPanel"

import RightPanel from "./components/RightPanel";
import SpeakInterface from "./components/SpeakInterface";

const App = () => {
  return (
    <div className="bg-[#0A0A0B] text-white h-screen w-full">
      <Header />
      <div className="flex justify-between h-[calc(100vh-56px)]">
        <div className="bg-[#000000] w-[500px] h-full">
          <LeftPanel />
        </div>
        <div className="bg-[#1C1B1C] w-full h-full flex justify-center items-center">
          {localStorage.getItem('window') === "chat" && <ChatInterface />}
          {localStorage.getItem('window') === "speak" && <SpeakInterface />}
        </div>
        <div className="bg-[#000000] w-[500px] h-full">
          <RightPanel />
        </div>
      </div>
    </div>
  )
}

export default App