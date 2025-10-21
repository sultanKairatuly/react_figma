"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import SearchIcon from "@/assets/icons/search-normal.svg";
import ArrowSortIcon from '@/assets/icons/arrow-transfer-02.svg'
import EditIcon from "@/assets/icons/edit-2.svg";
import CloseIcon from "@/assets/icons/close-circle (1).svg";
import ArrowDown from "@/assets/icons/arrow-down-02 (1).svg";


export default function UsersTable() {
  const users = [
    { id: 1, name: "Верещагин Елисей Тихонович", role: "Директор", phone: "+7 702 456 43 23", email: "mail@mail.kz", status: "Активный" },
    { id: 2, name: "Вдовин Артём Александрович", role: "Работник", phone: "+7 702 456 43 23", email: "mail@mail.kz", status: "Активный" },
    { id: 3, name: "Виноградов Павел Никитич", role: "Работник", phone: "+7 702 456 43 23", email: "mail@mail.kz", status: "Заблокирован" },
    { id: 4, name: "Васильева Полина Артёмовна", role: "Работник", phone: "+7 702 456 43 23", email: "mail@mail.kz", status: "Архив" },
    { id: 5, name: "Соколов Илья Леонидович", role: "Работник", phone: "+7 702 456 43 23", email: "mail@mail.kz", status: "Активный" },
    { id: 6, name: "Верещагин Елисей Тихонович", role: "Работник", phone: "+7 702 456 43 23", email: "mail@mail.kz", status: "Архив" },
    { id: 7, name: "Маркин Михаил Фёдорович", role: "Работник", phone: "+7 702 456 43 23", email: "mail@mail.kz", status: "Активный" },
  ]

  const headerRows = [
    'ID',
    'ФИО',
    'Должность',
    'Номер телефона',
    'Почта',
    'Статус',
    '',
    '',
  ]


  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Активный":
        return "bg-[#335FF9] text-white"
      case "Заблокирован":
        return "bg-[#FF4D4F] text-white"
      case "Архив":
        return "bg-[#44475A] text-white"
      default:
        return "bg-gray-300 text-black"
    }
  }

  return (
    <div>
      <div className="relative w-full rounded-tl-lg gap-[10px] px-[20px] flex items-center rounded-tr-lg py-[20px] border-[1px] border-[#E5E8F4]  border-b-none bg-white">
        <img src={String(SearchIcon)} className="w-[20px] h-[20px]"  alt="search icon" />
        <input placeholder="Поиск по таблице..." className="text-[#4A5271] font-medium text-[14px] outline-none border-none" />
      </div>
      <div className=" border-[1px] border-[#E5E8F4] border-t-0  bg-white">
        <Table >
          <TableHeader>
            <TableRow>
                {headerRows.map((e, idx) => (
                        <TableHead key={idx} className="text-[#4A5271]  border-l-[1px] border-[#E5E8F4] uppercase text-[10px]">
                         <div className="flex items-center gap-2">
                            {e}
                            {['ID', 'ФИО'].includes(e) && (
                            <img className="w-[14px] h-[14px]" src={String(ArrowSortIcon)} alt="" />
                            )}
                        </div>
                        </TableHead>

                ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} >
                <TableCell className=" flex justify-center items-center">{user.id}</TableCell>
                <TableCell className=" border-[1px] border-l-[#E5E8F4]">{user.name}</TableCell>
                <TableCell className=" border-[1px] border-l-[#E5E8F4]">
                  <Badge variant="secondary" className="text-gray-800 bg-gray-100 px-3 py-1 rounded-full">
                    {user.role}
                  </Badge>
                </TableCell>
                <TableCell className=" border-[1px] border-l-[#E5E8F4]">{user.phone}</TableCell>
                <TableCell className=" border-[1px] border-l-[#E5E8F4]">{user.email}</TableCell>
                <TableCell className=" border-[1px] border-l-[#E5E8F4]">
                  <Badge className={`px-3 py-1 rounded-full ${getStatusStyle(user.status)}`}>
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell className="border-[1px] border-l-[#E5E8F4]"></TableCell>
                <TableCell className=" flex justify-center gap-1">
                  <button  className="flex justify-center items-center rounded-lg w-[32px] h-[32px] text-[#335FF9] bg-[#E5E8F4]">
                    <img src={String(EditIcon)} className="w-4 h-4" />
                  </button>
                  <button  className="flex justify-center items-center rounded-lg w-[32px] h-[32px] text-red-500 bg-[#E5E8F4]">
                    <img src={String(CloseIcon)} className="w-4 h-4" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="py-[20px] rounded-br-lg rounded-bl-lg px-[30px] border-[1px] border-[#E5E8F4]  border-t-0 flex justify-between items-center text-sm text-gray-500 bg-white">
        <span className="font-bold text-[#4A5271] uppercase text-[10px]">Показано 1-7 из 30 таблиц</span>
        <div className="flex items-center gap-1">
          <Button variant="outline" className="mr-[10px] border-[#E5E8F4] py-[20px]  px-[12px] text-[#4A5271]  border-[1px]" size="sm">
            Показать: <span className="text-[#335FF9]">7</span>
            <img src={String(ArrowDown)} className="w-[18px] h-[18px]" alt="arrow down" />
          </Button>
          
          <Button variant="outline" className="border-[#335FF9] text-[#335FF9] border-[1px] py-[20px]  px-[12px]" size="sm">1</Button>
          <Button variant="outline" className="border-[#000000] border-[1px] py-[20px]  px-[12px]" size="sm">2</Button>
          <Button variant="outline" className="border-[#000000] border-[1px] py-[20px]  px-[12px]" size="sm">3</Button>
        </div>
      </div>
    </div>
  )
}
