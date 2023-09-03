/** @format */
import { ChevronLeftIcon, LightBulbIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Shop from "@/img/shop.svg";
function SideBar() {
  const [open, setOpen] = useState(true);
  const Menus = [
    {
      title: "Nursing",
      src: "board",
    },
    {
      title: "Belanja",
      src: "shop",
    },
  ];
  return (
    <div
      className={`${
        open ? "w-72" : "w-20"
      } duration-300 p-5 pt-7 h-screen bg-purple-900 relative`}
    >
      <ChevronLeftIcon
        className={`absolute w-7 top-9 rounded-full bg-slate-200 p-1 cursor-pointer -right-3 border-2 border-purple-800 self-center ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-x-4 items-center">
        <LightBulbIcon
          className={`bg-white w-12
          } text-purple-500 rounded-md border-purple-950 shadow-lg hover:text-purple-50 hover:bg-purple-300 duration-300 cursor-pointer`}
        />
        <h1
          className={`capitalize text-white origin-left font-semibold cursor-pointer text-xl duration-500 ${
            !open && "scale-0"
          }`}
        >
          nursing
        </h1>
      </div>
      <ul className="pt-6 text-white font-semibold">
        {Menus.map((menu, index) => (
          <li key={index} className="text-white text-sm flex">
            <img src="${menu.src}" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
