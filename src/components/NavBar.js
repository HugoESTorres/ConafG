import styled from "styled-components";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo.png";
import Burger from "./Burger";
import Data from "../data/NavBar.json";
import logocnf from "../logocnf.png";
import { FaAngleRight } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  height: 2.5rem;
  background-color: var(--dark-yellow);
  position: sticky;
  top: 0px;
  z-index: 2;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5);

  @media (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    display: none;
  }
`;

const LogoLink = styled(NavLink)`
  width: 40%;
`;

const Back = styled.a`
  grid-area: back;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  border-radius: 5px;
  background-color: var(--dark-green);
  color: white;
  font-weight: 600;
  text-decoration: none;
  font-size: 8px;
  padding: 5px 10px;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    font-size: 12px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 12px;
  }
`;

const Lenk = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: white;
  text-decoration: none;
  cursor: pointer;
  height: 100%;
  width: 100%;
  font-size: 12px;

  &:last-child {
    background-color: var(--wine);
  }

  &.active {
    background-color: var(--green);
  }
  
  &:hover {
    font-weight: 700;
    background-color: var(--green); /* Cambio de color al pasar el mouse */
  }

  

  &.logo {
    background-color: transparent;
    justify-content: start;
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }

  @media screen and (min-width: 1300px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1600px) {
    font-size: 18px;
  }
`;

const DoubleBanner = styled.div`
  position: relative;
  background-color: #fff;
  height: 4rem;
  width: 100%;
  display: grid;
  grid-template-columns: 25% 50% 20% 5%;
  grid-template-rows: 1;
  grid-template-areas: "title logo back burger";
  align-items: center;
  padding: 0 15px;
  z-index: 3;
  box-shadow: 0px 0px 10px var(--dark-green);

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    grid-template-columns: 20% 55% 20% 5%;
  }

  @media screen and (min-width: 1024px) {
    height: 6.5rem;
    grid-template-columns: 25% 5% 60% 10%;
    grid-template-areas: "title . logo back";
    border-bottom: none;
  }
`;

const Logo = styled.img`
  grid-area: logo;
  @media screen and (max-width: 767px) {
    height: 1.5rem;
  }

  @media screen and (min-width: 767px) and (max-width: 1024px) {
    height: 3rem;
  }

  @media screen and (min-width: 1024px) {
    height: 5.5rem;
  }
`;

const MainLogo = styled.img`
  grid-area: title;
  height: 2.5rem;
  margin-left: 5px;

  @media screen and (min-width: 767px) and (max-width: 1024px) {
    height: 3rem;
    margin-left: 15px;
  }

  @media screen and (min-width: 1024px) {
    height: 5.5rem;
    margin-left: 35px;
  }
`;

const NavBar = () => {
  const handleScrollToElement = () => {
    if (scroll.scrollY === 0) {
      scroll.scrollTo(400, { smooth: 'easeInOutQuad' }); // Hace scroll hacia abajo si ya estamos en la parte superior de la página
    } else {
      scroll.scrollToTop({ smooth: 'easeInOutQuad' }); // Primero hace scroll hacia arriba
      setTimeout(() => scroll.scrollMore(400, { smooth: 'easeInOutQuad' }), 1000); // Luego hace scroll hacia abajo después de 1 segundo
    }
  };

  return (
    <>
      <DoubleBanner>
        <Back href={"https://snif.cnf.gob.mx/"}><FaAngleRight size={20}/> Acceder al SNIF</Back>
        <LogoLink to={"/"}>
          <MainLogo alt={"Logo CONAF"} src={logocnf} />
        </LogoLink>
        <Logo alt={"Logo CONAFOR"} src={logo} />
        <Burger />
      </DoubleBanner>
      <Nav>
        {Data.map((e) => (
          <Lenk
            key={e.id}
            to={e.to}
            className="nav-link"
            onClick={handleScrollToElement}
          >
            {e.name}
          </Lenk>
        ))}
      </Nav>
    </>
  );
};

export default NavBar;
