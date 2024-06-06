import { useState } from "react";
import styled from "styled-components";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const Card = styled.div`
  width: 100%;
  color: ${({ color }) => (color ? "#fff" : "#000")};
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 15px;
  border: 1px solid #ddd;
  margin-top: 15px;
`;
const Content = styled.div`
  width: 100%;
  padding: 15px 20px;
  border: 1px solid #ddd;
`;
const Title = styled.h3`
  margin: 0;
  font-size: ${({ size }) => (size ? "14px" : null)};
`;

const Arrow = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${({ color }) => (color ? "#fff" : "#000")};
`;

const Collapsible = ({ open, children, title, color, size }) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleFilterOpening = () => {
    setIsOpen((open) => !open);
  };

  return (
    <Card color={color}>
      <Header>
        <Title size={size}>{title}</Title>
        <Arrow color={color} onClick={handleFilterOpening}>
          {!isOpen ? (
            <FaChevronDown size={"1.5rem"} />
          ) : (
            <FaChevronUp size={"1.5rem"} />
          )}
        </Arrow>
      </Header>
      {isOpen && <Content color={color}>{children}</Content>}
    </Card>
  );
};

export default Collapsible;
