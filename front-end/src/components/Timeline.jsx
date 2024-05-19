
import CardArtiste from "./CardArtiste"
import Cards from "./Cards"
// import Caroussel from "./Caroussel"
import Navmenu from "./Navmenu"



function Timeline() {
  return (
    <div className='w-full h-full flex flex-col justify-between items-start gap-8 px-16 pt-4'>
      <Navmenu />
      <div className="w-full flex flex-col justify-start items-start gap-5">
        <Cards />
        <CardArtiste/>
      </div>
      
    </div>
  )
}

export default Timeline
