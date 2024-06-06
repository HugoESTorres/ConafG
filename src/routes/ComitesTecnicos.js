import { NavLink, Outlet } from "react-router-dom";
import Separator from "../components/Separator";
import comites from "../data/Comites.json";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled(NavLink)`
  display: block;
  color: var(--wine);
  text-decoration: none;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 12.5px;
  font-weight: 600;
  font-size: 28px;
`;
const Subtitle = styled.li`
  text-align: center;

  @media screen and (min-width: 1024px) {
    font-size: 14px;
  }
`;

const List = styled.nav`
  font-weight: 600;
  display: flex;
  gap: 5px;

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-evenly;
    aling-items: center;
    font-size: 24px;
    gap: 10px;
  }
`;

const Item = styled(NavLink)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  list-style: none;
  color: white;
  background-color: var(--wine);
  font-size: 10px;
  padding: 10px 5px;
  border-radius: 10px;

  &.active {
    background-color: var(--green);
  }
  &:hover {
    background-color: var(--green);
  }

  @media screen and (max-width: 767px) {
    border-radius: 4px;
  }
`;

const Text = styled.p`
  height: 100%;
  text-align: justify;
  margin-bottom: 15px;
`;

const ComitesTecnicos = () => {
  return (
    <>
      <Wrapper>
        <Title to={"/comites-tecnicos"}>Comités Técnicos</Title>
        <Separator />
        <Text>
          El Consejo tiene como uno de sus organos operativos a los Comités
          Técnicos, con la finalidad de analizar, deliberar, consultar,
          asesorar, concertar y acordar la propuesta respectiva para su
          posterior aprobación por el pleno del Consejo.
        </Text>
        <Text>Los Comités Técnicos son los siguientes:</Text>
        <List>
          {comites.map((comite) => (
            <Item to={`/comites-tecnicos/${comite.shortname}`} key={comite.id}>
              <Subtitle>{comite.name}</Subtitle>
            </Item>
          ))}
        </List>
        <Outlet />
      </Wrapper>
    </>
  );
};

export default ComitesTecnicos;
