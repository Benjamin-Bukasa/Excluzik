import { GiOldMicrophone } from "react-icons/gi";
import { SiYoutubemusic } from "react-icons/si";
import { BsCollectionPlayFill } from "react-icons/bs";
import { RiPlanetFill } from "react-icons/ri";



const IconsData = () =>( [
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
)
export default IconsData