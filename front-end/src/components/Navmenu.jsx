import { IoSearch } from "react-icons/io5";

function Navmenu() {
    const handleSubmit = (e)=>{
        e.prevent.Default()
        console.log("search");
    }
  return (
    <div className='w-full h-10 flex justify-start items-center'>
      <form onSubmit={handleSubmit} className='w-full flex justify-start items-center py-8'>
        <input type="text" name='search' placeholder='Recherche' className="w-[50%] h-10 px-3 bg-[#1B1730] outline-none text-[14px]" />
        <button className="relative right-8 bg-none  rounded-full text-[#F0F0F0]"><IoSearch size={20} /></button>
      </form>
    </div>
  )
}

export default Navmenu
