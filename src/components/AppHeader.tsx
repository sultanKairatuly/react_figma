import LogoImage from "@/assets/EMC Gold ERP.png"
import BellIcon from "@/assets/icons/notification.svg"
import ProfileIcon from "@/assets/icons/profile-circle.svg"


export function AppHeader(){
    return (
        <header className="flex justify-between pb-[30px] border-b-[1px] border-b-[#E5E8F4]">
            <img src={LogoImage} className="object-contain" />
            <div className="flex gap-[16px] items-center">
              <button className=" bg-transparent border-[1px] border-[#E5E8F4] rounded-full  p-[16px] ">
                <img src={String(BellIcon)} />
              </button>
              <button className='p-[12px] rounded-lg text-[#4A5271] flex justify-between gap-[16px] bg-[#fff] border-[1px] border-[#E5E8F4]'>
                <img src={String(ProfileIcon)} />
                <div>Артём</div>
              </button>
            </div>
        </header>
    )
}