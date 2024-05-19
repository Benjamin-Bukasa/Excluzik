import EnVente from "./EnVente"
import TopWeek from "./TopWeek"
import UserOptions from "./UserOptions"



function RightSidebar() {
  return (
    <div className="w-[480px] h-full flex flex-col justify-start items-start gap-6 px-5 py-4 ">
      <UserOptions />
      <TopWeek/>
      <EnVente/>
    </div>
  )
}

export default RightSidebar
