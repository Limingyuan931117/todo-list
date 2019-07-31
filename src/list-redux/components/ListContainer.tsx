import React, { useEffect } from "react";
import ListLayout from "./ListLayout";
import Button from "./Button";
import Table from "./Table";
import AddDialog from "./AddDialog";
import useDataManage from "./useDataManage";
import Container from "../createContainer";
import { getAllVersions } from "../actions";

const ListContainer: React.SFC = () => {
  const {
    items,
    open,
    setOpen,
    handleChange,
    handleDelete,
    handleAdd
  } = useDataManage();

  const { listDispatch, list } = Container.useContainer();

  useEffect(() => {
    listDispatch({ type: "123add" });
  }, []);

  return (
    <ListLayout>
      <Button onClick={() => setOpen(true)}>添加</Button>
      <Table
        items={list}
        itemsChange={handleChange}
        handleDelete={handleDelete}
      />
      {open && (
        <AddDialog handleAdd={handleAdd} onClose={() => setOpen(false)} />
      )}
    </ListLayout>
  );
};

export default ListContainer;
