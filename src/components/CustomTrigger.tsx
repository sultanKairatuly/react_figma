import { useSidebar } from "@/components/ui/sidebar"
import ArrowSquareLeft from "@/assets/icons/arrow-square-left.svg";


export function CustomTrigger() {
  const { toggleSidebar, open } = useSidebar()

  return ( 
    <div className={` ${open ? 'justify-end pr-[40px]' : 'justify-center' }  pt-[40px] flex transition`}>
    <img className={` ${!open && 'rotate-180'}  w-[24px] h-[24px] cursor-pointer`}  src={String(ArrowSquareLeft)} onClick={toggleSidebar}>
    </img>
    </div>

  )
}