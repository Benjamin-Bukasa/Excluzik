import { songs } from "./songs"

const TopWeek = () => {
    return (
    <>
            <div className="w-full flex flex-col items-start justify-between gap-2">
                <h3 className="font-bold text-[15px]">Top 10 de la Semaine</h3>
            {
                songs.slice(0, 3).map((song, i) => (
                    <div className="w-full h-7 p-1 flex justify-start gap-4 hover:bg-[#F1EB11] hover:text-[#1B1730] ease-in duration-300 cursor-pointer" key={i}>
                        <p className="font-semibold">{song.id}</p>
                        <p className="">{song.title}</p>
                        <p className=""></p>
                    </div>
                ))
            }
                </div>
    </>
  )
}

export default TopWeek
