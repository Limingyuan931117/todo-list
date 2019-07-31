import React from "react";

export interface Item {
  id: string;
  name: string;
  describe: string;
  stock: number;
}

export interface Props {
  data: Item[];
  onClick: (item: {
    id: string;
    name: string;
    describe: string;
    stock: number;
  }) => void;
}

export default function Left(props: Props) {
  return (
    <div>
      {props.data &&
        props.data.map((item, index) => (
          <div key={index}>
            {item.name} {item.describe} {item.stock}
            <button
              onClick={() => props.onClick(item)}
              disabled={item.stock === 0}
            >
              加入购物车
            </button>
          </div>
        ))}
    </div>
  );
}
