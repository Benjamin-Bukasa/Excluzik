import IconsData from "../icons/IconsData.js"

function SidebarNav() {
  return (
    <div className="">
      {
        IconsData.map((icon,e)=>(
            <ul key={e}>
                <li onClick={'/'} className="flex justify-between items-center gap-2">
                    <div className="">{icon.icon}</div>
                    <div className="">{icon.name}</div>
                </li>
            </ul>
        ))
      }
    </div>
  )
}

export default SidebarNav
