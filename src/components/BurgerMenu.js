import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NavBar from '../NavBar.json';

const StyledNav = styled.div`
  position: fixed;
  top: 4rem;
  left: 0;
  width: 100%;
  height: auto;
  overflow: hidden;
  z-index: 4;
  background-color: var(--dark-green);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Lenk = styled(Link)`
  width:100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: .8rem;
  text-decoration: none;
  color: #fff;
  padding: 5px 10px;

  &:hover {
    color: #BC955C;
  }
`


const Burger = () => {

  return (
    <>
      <StyledNav>
        {NavBar.map(link => (
          <Lenk key={link.id} to={link.to}>{link.name}</Lenk>
        ))}
      </StyledNav>
    </>
  );
};

export default Burger;
