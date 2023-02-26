import BreadCrumbs from "@/components/reusable/BreadCrumb"
import { Avatar } from "flowbite-react"

const Header = () => {
  return (
    <div className="h-auto p-4 w-fullt flex items-center">
      <div className="flex-1">
      <BreadCrumbs/>
      </div>
      
      <div className="">
  <Avatar
    img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
    rounded={true}
    bordered={true}
    status="online"
    statusPosition="bottom-right"
  />
  {/* <p >Admin</p> */}
</div>
    
    </div>
  )
}

export default Header