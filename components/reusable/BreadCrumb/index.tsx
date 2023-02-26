import { Breadcrumb } from "flowbite-react";
import { useRouter } from "next/router";
import React from "react";
import { HiHome } from "react-icons/hi";
import { convertToUppercase } from "../firstLetterToUpperCase";

const BreadCrumbs = () => {
  const router = useRouter();
  const breadItems = router?.pathname?.split("/");
  return (
    <Breadcrumb aria-label="Default breadcrumb example">
      {breadItems
        ?.filter((bItem, index) => breadItems?.indexOf(bItem) === index)
        ?.map((item, i) => (
          <Breadcrumb.Item
            key={i}
            href={item === "" ? "/" : `/${item}`}
            icon={item === "" ? HiHome : undefined}>
            {item === "" ? "Home" : convertToUppercase(item)}
          </Breadcrumb.Item>
        ))}
    </Breadcrumb>
  );
};

export default BreadCrumbs;
