import styled from "styled-components";
import { NavLink } from "react-router-dom";
import comites from "../data/Comites.json";
import Separator from "./Separator";
import Card from "./Card";
import Title from "./Title";
import Reference from "./Reference";

const StyledHomeComite = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const Subtitle = styled.h2``;

const Text = styled.p`
  height: 100%;
  text-align: justify;
  margin-bottom: 15px;
`;

const List = styled.nav`
  display: flex;
  flex-direction: column;
`;

const Item = styled(NavLink)`
  font-weight: 600;
  text-decoration: none;
  list-style: none;
  color: #000;

  &:hover {
    font-weight: 600;
  }
`;

const Lista = styled.ul`
  text-align: justify;
  padding: 0 20px;
  margin-left: 15px;

  @media screen and (max-width: 767px) {
    padding: 0 5px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }

  @media screen and (min-width: 1024px) {
  }
`;

const ItemList = styled.li`
  text-align: justify;
  line-height: 1.6;

  @media screen and (max-width: 767px) {
    padding: 0 5px;
  }
`;

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  align-items: center;
  padding-top: 10px;
  grid-template-columns: 35% 30% 35%;
  grid-template-rows: auto;
  grid-template-areas:
    "title title title"
    "subtitle text text"
    "subtitle2 text2 text2"
    "footer footer footer";

  &.secondary {
    grid-template-areas:
      "title title title"
      ". subtitle list"
      ". subtitle2 list"
      ". subtitle3 list"
      "footer footer footer";
  }

@media screen and (min-width: 767px) {
    grid-template-areas:
      "title subtitle text"
      "title subtitle2 text2"
      "footer footer footer";

    &.secondary {
      grid-template-areas:
        "title title title"
        "subtitle subtitle2 subtitle3"
        "footer footer footer";
    }

  @media screen and (min-width: 1024px) {
    grid-template-areas:
      "title subtitle text"
      "title subtitle2 text2"
      "footer footer footer";

    &.secondary {
      grid-template-areas:
        "title title title"
        "subtitle subtitle2 subtitle3"
        "footer footer footer";
    }
  }
`;

const SubTitle = styled.h4`
  font-weight: 300;
  text-align: center;
  border-radius: 6px;
  padding: 2px 0;
  grid-area: ${({ area }) =>
    (area === 2 && "subtitle2") || (area === 3 ? "subtitle3" : "subtitle")};

  color: ${({ Color }) =>
    (Color === "green" && "var(--green)") ||
    (Color === "darkgreen" && "var(--dark-green)") ||
    (Color === "yellow" && "var(--yellow)") ||
    (Color === "darkyellow" && "var(--dark-yellow)") ||
    (Color === "red" && "var(--red)") ||
    (Color === "darkred" && "var(--dark-red)") ||
    (Color === "grey" && "var(--grey)") ||
    (Color === "darkgrey" && "var(--dark-grey)") ||
    (Color === "wine" && "var(--wine)")};

  @media screen and (min-width: 1024px) {
    padding: 0 10px;
  }
`;

const Footer = styled.div`
  width 100%;
  display: flex;
  flex-direction: column; 
  align-items: center;
  grid-area: footer;
  font-size: 12px;
  margin-top: 10px;
  padding: 10px 20px;
  border-radius: 0 0 4px 4px;
  box-shadow: 0px 0px 5px rgba(0,0,0,0.2);
  background-color: ${({ Color }) =>
    (Color === "green" && "var(--green)") ||
    (Color === "darkgreen" && "var(--dark-green)") ||
    (Color === "yellow" && "var(--yellow)") ||
    (Color === "darkyellow" && "var(--dark-yellow)") ||
    (Color === "red" && "var(--red)") ||
    (Color === "darkred" && "var(--dark-red)") ||
    (Color === "grey" && "var(--grey)") ||
    (Color === "darkgrey" && "var(--dark-grey)") ||
    (Color === "wine" && "var(--wine)")};
  color: #fff;
`;

const RepresentacionesFooter = styled.div`
  width 100%;
  display: flex;
  flex-direction: column;
  grid-area: footer;
  padding: 10px;
  margin-top: 10px;
  border-radius: 0 0 4px 4px;
  box-shadow: 0px 5px 10px rgba(0,0,0,0.7);
  background-color: ${({ Color }) =>
    (Color === "green" && "var(--green)") ||
    (Color === "darkgreen" && "var(--dark-green)") ||
    (Color === "yellow" && "var(--yellow)") ||
    (Color === "darkyellow" && "var(--dark-yellow)") ||
    (Color === "red" && "var(--red)") ||
    (Color === "darkred" && "var(--dark-red)") ||
    (Color === "grey" && "var(--grey)") ||
    (Color === "darkgrey" && "var(--dark-grey)") ||
    (Color === "wine" && "var(--wine)")};
  color: #fff;

  @media screen and (min-width: 1024px) {
  padding: 10px 20px;
  }
`;

const Representaciones = styled.div`
  grid-area: repre;
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const Parrafo = styled.p`
  grid-area: parrafo;
  text-align: justify;
  font-size: 12px;

  @media screen and (min-width: 1024px) {
    font-size: 14px;
  }
`;

const Tabla = styled.table`
  width: 100%;
  margin: 15px 0;
  background-color: transparent;
  border-collapse: collapse;
  border-spacing: 0;
  display: table;
  text-indent: initial:
`;

const Thead = styled.thead`
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
`;
const Tr = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
  background-color: ${(props) => (props.odd ? "#eee" : null)};

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;

const Th = styled.th`
  display: table-cell;
  font-weight: bold;
  text-align: left;
  padding: 4px;
  line-height: 1.4285;
  vertical-align: bottom;
  border-bottom: 2px solid #ddd;
  border-top: 0;

  @media screen and (max-width: 766px) {
    font-size: ${(props) => (props.big ? "16px" : "10px")};
  }

  @media screen and (min-width: 767px) {
    font-size: ${(props) => (props.big ? "22px" : "16px")};
  }

  @media screen and (min-width: 1024px) {
    font-size: ${(props) => (props.big ? "32px" : "18px")};
  }
`;

const Tbody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
`;

const Td = styled.td`
  padding: 5px 25px;
  line-height: 1.4285;
  vertical-align: top;
  border-top: 1px solid #ddd;
  width: 27%;

  @media screen and (max-width: 766px) {
    padding: 4px;
    font-size: 10px;
  }

  @media screen and (min-width: 767px) {
    padding: 4px;
    font-size: 10px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 12px;
  }
`;

const ComiteHome = () => {
  return (
    <>
      <StyledHomeComite>
        <Reference>
          Artículos 12, 26, 27 y 28 del Reglamento del Consejo Nacional
          Forestal.
        </Reference>
        <Subtitle>Asuntos y temas que atienden</Subtitle>
        <Separator />
        <List>
          {comites.map((comite) => (
            <div key={comite.id}>
              <Item to={`/comites-tecnicos/${comite.shortname}`}>
                <Text>{comite.name}</Text>
              </Item>
              <Text>{comite.description}</Text>
            </div>
          ))}
        </List>
        <Subtitle>Atribuciones de los Comités Técnicos</Subtitle>
        <Separator />
        Los Comités Técnicos tienen las siguientes atribuciones:
        <Lista>
          <ItemList>
            Emitir opinión o dictamen sobre los temas que les encomiende el
            Consejo
          </ItemList>
          <ItemList>
            Proponer y opinar sobre proyectos de normas en materia forestal y
            relativas a los recursos naturales
          </ItemList>
          <ItemList>
            Elaborar y presentar al Consejo, a través de su Coordinador, el
            informe anual de trabajo del Comité
          </ItemList>
          <ItemList>
            Presentar iniciativas al Consejo, a través de su Coordinador, sobre
            asuntos de su competencia
          </ItemList>
          <ItemList>
            Informar al Consejo sobre las actividades y acuerdos desarrollados
          </ItemList>
          <ItemList>
            Las demás que, en cumplimiento de su propósito general, autorice el
            Consejo de carácter facultativo y no limitativo.
          </ItemList>
        </Lista>
        <Subtitle>Integración</Subtitle>
        <Separator />
        <Card Color="wine">
          <Wrapper className="secondary">
            <Title Color="wine">Comités Técnicos</Title>
            <SubTitle area={1} Color="wine">
              Coordinador(a) Titular
            </SubTitle>
            <SubTitle area={2} Color="wine">
              Coordinador(a) Suplente
            </SubTitle>
            <SubTitle area={3} Color="wine">
              Representantes
            </SubTitle>
            <RepresentacionesFooter Color={"wine"}>
              <Parrafo>
                Conforme al artículo 9 y 30 del Reglamento del Consejo Nacional
                Forestal, las representaciones del Consejo Nacional Forestal
                (Comunidades Forestales, Profesional, Industrial, Sociedad
                Civil, Académico, Pueblos Indígena) se integraran y designarán
                al Coordinador(a), Titular y Suplente, del Comité Técnico que
                corresponda de acuerdo con lo establecido en el artículo 31 de
                este Reglamento y a las personas que participarán en los Comités
                Técnicos como Representantes.
              </Parrafo>
              <Parrafo>
                Las Representaciones señaladas acordarán de manera democrática,
                transparente y legítima la designación del Coordinador(a),
                Titular y Suplente, así como las personas Representantes para
                cada Comité Técnico.
              </Parrafo>
              <Representaciones>
                <Tabla>
                  <Thead>
                    <Tr>
                      <Th big style={{ width: "45%" }}>
                        Comité Técnico
                      </Th>
                      <Th big>Coordinación</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {comites.map((comite) => (
                      <Tr key={comite.id}>
                        <Td>{comite.name}</Td>
                        <Td>Representación {comite.coordinadora}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Tabla>
              </Representaciones>
              <Footer
                Color={"darkred"}
                style={{
                  textAlign: "center",
                }}
              >
                La Coordinación de los Comités Técnicos recaerá en dos personas,
                una de las cuales deberá ser mujer. Los Coordinadores acordarán
                la forma en que se dividirán el trabajo de coordinación o de
                concurrir a las sesiones.
              </Footer>
            </RepresentacionesFooter>
          </Wrapper>
        </Card>
      </StyledHomeComite>
    </>
  );
};

export default ComiteHome;
