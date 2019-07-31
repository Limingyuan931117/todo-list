import styled from "styled-components";

interface Props {
  radius?: number;
  color?: string;
  x?: number;
  y?: number;
  oldX?: number;
  oldY?: number;
}

const Star = styled.div`
  width: ${(props: Props) => (props.radius ? `${props.radius}px` : "10px")};
  height: ${(props: Props) => (props.radius ? `${props.radius}px` : "10px")};
  border-radius: 50%;
  background-color: ${(props: Props) => (props.color ? props.color : "yellow")};
  position: absolute;
  top: ${(props: Props) =>
    props.y ? `${props.y}px` : `${Math.random() * 600}px`};
  left: ${(props: Props) =>
    props.x ? `${props.x}px` : `${Math.random() * 600}px`};
`;

export default Star;
