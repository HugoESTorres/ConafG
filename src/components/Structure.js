import styled from "styled-components";
import Separator from "./Separator";
import Header from "./Title";
import Reference from "./Reference";

const GridLayout = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: 100%;
  grid-template-rows: 1fr;
  grid-template-areas:
    "main"
    "comite"
    "comites";

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 25%);
    grid-template-areas:
      "main main main main"
      "comite comite comite comite"
      "comites comites comites comites";
    margin-bottom: 50px;
    gap: 0;
  }
`;

const StyledStructure = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  width: 100%;
  height: 100%;
  grid-area: main;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    gap: 0;
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 150px;
  padding-bottom: 20px;
  margin-bottom: 2px;
  box-shadow: 1px 1px 9px rgba(0, 0, 0, 0.5);
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

  @media screen and (min-width: 1024px) {
    margin: 0;
    padding: 0 15px;
    width: 100%;
    height: 200px;
  }
`;

const SecondStructure = styled(StyledStructure)`
  border: 0;
  grid-area: comite;
  margin-top: 5px;
`;

const Second = styled(Card)`
  grid-area: second;
  height: 100px;
  border-right: ${({ Comite }) => (Comite ? "1px solid #FFF" : null)};
`;

const Third = styled(Card)`
  height: 100px;
  grid-area: third;
`;

const Title = styled.h3`
  text-align: ${({ isHeader }) => (isHeader ? "left" : "center")};
  color: ${({ Color }) =>
    (Color === "green" && "var(--green)") ||
    (Color === "darkgreen" && "var(--dark-green)") ||
    (Color === "yellow" && "var(--yellow)") ||
    (Color === "darkyellow" && "var(--dark-yellow)") ||
    (Color === "red" && "var(--red)") ||
    (Color === "darkred" && "var(--dark-red)") ||
    (Color === "grey" && "var(--grey)") ||
    (Color === "darkgrey" && "var(--dark-grey)") ||
    (Color === "wine" && "var(--wine)") ||
    (Color === "white" && "#FFF")};
`;

const Subtitle = styled.h5`
  margin: 0;
  font-size: 15px;
  font-weight: 300;
  color: #fff;
  text-align: center;
`;

const Strong = styled.p`
  display: inline;
  color: #fff;
  font-weight: 800;
  font-size: 120%;
`;

const Comites = styled.div`
  margin-top: 5px;
  padding: 10px 0;
  grid-area: comites;
  height: auto;
  text-align: justify;
`;

const Structure = () => {
  return (
    <>
      <Header isHeader>Estructura del Consejo Nacional Forestal</Header>
      <Separator />
      <GridLayout>
        <StyledStructure>
          <Card Color={"green"}>
            <Title Color={"white"}>Presidencia</Title>
            <Subtitle>
              <Strong>1</Strong> Presidente(a) Titular
            </Subtitle>
            <Subtitle>
              <Strong>1</Strong> Presidente(a) Suplente
            </Subtitle>
          </Card>
          <Card Color={"darkgrey"}>
            <Title Color={"white"}>Secretaría Técnica</Title>
            <Subtitle>
              <Strong>1</Strong> Secretario(a) Técnico Titular
            </Subtitle>
            <Subtitle>
              <Strong>1</Strong> Secretario(a) Técnico Suplente
            </Subtitle>
          </Card>
          <Card Color={"darkyellow"}>
            <Title Color={"white"}>Representaciones</Title>
            <Subtitle>
              <Strong>10</Strong> Consejeros(as) Titulares
            </Subtitle>
            <Subtitle>
              <Strong>10</Strong> Consejeros(as) Suplentes
            </Subtitle>
          </Card>
          <Card Color={"darkred"}>
            <Title Color={"white"}>Invitado Permanente</Title>
            <Subtitle>
              <Strong>1</Strong> Invitado(a) Titular
            </Subtitle>
            <Subtitle>
              <Strong>1</Strong> Invitado(a) Suplente
            </Subtitle>
          </Card>
        </StyledStructure>
        <SecondStructure>
          <Second Comite Color={"darkyellow"}>
            <Title Color={"white"}>Comités Técnicos</Title>
            <Subtitle>
              <Strong>6</Strong> Comités Técnicos
            </Subtitle>
          </Second>
          <Third Color={"darkyellow"}>
            <Title Color={"white"}>Grupos de Trabajo</Title>
            <Subtitle>
              Por acuerdo para agilizar la misión de opiniones
            </Subtitle>
          </Third>
        </SecondStructure>
        <Comites>
          En el caso de que la opinión requerida al Consejo deba brindarse en un
          plazo perentorio, de acuerdo con la normatividad aplicable, el Consejo
          podrá acordar mecanismos que agilicen la emisión de opiniones,
          considerando la posibilidad de que estas sean generadas por Comités
          Técnicos o Grupos de Trabajo, los cuales deberán informar al Consejo
          sobre las opiniones emitidas.
        </Comites>
      </GridLayout>
      <Reference href={"/marco-legal"} Color={"grey"}>
        Articulo 152 y 153 de la Ley General de Desarrollo Forestal Sustentable
      </Reference>
      <Reference none href={"/marco-legal"} Color={"grey"}>
        Articulo 5, 6, 9, 12, 26 y 28 del Reglamento del Consejo Nacional
        Forestal
      </Reference>
    </>
  );
};

export default Structure;
