import React, { useState } from "react";
import Point from "./Point";
import StarLayout from "./StarLayout";
import Star from "./Star";

function radius() {
  const value = Math.random() * 20;
  if (value < 4) {
    radius();
  } else {
    return value;
  }
}

function initialStars() {
  const arr = [];
  for (let i = 0; i < 100; i++) {
    const randomWidth = Math.random() * 600;
    const randomHeight = Math.random() * 600;
    const colorX = Math.random() * 255;
    const colorY = Math.random() * 255;
    const colorZ = Math.random() * 255;
    const star = new Point(
      randomWidth,
      randomHeight,
      5,
      `rgb(${colorX}, ${colorY}, ${colorZ})`
    );
    arr.push(star);
  }

  return arr;
}

interface PointProps {
  color: string;
  x: number;
  y: number;
  radius?: number;
}

const StarContainer: React.SFC = () => {
  const [stars, setStarts] = useState(initialStars());

  const handleClick = (index: number) => {
    const randomX = Math.random() * 600;
    const randomY = Math.random() * 600;
    const colorX = Math.random() * 255;
    const colorY = Math.random() * 255;
    const colorZ = Math.random() * 255;

    const newPoint = new Point(0, 0, 5, "yellow")
      .move(randomX, randomY)
      .changeColor(`rgb(${colorX}, ${colorY}, ${colorZ})`)
      .changeRadius(radius());

    setStarts([...stars.slice(0, index), newPoint, ...stars.slice(index + 1)]);
  };

  return (
    <StarLayout>
      {stars.map((item: PointProps, index: number) => (
        <Star
          onClick={() => handleClick(index)}
          color={item.color}
          x={item.x}
          y={item.y}
          radius={item.radius}
        />
      ))}
    </StarLayout>
  );
};

export default StarContainer;
