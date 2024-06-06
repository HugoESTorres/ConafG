import styled from "styled-components";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Data from '../data/NavBar.json';

const Icon = styled(FaBars).attrs({
  size: 32,
})`
  cursor: pointer;
  color: var(--dark-green);
`;

const StyledBurger = styled(Icon)`
  display: none;
  grid-area: burger;
  transform: ${({ open }) => (open ? "rotate(90deg)" : "rotate(0)")};
  transition: all 0.1s linear;

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    width: 2rem;
    height: 2rem;
    display: flex;
  }

  @media screen and (max-width: 767px) {
    width: 2rem;
    height: 2rem;
    display: flex;
  }
`;

const StyledNav = styled.div`
  position: fixed;
  top: 4rem;
  left: 0;
  width: 100%;
  height: 50vh;
  overflow: hidden;
  z-index: 4;
  background-color: var(--dark-green);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Lenk = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 1rem;
  text-decoration: none;
  color: #fff;
  padding: 0px 10px;

  &:hover {
    color: #bc955c;
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <StyledBurger open={open} onClick={handleClick}></StyledBurger>
      {open ? (
        <StyledNav>
          {Data.map((link) => (
            <Lenk key={link.id} onClick={handleClick} to={link.to}>
              {link.name}
            </Lenk>
          ))}
        </StyledNav>
      ) : null}
    </>
  );
};

export default Burger;
