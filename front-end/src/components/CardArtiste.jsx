import { songs } from './songs';

const CardArtiste = () => {
  return (
    <div className="flex flex-col gap-5 items-start justify-start w-full h-[200px] p-1">
          <div className="flex justify-between items-center w-full h-[40px] p-1">
              <h3 className="text-[15px] font-semibold font-poppins">Artistes à écouter</h3>
          </div>

          <div className="flex justify-between items-center w-full h-[300px] p-1 overflow-hidden ">
              {
                  songs.slice(5,11).map((song, index) => (
                      <div className="flex flex-col rounded-full justify-start items-center gap-2 w-[100px] hover:opacity-50 ease-in duration-300 cursor-pointer" key={index}>
                          <div style={{
                              backgroundImage: `url(${song.image})`,
                              width: "100px",
                              height: "100px",
                              borderRadius:"100%",
                              backgroundSize: "cover",
                              backgroundPosition:"center"
                          }}>{song.space}</div>
                          <p className="font-bold font-poppins text-[13px]">{song.artiste.slice(0,11)}</p>
                      </div>
                      
                  ))
              }
          </div>
      
    </div>
  )
}

export default CardArtiste
