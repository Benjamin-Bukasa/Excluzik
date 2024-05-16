
import Logo from "./Logo";
import SidebarLinks from "./SidebarLinks";
import SongOptions from "./SongOptions";


function Sidebar() {
  return (
    <div className="w-72 h-screen flex flex-col justify-start items-center gap-10 p-6 bg-[#1B1730]">
      <Logo/>
      <SidebarLinks/>
      <SongOptions/>
    </div>
  )
}

export default Sidebar
