import { AppHeader } from "./AppHeader";
import UsersTable from "./UsersTable";
import { ArrowRight } from "lucide-react";
import ArrowLeft from "@/assets/icons/arrow-left-01.svg"
import PlusIcon from "@/assets/icons/add-circle.svg"

export default function AppDashboard() {
  const breadcrumbs = ["Dashboard", "Пользователи"];

  return (
    <main className="bg-[#F7F7FA] w-full px-[50px] py-[30px]">
      <AppHeader />
      <div className="flex items-center  text-gray-600 text-[14px] font-medium mt-[30px]">
        {breadcrumbs.map((el, idx) => (
          <div key={el} className="flex items-center">
            <span className="text-[14px] font-light text-[#1F2333]">{el}</span>
            {idx < breadcrumbs.length - 1 && (
              <ArrowRight size={5} color="#4A5271" className="mx-2 w-4 h-4 text-gray-400" />
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center my-[30px]">
        <button className="rounded-full w-[28px] flex justify-center items-center h-[28px] bg-[#335FF9]">
          <img src={String(ArrowLeft)} className="w-[16px] h-[16px] " />
        </button>
        <h3 className="text-[#1F2333] text-[32px] ml-[10px] mr-[30px]">Пользователи</h3>
        <button className="bg-[#335FF9] rounded-lg text-white gap-[10px] flex items-center  text-[13px] py-[8px] px-[12px]">
          <span>Добавить пользователя</span>
          <img src={String(PlusIcon)} alt="add icon" />
        </button>
      </div>
      <UsersTable />
    </main>
  );
}
