import SideBar from "../components/side-bar"

const Layout = ({children}: {children:React.ReactNode}) =>{
    return (
        <div className="flex h-screen flex-col md:flex-row ">
            <div className="w-full flex-none md:w-64"><SideBar/></div>
            <div className="">{children}</div>
        </div>
    )
}

export default Layout