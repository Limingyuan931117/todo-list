import React from "react";
import styled from "styled-components";

const LayoutItems = styled.div`
  width: calc(100% - 10px);
  height: 40px;
  display: flex;
  background: #dedede;
  margin: 5px;
`;

const Item = styled.div`
  width: 33%;
  padding: 5px;
`;

export default function TableHeader() {
  return (
    <LayoutItems>
      <Item>名称</Item>
      <Item>版本号</Item>
      <Item>操作</Item>
    </LayoutItems>
  );
}
