import { Avatar } from "flowbite-react"

const Header = () => {
  return (
    <div className="h-auto p-4 w-fullt">
      <div className="flex flex-wrap gap-2 justify-end items-center">
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