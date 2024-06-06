import styled from "styled-components";
import Separator from "../components/Separator";
import Reference from "./Reference";
import Data from "../data/atributions.json"

const List = styled.ul`
  text-align: justify;
  padding: 0 20px;
  margin-left: 15px;

  @media screen and (max-width: 767px) {
    padding: 0 5px;
    font-size: 16px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
`;
const ListItem = styled.li`
  text-align: justify;
  line-height: 1.6;

  @media screen and (max-width: 767px) {
    padding: 0 5px;
    font-size: 16px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
`;

const Title = styled.h1`
  @media screen and (min-width: 1024px) {
    font-size: 32px;
  }
`;

const Atributions = () => {
  return (
    <>
      <Title id="atribuciones">
        Atribuciones del Consejo Nacional Forestal
      </Title>
      <Separator />
      <List>
        {Data.map(atrib => (
          <ListItem key={atrib.id}>{atrib.description}</ListItem>
        ))  } 
      </List>
      <Reference Color={"grey"} href={"/marco-legal"}>
        Articulo 4 del Reglamento del Consejo Nacional Forestal
      </Reference>
    </>
  );
};

export default Atributions;
