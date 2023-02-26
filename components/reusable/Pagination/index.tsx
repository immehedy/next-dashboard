import { Pagination } from "flowbite-react";
import { useState } from "react";

const PaginationCmp = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (newPage: number) => {
    console.log({ newPage });
  };
  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={onPageChange}
      showIcons={true}
      totalPages={4}
    />
  );
};

export default PaginationCmp;
