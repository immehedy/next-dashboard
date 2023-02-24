import Header from "./Header"
import Sidebar from "./Sidebar"

const Layout = ({children} : any) => {
  return (
    <>
    <Sidebar/>
    <div>
    <Header/>
    {children}
    </div>
    </>
  )
}

export default Layout