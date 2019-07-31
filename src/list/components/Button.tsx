import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  width: 80px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;

interface Props {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  children: React.ReactNode;
}

const Button: React.SFC<Props> = (props: Props) => {
  return <ButtonStyle onClick={props.onClick}>{props.children}</ButtonStyle>;
};

export default Button;
