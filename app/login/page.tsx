'use client'
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Input from "@/components/input"
import { useCallback } from "react"
import { KeyIcon } from "lucide-react"
import { FcGoogle } from "react-icons/fc"

const Login = () =>{

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
            <div className="w-full h-full flex justify-center">
                <Tabs defaultValue="account" className="w-[400px]">
                    <TabsList>
                        <TabsTrigger value="account">Sign In</TabsTrigger>
                        <TabsTrigger value="password">Sign Up</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account" className="bg-neutral-100">
                        <div>
                            <Input 
                                type="text"
                                placeholder="Email"
                                value=""
                                required={true}
                                onChange={()=>{}}
                                icon={FcGoogle}
                            />
                        </div>
                    </TabsContent>
                    <TabsContent value="password">Change your password here.</TabsContent>
                </Tabs>

            </div>
        </div>
    )
}

export default Login