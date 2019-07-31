import React from "react";
import ListLayout from "./ListLayout";
import Button from "./Button";
import Table from "./Table";
import AddDialog from "./AddDialog";
import useDataManage from "./useDataManage";

const ListContainer: React.SFC = () => {
  const {
    items,
    open,
    setOpen,
    handleChange,
    handleDelete,
    handleAdd
  } = useDataManage();

  return (
    <ListLayout>
      <Button onClick={() => setOpen(true)}>添加</Button>
      <Table
        items={items}
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
