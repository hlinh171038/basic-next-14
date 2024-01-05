import { IoLogoSnapchat } from "react-icons/io";
import NavLink from "./nav-link";

import { LiaSignOutAltSolid } from "react-icons/lia";
import Link from "next/link";
import { PowerIcon } from "lucide-react";

const SideBar = () =>{
    return (
        <div className="w-full bg-neutral-50 relative h-screen">
            <div className="w-full h-[200px] bg-blue-400 rounded-sm flex flex-col items-center justify-center"> 
                
                    <IoLogoSnapchat className="text-white w-20 h-20 "/>
                    <p className="uppercase text-white font-semibold">ghost Statistis.</p>
                
            </div>
            <div> 
                <NavLink />
            </div>
            <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
            <form
            className=" absolute bottom-0 w-full p-1"
            >
            <button className=" flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-200 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                <PowerIcon className="w-6" />
                <div className="hidden md:block">Sign Out</div>
            </button>
            </form>
        </div>
    )
}

export default SideBar