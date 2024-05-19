
import { songs } from './songs';

const Cards = () => {
  return (
      <div className="flex flex-col gap-5 items-start justify-start w-full h-[200px] p-1">
          <div className="flex justify-between items-center w-full h-[40px] p-1">
              <h3 className="text-[15px] font-semibold font-poppins ">Nouveauté</h3>
              <select name="" id="" className="w-1/4 h-[30px] bg-[#1B1730] px-2 py-1 font-semibold">
                  <option value="">RUMBA</option>
                  <option value="">SEBENE</option>
                  <option value="">DECALE</option>
                  <option value="">RAP</option>
                  <option value="">AUTRES</option>
              </select>
          </div>

          <div className="flex justify-between items-center w-full h-[300px] p-1 overflow-hidden">
              {
                  songs.slice(3,8).map((song, index) => (
                      <div className="flex flex-col justify-start items-start w-[130px] h-full hover:opacity-50 ease-in duration-300 cursor-pointer" key={index}>
                          <div style={{
                              backgroundImage: `url(${song.image})`,
                              width: "100%",
                              height: "250px",
                              backgroundSize: "cover",
                              backgroundPosition:"center"
                          }}>{song.space}</div>
                          <div className="flex flex-col bg-[#1B1730] w-full p-1 ">
                              <p className="font-semibold font-barlow">{song.artiste}</p>
                              <p className="font-light font-barlow text-[#F1EB11]">{song.title.slice(0,16)}</p>
                          </div>
                      </div>
                  ))
              }
          </div>
      
    </div>
  )
}

export default Cards
