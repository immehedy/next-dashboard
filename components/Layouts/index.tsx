import Header from "./Header"
import SidebarCmp from "./SidebarCmp"

const Layout = ({children} : any) => {
  return (
    <div className="flex gap-2 w-full">
      <div>
      <SidebarCmp/>
      </div>
    
    <div className="flex-1">
    <Header/>
    <div className="w-full h-screen bg-[#F9DED7] p-4">
      {children}
    </div>
    </div>
    
    </div>
  )
}

export default Layout