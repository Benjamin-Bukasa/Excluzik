
import { GiOldMicrophone } from "react-icons/gi";
import { SiYoutubemusic } from "react-icons/si";
import { BsCollectionPlayFill } from "react-icons/bs";
import { RiPlanetFill } from "react-icons/ri";


function Icons() {

const iconsData = [
    {
        name:"music",
        icon: <SiYoutubemusic/>
    },
    {
        name:"find",
        icon: <RiPlanetFill/>
    },
    {
        name:"singer",
        icon: <GiOldMicrophone/>
    },
    {
        name:"collection",
        icon: <BsCollectionPlayFill />
    }

]

  return (
    <div>{iconsData.map((item, id)=>(
        <ul key ={id}>
            <li>{item.icon}</li>
        </ul>
    ))}</div>
  )
}

export default Icons
