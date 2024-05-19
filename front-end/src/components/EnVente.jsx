import { songs } from "./songs"
import { Slider } from 'react-slick';


const EnVente = () => {
  return (
      <div className="flex flex-col w-full justify-between items-start gap-8 overflow-hidden ">
          <h3 className="font-bold text-[15px]">Les plus vendues</h3>
          <div className="w-full flex flex-col items-start justify-between gap-3">
          {
              songs.slice(0,4).map((song, index) => (
                  
                      <div className="w-full flex justify-start items-center h-[60px] gap-3 bg-[#1B1730] hover:bg-[#F1EB11] hover:text-[#1B1730] ease-in duration-300 cursor-pointer" key={index}>
                          <img src={song.image} alt="" className="w-[80px] h-full" />
                          <div className=" flex flex-col justify-start items-start gap-1 overflow-hidden">
                              <p className="font-semibold">{song.title.slice(0,10)}</p>
                              <p className="">{song.artiste}</p>
                          </div>
                      </div>
                  
                  
              ))
              }
              <button className="w-full h-8 px-3 py-2 bg-[#1B1730] hover:bg-[#F1EB11] hover:text-[#1B1730] ease-in duration-300 cursor-pointer">Voir plus</button>
          </div>
          
    </div>
  )
}

export default EnVente
