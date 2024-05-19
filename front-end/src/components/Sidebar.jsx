
import Logo from "./Logo";
import SidebarLinks from "./SidebarLinks";
import SongOptions from "./SongOptions";


function Sidebar() {
  return (
    <div className="w-96 h-screen flex flex-col justify-start items-center gap-10 p-4 bg-[#1B1730]">
      <Logo/>
      <SidebarLinks/>
      <SongOptions/>
    </div>
  )
}

export default Sidebar
