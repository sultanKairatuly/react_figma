import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from "./ui/sidebar"
import categoryIcon from "@/assets/icons/category-2.svg"
import tagUserIcon from "@/assets/icons/tag-user.svg"
import profileIcon from "@/assets/icons/profile-2user.svg"
import saveAddIcon from "@/assets/icons/save-add.svg"
import peopleIcon from "@/assets/icons/people.svg"
import shoppingCartIcon from "@/assets/icons/shopping-cart.svg"
import moneySendIcon from "@/assets/icons/money-send.svg"
import documentIcon from "@/assets/icons/document.svg"
import { CustomTrigger } from "./CustomTrigger"


const groupItemsOne = [
  { title: "Админ панель", url: "#", icon: categoryIcon },
  { title: "Роли", url: "#", icon: tagUserIcon },
  { title: "Пользователи", url: "#", icon: profileIcon },
]

const groupItemsTwo = [
  { title: "Заявки на закуп", url: "#", icon: saveAddIcon },
  { title: "Кадры", url: "#", icon: peopleIcon },
  { title: "Склад", url: "#", icon: shoppingCartIcon },
  { title: "Финансы", url: "#", icon: moneySendIcon },
  { title: "Договора", url: "#", icon: documentIcon },
]

export function AppSidebar() {

  const { open } = useSidebar();

  return (
    <Sidebar collapsible="icon" className="rounded-tr-lg"   >
      <SidebarHeader >
        <CustomTrigger />
      </SidebarHeader>
      <SidebarContent className="overflow-hidden" >
        <SidebarGroup  >
          <SidebarGroupContent className={open ? "px-[20px]" : ''}>
            <SidebarMenu>
              {groupItemsOne.map((item) => (
                <SidebarMenuItem className="mt-[20px] " key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className={`${item.title === 'Пользователи' ? 
                      'text-[#335FF9] bg-white hover:bg-white hover:text-[#335FF9] active:bg-white active:text-[#335FF9]' : 
                      'hover:bg-[#335FF9] text-white hover:text-white active:bg-[#335FF9] active:text-white'}  p-[20px]`}
                  >
                    <div className="cursor-pointer ">
                      <img src={String(item.icon)} />
                      <div className={`text-[16px] font-medium`}>{item.title}</div>
                    </div>
             
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator className="bg-[#FFFFFF26]" />
        <SidebarGroup>
          <SidebarGroupContent className={open ? "px-[20px]" : ''} >
            <SidebarMenu>
              {groupItemsTwo.map((item) => (
                 <SidebarMenuItem className="mt-[20px] " key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className={`${item.title === 'Пользователи' ? 
                      'text-[#335FF9] bg-white hover:bg-white hover:text-[#335FF9] active:bg-white active:text-[#335FF9]' : 
                      'hover:bg-[#335FF9] text-white hover:text-white active:bg-[#335FF9] active:text-white'}  p-[20px]`}
                  >
                    <div className="cursor-pointer ">
                      <img src={String(item.icon)} />
                      <div className={`text-[16px] font-medium`}>{item.title}</div>
                    </div>
             
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}