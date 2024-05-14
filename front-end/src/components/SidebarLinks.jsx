// import { Link } from "react-router-dom"
import { BsFillSpeakerFill } from "react-icons/bs";
import { GiOldMicrophone } from "react-icons/gi";
import { BsCollectionPlayFill } from "react-icons/bs";
import { RiAlbumFill } from "react-icons/ri";



function SidebarLinks() {
  return (
    <div className="w-2/3 flex justify-start">
      <ul>
        <li className="flex justify-start items-center gap-4 mb-4 text-[14px] font-semibold hover:text-[#F1EB11] cursor-pointer p-1"><BsFillSpeakerFill/><p>Chanson</p></li>
        <li className="flex justify-start items-center gap-4 mb-4 text-[14px] font-semibold hover:text-[#F1EB11] cursor-pointer p-1"><RiAlbumFill /><p>Album</p></li>
        <li className="flex justify-start items-center gap-4 mb-4 text-[14px] font-semibold hover:text-[#F1EB11] cursor-pointer p-1"><GiOldMicrophone/><p>Artiste</p></li>
        <li className="flex justify-start items-center gap-4 mb-4 text-[14px] font-semibold hover:text-[#F1EB11] cursor-pointer p-1"><BsCollectionPlayFill/><p>Collection</p></li>
      </ul>
    </div>
  )
}

export default SidebarLinks
