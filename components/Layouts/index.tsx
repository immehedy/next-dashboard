import Footer from "./Footer"
import Header from "./Header"
import SidebarCmp from "./SidebarCmp"

const Layout = ({children} : any) => {
  return (
    <div className="flex gap-2 w-full">
      <SidebarCmp/>
    <div className="flex-1">
    <Header/>
    <div className="w-full h-screen bg-[#CCE1F2] p-4">
      {children}
    </div>
    <Footer/>
    </div>
    </div>
  )
}

export default Layout