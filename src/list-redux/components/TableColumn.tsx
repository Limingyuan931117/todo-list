import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";

const TableColumnLayout = styled.div`
  display: flex;
`;

const ColumnItem = styled.div`
  width: 33%;
  padding: 5px;
`;

const ButtonLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Warn = styled.div`
  font-size: 12px;
  color: red;
`;

interface ItemProps {
  title: string;
  num: string;
  id: string;
}

export default function TableColumn({
  title,
  num,
  index,
  itemsChange,
  key,
  handleDelete,
  id
}: {
  title: string;
  num: string;
  index: number;
  id: string;
  handleDelete?: (id: string) => void;
  itemsChange?: (value: ItemProps) => void;
  key?: number;
}) {
  const [versionData, setVersionData] = useState({ title, num, id });
  const [fetch, setFetch] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (name: string, value: string) => {
    setVersionData({ ...versionData, [name]: value });
  };

  const handleEdit = () => {
    setFetch(true);
  };

  const handleSave = () => {
    const regex = /^\p{Number}+$/u;
    if (!regex.test(versionData.num)) {
      setError(true);
    } else {
      setError(false);
      setFetch(false);

      if (itemsChange) {
        itemsChange(versionData);
      }
    }
  };

  const deleteClick = () => {
    if (handleDelete) {
      handleDelete(id);
    }
  };

  return (
    <TableColumnLayout>
      <ColumnItem>
        {fetch ? (
          <Input
            type="text"
            value={versionData.title}
            onChange={e => handleChange("title", e.target.value)}
          />
        ) : (
          versionData.title
        )}
      </ColumnItem>
      <ColumnItem>
        {fetch ? (
          <Input
            type="text"
            value={versionData.num}
            onChange={e => handleChange("num", e.target.value)}
          />
        ) : (
          versionData.num
        )}
        {error && <Warn>版本号只能填写数字</Warn>}
      </ColumnItem>
      <ColumnItem>
        <ButtonLayout>
          {fetch ? (
            <Button onClick={handleSave}>保存</Button>
          ) : (
            <Button onClick={handleEdit}>编辑</Button>
          )}

          <Button onClick={deleteClick}>删除</Button>
        </ButtonLayout>
      </ColumnItem>
    </TableColumnLayout>
  );
}
