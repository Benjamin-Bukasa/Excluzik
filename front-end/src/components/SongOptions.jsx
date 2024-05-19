import { GoDash } from "react-icons/go";



function SongOptions() {
  return (
    <div className="w-2/3 flex flex-col gap-6">
      <h3 className="font-bold text-[17px]">Mes Playlists</h3>
      <ul className="">
        <li className="flex justify-start items-center gap-4 mb-4 text-[14px] font-semibold hover:text-[#F1EB11] cursor-pointer p-1"><GoDash /><p>Favorites</p></li>
        <li className="flex justify-start items-center gap-4 mb-4 text-[14px] font-semibold hover:text-[#F1EB11] cursor-pointer p-1"><GoDash /><p>Populaires</p></li>
        <li className="flex justify-start items-center gap-4 mb-4 text-[14px] font-semibold hover:text-[#F1EB11] cursor-pointer p-1"><GoDash />Mes artistes<p></p></li>
      </ul>
    </div>
  )
}

export default SongOptions
