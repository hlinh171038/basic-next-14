'use client'
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Input from "@/components/input"
import { useCallback, useState } from "react"


import { MdOutlineKey } from "react-icons/md";
import { FcGoogle } from "react-icons/fc"
import { MdOutlineDriveFileRenameOutline } from "react-icons/md"
import { Button } from "@/components/ui/button"

const Login = () =>{
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [emailSignUp, setEmailSignUp] = useState('')
    const [passwordSignUp,setPasswordSignUp] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const handleOnChange = () =>{

    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2">
            <div>
                <Image
                    src="/bg-login-2.webp"
                    alt="login "
                    width="1000"
                    height="1000"
                    style={{
                        width: '100%',
                        height: '100vh',
                        objectFit:"cover"
                    }}
                    quality={100}
                />
            </div>
            <div className="w-full h-full flex justify-center items-center">
                <Tabs defaultValue="account" className="w-[400px]">
                    <TabsList className="w-full ">
                        <TabsTrigger value="account" className="w-full">Sign In</TabsTrigger>
                        <TabsTrigger value="password" className="w-full">Sign Up</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account" className="bg-neutral-100 rounded-md">
                        <div className="p-3">
                            
                            <Input 
                                type="text"
                                placeholder="Email"
                                value={email}
                                required={true}
                                onChange={(e:any)=>setEmail(e.target.value)}
                                icon={FcGoogle}
                                
                            />
                            <Input 
                                type="password"
                                placeholder="Password"
                                value={password}
                                required={true}
                                onChange={(e:any) =>setPassword(e.target.value)}
                                icon ={MdOutlineKey}
                            />
                            <div className="flex items-center text-neutral-600 text-[12px] gap-2">
                                <input type="checkbox" />
                                <p>Remember me 30 day</p>
                            </div>
                            <Button variant="primary" className="w-full mt-3">Login</Button>
                            <div className="w-full flex items-center justify-center mt-3">
                                <p className="text-neutral-600 text-[12px]">Dont have account ? Registry now</p>
                            </div>
                        </div>
                        
                    </TabsContent>
                    <TabsContent value="password">
                    <div className="p-3 bg-neutral-100 rounded-md">
                             <Input 
                                    type="text"
                                    placeholder="Name"
                                    value={name}
                                    required={true}
                                    onChange={(e:any)=>setName(e.target.value)}
                                    icon={MdOutlineDriveFileRenameOutline} 
                            />
                            <Input 
                                type="text"
                                placeholder="Email"
                                value={emailSignUp}
                                required={true}
                                onChange={(e:any)=>setEmailSignUp(e.target.value)}
                                icon={FcGoogle}
                                
                            />
                            
                            <Input 
                                type="password"
                                placeholder="Password"
                                value={passwordSignUp}
                                required={true}
                                onChange={(e:any)=>setPasswordSignUp(e.target.value)}
                                icon ={MdOutlineKey}
                            />
                            <Input 
                                type="password"
                                placeholder="Confirm Password"
                                value={passwordConfirm}
                                required={true}
                                onChange={(e:any)=>setPasswordConfirm(e.target.value)}
                                icon ={MdOutlineKey}
                            />
                            <div className="flex items-center text-neutral-600 text-[12px] gap-2">
                                <input type="checkbox" />
                                <p>Remember me 30 day</p>
                            </div>
                            <Button variant="primary" className="w-full mt-3">Sign Up</Button>
                            <div className="w-full flex items-center justify-center mt-3">
                                <p className="text-neutral-600 text-[12px]">You have account ? Login now</p>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>

            </div>
        </div>
    )
}

export default Login