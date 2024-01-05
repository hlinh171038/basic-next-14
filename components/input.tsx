"use client"

import { useCallback } from "react"
import {IconType} from 'react-icons/lib'
import { Key, KeyIcon } from "lucide-react"
import { cn } from "@/lib/utils"


interface InputProps {
    type: string,
    placeholder?: string,
    value: string,
    onChange: (e:any) =>void,
    required?: boolean,
    icon: IconType,
    
}

const Input = ({
    type,
    placeholder,
    value = '',
    onChange,
    required, 
    icon:Icon
}:InputProps) =>{

   
    return (
        <div className="relative">
             <input 
                type={type} 
                placeholder={placeholder} 
                value={value} 
                onChange={onChange} 
                required={required} 
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm  placeholder:text-gray-500 transition-all focus:outline-blue-600  mb-3"
              />
            <Icon className="pointer-events-none absolute top-[30%] left-3 w-4 h-4 text-neutral-400 peer-focus:text-neutral-900"/>
        </div>
    )
      
}

export default Input