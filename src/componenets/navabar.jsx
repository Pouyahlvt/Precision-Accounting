"use client";

import { useState } from "react";
import {
  UsersIcon,
  HomeIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import {
  UsersIcon as UsersIconSolid,
  HomeIcon as HomeIconSolid,
  DocumentTextIcon as DocumentTextIconSolid,
} from "@heroicons/react/24/solid";
import { PanelLeft } from "lucide-react";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState(false);

  return (
    <div
      className={`fixed bg-(--color-sky-blue) h-screen border-r-2 border-white 
        transition-all duration-200 ease-in-out overflow-hidden font-poppins
        ${activeNav ? "w-55 rounded-r-xl shadow-2xl/50 shadow-white" : "w-12"}`}>
      <button
        onClick={() => setActiveNav(!activeNav)}
        className={`flex text-3xl ml-2 mt-2 text-white font-source-sans tracking-tighter `}>
        {<PanelLeft className="w-8 h-8" />}
        {activeNav && <p className="ml-4">Menu</p>}
      </button>
      <button
        onClick={() => setActiveNav(!activeNav)}
        className={`flex  text-2xl ml-1 mt-4 text-white hover:bg-(--color-dusk-blue) rounded-md p-1
        transition-all duration-150 ease-in-out ${activeNav ? "w-50" : ""}`}>
        {<HomeIcon className="w-8 h-8" />}
        {activeNav && <p className="ml-4">Invoices</p>}
      </button>
      <button
        onClick={() => setActiveNav(!activeNav)}
        className={`flex  text-2xl ml-1 mt-4 text-white hover:bg-(--color-dusk-blue) rounded-md p-1
        transition-all duration-150 ease-in-out ${activeNav ? "w-50" : ""}`}>
        {<DocumentTextIcon className="w-8 h-8" />}
        {activeNav && <p className="ml-4">Invoices</p>}
      </button>
      <button
        onClick={() => setActiveNav(!activeNav)}
        className={`flex  text-2xl ml-1 mt-4 text-white hover:bg-(--color-dusk-blue) rounded-md p-1
        transition-all duration-150 ease-in-out ${activeNav ? "w-50" : ""}`}>
        {<UsersIcon className="w-8 h-8" />}
        {activeNav && <p className="ml-4">Invoices</p>}
      </button>
      <button
        onClick={() => setActiveNav(!activeNav)}
        className={`absolute flex bottom-2 text-2xl ml-1 text-white hover:bg-(--color-dusk-blue) rounded-md p-1
        transition-all duration-150 ease-in-out ${activeNav ? "w-50" : ""}`}>
        {<Cog6ToothIcon className="w-8 h-8" />}
        {activeNav && <p className="ml-4">Setting</p>}
      </button>
    </div>
  );
};

export default Navbar;
