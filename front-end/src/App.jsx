import RightSidebar from "./components/RightSidebar"
import Sidebar from "./components/Sidebar"
import Timeline from "./components/Timeline"


function App() {
 

  return (
    <>
    <div className="w-full flex flex-col gap-2 h-screen">
      <div className="w-full h-[90%] flex justify-start items-start">
        <Sidebar/>
        <Timeline/>
        <RightSidebar/>
        </div>
        <div className="w-full h-[10%] bg-[#1B1730] z-10"></div>
      </div>
    </>
  )
}

export default App
