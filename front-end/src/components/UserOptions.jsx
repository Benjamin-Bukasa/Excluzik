import { IoMail } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";

function UserOptions() {

const profileImage ="https://salondesmaires-po.fr/wp-content/uploads/2015/04/speaker-3-v2.jpg"

  return (
    <div className="w-full h-10 flex justify-between items-center gap-8 py-5">
            <div className="flex justify-between items-center gap-3 rounded-full">
                <img src={profileImage} alt="" className="w-8 h-8 rounded-full"/>
                <div className="flex flex-col justify-between items-start ">
                    <p className="font-semibold text-white">Ben Buks</p>
                    <p className="font-light text-[#b6b5b5]">benbuks@gmail.com</p>
                </div> 
            </div>
            <div className="flex justify-between items-center gap-4">
                <IoMail size={25}/>
                <IoIosSettings size={25}/>
            </div>
      </div>
  )
}

export default UserOptions
