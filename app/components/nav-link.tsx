"use client"

import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineContactPage } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const NavLink = () =>{
    const pathname = usePathname()
    const links = [
        {   
            name:"home",
            href:"/dashboard",
            icon:IoHomeOutline
        },
        {   
            name:"invoices",
            href:"/dashboard/invoices",
            icon:MdOutlineContactPage
        },
        {   
            name:"customer",
            href:"/dashboard/customer",
            icon:FaUsers
        },
    ]

    console.log(pathname === links[0].href)

    return (
       <>
        {links.map((link)=>{
            const LinkIcon = link.icon;
            console.log(pathname === links[0].href)
            return ( 
                <Link 
                    key={link.name}
                    href={link.href}  
                    className={clsx("flex grow items-center justify-start gap-2 rounded-md bg-gray-100 text-sm font-medium p-2 m-1 capitalize hover:text-blue-600 hover:bg-blue-200 transition-all cursor-pointer",
                    {"text-blue-600 bg-blue-200": pathname === link.href}
               
                    )}
                    >
                    <LinkIcon />
                    {link.name}
                </Link>
            )
        })}
       </>
    )
}

export default NavLink