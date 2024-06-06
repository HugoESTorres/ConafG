import { useEffect } from "react";
/* 
import styled from "styled-components";
import Separator from "../components/Separator";
import Data from "../data/Directory.json";
import Mails from "../data/EstatalDirectory.json";
*/
import axios from "axios";

const Funciones = () => {
  useEffect(() => {
    const data = axios.get("/getSurvey").then(function (response) {
      return response 
    }).catch(console.log);
    return console.log(data) 
  }, []);

  return <>
  <h1>Hello world</h1>
  </>;
};

/*

const GridLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-bottom: 15px;
  padding-bottom: 25px;
  border-bottom: 4px dotted grey;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1024px) {
    justify-content: ${({ isList }) =>
      isList ? "space-between" : "space-evenly"};
    margin-top: ${({ isMini }) => (isMini ? "60px" : null)};
  }
`;

const Card = styled.div`
  width: 90%;
  grid-area: card;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  display: flex;
  border-radius: 4px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-left: 20px solid
    ${({ Color }) =>
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
    width: 430px;
    height: 320px;
  }
`;

const MiniCard = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: auto;
  align-items: center;
  width: 360px;
  padding: 5px;
  border-radius: 4px;
  justify-content: space-between;
  box-shadow: 1px 1px 5px rgb(0, 0, 0, 0.5);
  margin-bottom: 5px;
  border-left: 20px solid
    ${({ Color }) =>
      (Color === "green" && "var(--green)") ||
      (Color === "darkgreen" && "var(--dark-green)") ||
      (Color === "yellow" && "var(--yellow)") ||
      (Color === "darkyellow" && "var(--dark-yellow)") ||
      (Color === "red" && "var(--red)") ||
      (Color === "darkred" && "var(--dark-red)") ||
      (Color === "grey" && "var(--grey)") ||
      (Color === "darkgrey" && "var(--dark-grey)") ||
      (Color === "wine" && "var(--wine)")};

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    width: 700px;
    height: 55px;
    margin: 0 10px;
  }

  @media screen and (min-width: 1024px) {
    width: 470px;
    height: 55px;
    margin: 10px;
  }
`;

const Photo = styled.img`
  height: ${({ isMini }) => (isMini ? "50px" : "100px")};
  width: ${({ isMini }) => (isMini ? "50px" : "100px")};
  border-radius: 4px;
  overflow: hidden;

  @media screen and (min-width: 1024px) {
    height: ${({ isMini }) => (isMini ? "50px" : "150px")};
    width: ${({ isMini }) => (isMini ? "50px" : "150px")};
    margin-right: ${({ isMini }) => (isMini ? "auto" : null)};
  }
`;

const Text = styled.p`
  margin: 2px 0;
  text-align: center;
`;

const Title = styled.h1`
  text-align: ${({ isHeader }) => (isHeader ? "left" : "center")};
  margin-bottom:${({isHeader}) => (isHeader ? null : '40px' )};
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
`;

const Subtitle = styled.h4`
  width: 100%;
  border-radius: 4px 4px 0 0;
  margin: 5px 0;
  padding-bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  text-align: center;

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    width: 100%;
    padding: 4px 0;
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
    height: auto;
    padding: 2px 0;
  }
`;

const List = styled.ul`
  grid-area: list;
  text-align: justify;
  padding: 0 20px;
`;

const ListItem = styled.li`
  text-align: justify;
`;

const Item = styled(ListItem)`
  @media screen and (min-width: 1024px) {
    margin-bottom: 105px;
  }
`;

const Funciones = () => {
  return (
    <>
      <Title isHeader>Funciones y Obligaciones</Title>
      <Separator />
      <Title Color="green">Presidencia</Title>
      <GridLayout>
        <Container>
          <Card Color="green">
            <Subtitle Color="green" isHeader>
              Presidenta
            </Subtitle>
            <Photo
              src={
                "https://pbs.twimg.com/profile_images/1173338476651192321/LinzSEuF_400x400.jpg"
              }
            ></Photo>
            <Text>María Luisa Albores González</Text>
            <Subtitle>
              Titular de la Secretaría de Medio Ambiente y Recursos Naturales
            </Subtitle>
          </Card>
          <Card Color="green">
            <Subtitle Color="green" isHeader>
              Presidente Suplente
            </Subtitle>
            <Photo src={"https://i.imgur.com/8V2vOHQ.jpg"}></Photo>
            <Text>Luis Meneses Murillo</Text>
            <Subtitle>Titular de la </Subtitle> <Subtitle>Comision Nacional Forestal</Subtitle>
          </Card>
        </Container>
        <Container>
          <Subtitle>
            Con fundamento en el artículo 13 del Reglamento del Consejo, la
            Presidencia tiene las siguientes funciones:
          </Subtitle>
          <List>
            <ListItem>Representar al Consejo.</ListItem>
            <ListItem>Cumplir y hacer cumplir este Reglamento.</ListItem>
            <ListItem>Asistir y presidir las sesiones del Consejo.</ListItem>
            <ListItem>
              Convocar, a través del Secretario Técnico, a las sesiones del
              Consejo.
            </ListItem>
            <ListItem>
              Presentar iniciativas sobre asuntos a tratar en el Consejo.
            </ListItem>
            <ListItem>
              Presentar un informe sobre el estado que guarda el sector forestal
              del país, y el informe anual de actividades del Consejo, en la
              última sesión ordinaria del año.{" "}
            </ListItem>
            <ListItem>
              Atender de manera oportuna las opiniones, recomendaciones y
              acuerdos que emita el pleno del Consejo.
            </ListItem>
            <ListItem>
              Proponer la participación de invitados especiales, expertos y
              observadores en las sesiones del Consejo.
            </ListItem>
            <ListItem>
              Solicitar a los integrantes del Consejo la información que se
              requiera para la atención de los asuntos a tratar.
            </ListItem>
            <ListItem>
              Conocer el informe anual de los Comités Técnicos y Grupos de
              Trabajo y sus resultados.
            </ListItem>
            <ListItem>
              Impulsar el fortalecimiento de la organización interna de las
              Representaciones.
            </ListItem>
            <ListItem>
              Coordinar el proceso de renovación del Consejo, con base a lo
              establecido en este Reglamento.
            </ListItem>
            <ListItem>
              Emitir voto de calidad en caso de empate en las votaciones del
              Consejo.
            </ListItem>
            <ListItem>Proponer reformas a este Reglamento .</ListItem>
            <ListItem>
              Las demás que sean necesarias para el buen funcionamiento del
              Consejo.
            </ListItem>
          </List>
        </Container>
      </GridLayout>
      <Title Color="darkgrey">Secretaría Técnica</Title>
      <GridLayout>
        <Container>
          <Card Color="darkgrey">
            <Subtitle Color="darkgrey" isHeader>
              Secretario Técnico
            </Subtitle>
            <Photo src={"https://i.imgur.com/BCtOWEG.jpg?1"}></Photo>
            <Text>Ernesto Ladrón De Guevara Alafita</Text>
            <Subtitle>Coordinador de Apoyo y Proyectos Especiales</Subtitle>
            <Subtitle>CONAFOR</Subtitle>
          </Card>
          <Card Color="darkgrey">
            <Subtitle Color="darkgrey" isHeader>
              Secretario Técnico Suplente
            </Subtitle>
            <Photo
              src={
                "https://catalogonacional.gob.mx/sujetosobligados/FileUploadsTwo/FotoPerfil-b438566f-e392-4463-ac49-6062ce2cc678.jpeg"
              }
            ></Photo>
            <Text>Alberto Julián Escamilla Nava</Text>
            <Subtitle>Director General Forestal y de Suelos </Subtitle>
            <Subtitle>SEMARNAT</Subtitle>
          </Card>
        </Container>
        <Container>
          <Subtitle>
            Con fundamento en el artículo 16 del Reglamento del Consejo, la
            Secretaría Técnica tiene las siguientes funciones:
          </Subtitle>
          <List>
            <ListItem>
              {" "}
              Organizar y mantener actualizado el archivo y el directorio del
              Consejo.{" "}
            </ListItem>
            <ListItem>
              Integrar los expedientes correspondientes a las actas de acuerdos
              de las sesiones de los Comités Técnicos, Grupos de Trabajo y de
              las reuniones de las Representaciones.{" "}
            </ListItem>
            <ListItem>
              {" "}
              Convocar, por instrucciones del Presidente o del Presidente
              Suplente, a las sesiones del Consejo.{" "}
            </ListItem>
            <ListItem>
              {" "}
              Preparar el orden del día, llevar el registro de asistencia y
              levantar las actas de las sesiones del Consejo.{" "}
            </ListItem>
            <ListItem>
              {" "}
              Organizar las sesiones y auxiliar al Presidente y al Presidente
              Suplente, en el desarrollo de las mismas.{" "}
            </ListItem>
            <ListItem>
              {" "}
              Dar seguimiento a los acuerdos del Consejo, de los Comités
              Técnicos, Grupos de Trabajo y demás reuniones que se realicen.{" "}
            </ListItem>
            <ListItem>
              {" "}
              Informar al Presidente y al Presidente Suplente sobre los avances
              de acuerdos y de todos los asuntos del Consejo.{" "}
            </ListItem>
            <ListItem>
              {" "}
              Proponer al Consejo mecanismos de comunicación con los Consejeros
              y los Comités Técnicos.{" "}
            </ListItem>
            <ListItem>
              {" "}
              Vincular al Consejo con los Consejos Estatales Forestales y otros
              Consejos que inciden en el territorio rural y se relacionan con el
              sector forestal.{" "}
            </ListItem>
            <ListItem>
              {" "}
              Preparar el informe anual de actividades del Consejo.{" "}
            </ListItem>
            <ListItem>
              {" "}
              Favorecer y apoyar la comunicación entre los integrantes de cada
              Representación y sus reuniones internas para fines del Consejo. y{" "}
            </ListItem>
            <ListItem>
              {" "}
              Las demás que le sean asignadas por el Consejo, el Presidente y el
              Presidente Suplente, que sean necesarias para el cumplimiento del
              propósito y atribuciones del Consejo.{" "}
            </ListItem>
          </List>
        </Container>
      </GridLayout>
      <Title Color={"darkyellow"}>Consejeros</Title>
      <GridLayout>
        <Container isMini>
          {Data.filter((e) => e.id > 2).map((repre) => (
            <div key={repre.id}>
              <Subtitle isMini Color={repre.color}>
                {repre.name}
              </Subtitle>
              <MiniCard Color={repre.color}>
                <Photo isMini src={repre.phototit} />
                <Text>Titular: {repre.titular}</Text>
              </MiniCard>
              <MiniCard Color={repre.color}>
                <Photo isHeader isMini src={repre.photosup} />
                <Text> Suplente: {repre.suplente}</Text>
              </MiniCard>
            </div>
          ))}
        </Container>
        <Container isList>
          <Subtitle>
            Con fundamento en el artículo 18 del Reglamento del Consejo, los
            Consejeros tienen las siguientes funciones:{" "}
          </Subtitle>
          <List>
            <Item>Cumplir las disposiciones del presente Reglamento. </Item>
            <Item>
              Asistir a las sesiones del Consejo con derecho a voz y voto.{" "}
            </Item>
            <Item>
              Informar al Consejo de los trabajos y acuerdos de su
              Representación y a los integrantes de su Representación, de los
              acuerdos y resoluciones del Consejo.{" "}
            </Item>
            <Item>
              Promover y convocar a reuniones periódicas con los integrantes de
              su Representación para brindarles la información oportuna sobre
              los temas que se tratarán en el Consejo, con la finalidad de
              escuchar e integrar la postura de la Representación ante los
              diferentes temas a tratar.{" "}
            </Item>
            <Item>
              Elaborar actas de acuerdos de las reuniones de su Representación.{" "}
            </Item>
            <Item>
              Informar a la Secretaría Técnica de las reuniones realizadas de su
              Representación y proporcionar copia de las actas de acuerdos.{" "}
            </Item>
            <Item>
              Proponer las reglas para la organización interna de su
              Representación.{" "}
            </Item>
            <Item>Cumplir los acuerdos y resoluciones del Consejo. </Item>
            <Item>
              Presentar iniciativas, previo acuerdo con su Representación, sobre
              asuntos que consideren importantes tratar en el Consejo que sean
              de su competencia.{" "}
            </Item>
            <Item>
              Participar en los Comités Técnicos y proponer la integración y
              participación de su Representación en los Grupos de Trabajo.{" "}
            </Item>
            <Item>
              Atender de manera oportuna las opiniones, recomendaciones y
              acuerdos que emita el pleno del Consejo.{" "}
            </Item>
            <Item>
              Proponer a invitados especiales y expertos a las sesiones del
              Consejo.{" "}
            </Item>
            <Item>
              {" "}
              Las demás que sean necesarias para el cumplimiento de sus
              funciones y obligaciones, del propósito y las atribuciones del
              Consejo.{" "}
            </Item>
          </List>
        </Container>
      </GridLayout>
    </>
  );
}
*/

export default Funciones;
