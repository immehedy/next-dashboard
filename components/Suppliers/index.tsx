import { Table } from "flowbite-react";
import PaginationCmp from "../reusable/Pagination";

const SupplierPage = () => {
  const arrays = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  ];

  return (
    <>
    <Table striped={true}>
      <Table.Head>
        <Table.HeadCell>Brand</Table.HeadCell>
        <Table.HeadCell>Name</Table.HeadCell>
        <Table.HeadCell>Email</Table.HeadCell>
        <Table.HeadCell>Phone</Table.HeadCell>
        <Table.HeadCell>Warehouse</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {arrays?.map((item, i) => (
          <Table.Row
            key={i}
            className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Apple
            </Table.Cell>
            <Table.Cell>John Wick</Table.Cell>
            <Table.Cell>john@wick.Custom404</Table.Cell>
            <Table.Cell>+1555555555</Table.Cell>
            <Table.Cell>California</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
    <PaginationCmp/>
    </>
  );
};

export default SupplierPage;
