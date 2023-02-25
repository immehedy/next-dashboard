import { Sidebar } from "flowbite-react";
import { useRouter } from "next/router";
import { options } from "./options";

const SidebarCmp = () => {
  const router = useRouter();
  console.log({router})
  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Logo href="/" img="" imgAlt="" style={{ color: "gray" }}>
        Fourbit
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {options?.map((option, i) => (
            <Sidebar.Item
              key={i}
              href={option?.route}
              icon={option?.icon}
              active={router?.pathname === option?.route}>
              {option?.name}
            </Sidebar.Item>
          ))}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SidebarCmp;
