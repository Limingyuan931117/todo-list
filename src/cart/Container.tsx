import React, { useState, useEffect } from "react";
import Left from "./Left";
import Right from "./Right";

function App() {
  const [data, setData] = useState();
  const [selected, setSelected] = useState();

  useEffect(() => {
    const initalData =
      localStorage.getItem("left") &&
      JSON.parse(localStorage.getItem("left") || "");
    setData(
      initalData
        ? initalData
        : [
            { id: "1", name: "商品1", describe: "描述1", stock: 10 },
            { id: "2", name: "商品2", describe: "描述2", stock: 20 },
            { id: "3", name: "商品3", describe: "描述3", stock: 0 },
            { id: "4", name: "商品4", describe: "描述4", stock: 100 }
          ]
    );
  }, []);

  const onHandleClick = (item: {
    id: string;
    name: string;
    describe: string;
    stock: number;
  }) => {
    const index = data.findIndex((_: { id: string }) => _.id === item.id);
    if (index !== -1) {
      const newData = [
        ...data.slice(0, index),
        { ...item, stock: item.stock - 1 },
        ...data.slice(index + 1)
      ];
      setData(newData);

      localStorage.setItem("left", JSON.stringify(newData));
    }
    const fn =
      selected &&
      selected.some((_: { id: string }) => {
        if (_.id === item.id) {
          return true;
        }
      });
    if (fn) {
      const idx = selected.findIndex((_: { id: string }) => _.id === item.id);
      const i = selected.filter((_: { id: string }) => _.id === item.id);
      if (idx !== -1) {
        setSelected([
          ...selected.slice(0, idx),
          { ...item, stock: i[0].stock + 1 },
          ...selected.slice(idx + 1)
        ]);
      }
    } else {
      const newSelected = selected
        ? [...selected, { ...item, stock: 1 }]
        : [{ ...item, stock: 1 }];
      setSelected(newSelected);
    }
  };

  const onAdd = (item: { id: string; stock: number }, stock: number) => {
    const index = data.findIndex((_: { id: string }) => _.id === item.id);
    const i = data.filter((_: { id: string }) => _.id === item.id);
    if (index !== -1) {
      setData([
        ...data.slice(0, index),
        { ...item, stock: i[0].stock - 1 },
        ...data.slice(index + 1)
      ]);
    }
    const idx = selected.findIndex((_: { id: string }) => _.id === item.id);
    if (idx !== -1) {
      setSelected([
        ...selected.slice(0, idx),
        { ...item, stock: stock + 1 },
        ...selected.slice(idx + 1)
      ]);
    }
  };

  const onReduce = (item: { id: string; stock: number }, stock: number) => {
    const index = data.findIndex((_: { id: string }) => _.id === item.id);
    const i = data.filter((_: { id: string }) => _.id === item.id);
    if (index !== -1) {
      setData([
        ...data.slice(0, index),
        { ...item, stock: i[0].stock + 1 },
        ...data.slice(index + 1)
      ]);
    }
    const idx = selected.findIndex((_: { id: string }) => _.id === item.id);
    if (idx !== -1) {
      setSelected([
        ...selected.slice(0, idx),
        { ...item, stock: stock - 1 },
        ...selected.slice(idx + 1)
      ]);
    }
  };

  const onRemove = (item: { id: string }, stock: number) => {
    const index = data.findIndex((_: { id: string }) => _.id === item.id);
    const i = data.filter((_: { id: string }) => _.id === item.id);
    if (index !== -1) {
      setData([
        ...data.slice(0, index),
        { ...item, stock: i[0].stock + stock },
        ...data.slice(index + 1)
      ]);
    }
    const idx = selected.findIndex((_: { id: string }) => _.id === item.id);
    if (idx !== -1) {
      setSelected([...selected.slice(0, idx), ...selected.slice(idx + 1)]);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "flex-start" }}>
      <Left data={data} onClick={onHandleClick} />
      <Right
        data={data}
        selected={selected}
        onAdd={onAdd}
        onReduce={onReduce}
        onRemove={onRemove}
      />
    </div>
  );
}

export default App;
