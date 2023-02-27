import { Table } from "flowbite-react";
import PaginationCmp from "../reusable/Pagination";

const OrdersPage = () => {
const arrays = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  ];

  return (
    <>
    <Table striped={true}>
      <Table.Head>
        <Table.HeadCell>Product name</Table.HeadCell>
        <Table.HeadCell>Color</Table.HeadCell>
        <Table.HeadCell>Category</Table.HeadCell>
        <Table.HeadCell>Price</Table.HeadCell>
        <Table.HeadCell>
          Qty
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {arrays?.map((item, i) => (
          <Table.Row
            key={i}
            className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Apple MacBook Pro {`17"`}
            </Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell>
              {2 * i}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
    <PaginationCmp/>
    </>
  );
}

export default OrdersPage