import React from "react";

export interface Item {
  id: string;
  name: string;
  describe: string;
  stock: number;
}

export interface Props {
  data: Item[];
  selected: Item[];
  onAdd: (item: Item, stock: number) => void;
  onReduce: (item: Item, stock: number) => void;
  onRemove: (item: Item, stock: number) => void;
}

export default function Right(props: Props) {
  return (
    <div>
      {props.selected &&
        props.selected.map(item => (
          <div>
            {item.name} {item.describe}
            <button onClick={() => props.onAdd(item, item.stock)}>+</button>
            {item.stock}
            <button
              onClick={() => props.onReduce(item, item.stock)}
              disabled={item.stock === 1}
            >
              -
            </button>
            <button onClick={() => props.onRemove(item, item.stock)}>
              移除
            </button>
          </div>
        ))}
    </div>
  );
}
