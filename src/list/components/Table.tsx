import React from "react";
import styled from "styled-components";
import TableHeader from "./TableHeader";
import TableColumn from "./TableColumn";

const TableLayout = styled.div``;

interface ItemProps {
  title: string;
  num: string;
  id: string;
}

interface Props {
  items: ItemProps[];
  itemsChange?: (value: ItemProps) => void;
  handleDelete?: (id: string) => void;
}

export default function Table(props: Props) {
  const { items, itemsChange, handleDelete } = props;
  return (
    <TableLayout>
      <TableHeader />
      {items &&
        items.map((item: ItemProps, index: number) => (
          <TableColumn
            key={index}
            title={item.title}
            num={item.num}
            index={index}
            itemsChange={itemsChange}
            handleDelete={handleDelete}
            id={item.id}
          />
        ))}
    </TableLayout>
  );
}
