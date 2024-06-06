import styled from "styled-components";
import Separator from "../components/Separator";
import Card from "../components/Card";
import Title from "../components/Title";
import Reference from "../components/Reference";
import Collapsible from "../components/Collapsible";

const GridLayout = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 15px;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  align-items: center;
  justify-content: center;
`;

const TextManual = styled.p`
  width: 100%;
  font-weight: 400;
  text-align: justify;

  @media screen and (max-width: 767px) {
    font-size: 16px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  align-items: center;
  grid-template-columns: 35% 30% 35%;
  grid-template-rows: auto;
  grid-template-areas:
    "title title title"
    "text3 text4 text4"
    "subtitle text text"
    "subtitle2 text2 text2"
    "footer footer footer";

  &.secondary {
    grid-template-areas:
      "title title title"
      "text3 text4 text4"
      "subtitle list list"
      "subtitle2 list list"
      "footer footer footer";
  }

  &.invitado {
    grid-template-areas:
      "title text3 text4"
      "title title title"
      "subtitle text text"
      "footer footer footer";
  }

  @media screen and (min-width: 1024px) {
    grid-template-areas:
      "title text3 text4"
      "title subtitle text"
      "title subtitle2 text2"
      "footer footer footer";

    &.secondary {
      grid-template-areas:
        "title text3 text4"
        "title subtitle list"
        "title subtitle2 list"
        "footer footer footer";
    }

    &.invitado {
      grid-template-areas:
        "title text3 text4"
        "title subtitle text"
        "footer footer footer";
    }
  }
`;

const SubTitle = styled.h4`
  font-weight: 300;
  text-align: center;
  border-radius: 6px;
  padding: 2px 0;
  grid-area: ${({ secondary }) => (secondary ? "subtitle2" : "subtitle")};
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
const Text = styled.p`
  grid-area: text;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding-top: 10px;
  font-weight: ${({ bold }) => (bold ? "600" : null)};
  grid-area: ${({ secondary }) =>
    (secondary === 1 && "text") ||
    (secondary === 2 && "text2") ||
    (secondary === 3 && "text3") ||
    (secondary === 4 && "text4")};
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
    font-size: 14px;
  }
`;

const List = styled.ol`
  width: 100%;
  font-weight: 600;
  list-style: number;
  font-size: 14px;
  padding-top: 10px;
  border-top: 2px solid var(--wine);

  @media screen and (max-width: 767px) {
    text-align: justify;
  }

  @media screen and (min-width: 1024px) {
    text-align: left;
    font-size: 16px;
  }
`;

const CardList = styled(List)`
  border: none;
  font-weight: 400;
  grid-area: list;
  padding: 10px 0px 10px 20px;
  font-size: 12px;
  list-style: number;
  list-style-position: inside;
  @media screen and (max-width: 767px) {
    text-align: justify;
  }

  @media screen and (min-width: 1024px) {
    text-align: left;
    font-size: 14px;
    padding: 15px 0 5px;
    margin-left: 65px;
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

const ListItem = styled.li`
  margin-left: 18px;
`;

const Representaciones = styled.div`
  grid-area: repre;
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const Description = styled.div`
  grid-area: description;
  margin: 10px 0;
  text-align: justify;
`;

const Parrafo = styled.p`
  grid-area: parrafo;
  text-align: justify;
  font-size: 12px;
  line-height: 1.6;

  @media screen and (min-width: 1024px) {
    font-size: 14px;
  }
`;

const Tabla = styled.table`
  width: 100%;
  margin: 25px 0;
  background-color: transparent;
  border-collapse: collapse;
  border-spacing: 0;
  display: table;
  text-indent: initial;
  border-color: grey;
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

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;

const Th = styled.th`
  display: table-cell;
  font-weight: bold;
  vertical-align: center;
  border-bottom: 2px solid #fff;
  height: 100%;
  padding: 0 5px;
  text-align: left;

  @media screen and (max-width: 766px) {
    font-size: 8px;
  }

  @media screen and (min-width: 767px) {
    font-size: 10px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 14px;
  }
`;

const Tbody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
`;

const Td = styled.td`
  line-height: 1.4285;
  vertical-align: top;
  text-align: center;
  padding: 5px;
  text-align: left;

  @media screen and (max-width: 767px) {
    font-size: 8px;
  }

  @media screen and (min-width: 767px) {
    font-size: 10px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 12px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const Anchor = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

const Integracion = () => {
  return (
    <>
      <Title isHeader>Integración del Consejo</Title>
      <Separator />
      <GridLayout>
        <Card Color="green">
          <Wrapper>
            <Text secondary={3} bold Color="green">
              Cargo (Honorífico)
            </Text>
            <Title Color="green">Presidencia</Title>
            <SubTitle Color="green">Presidente(a) Titular</SubTitle>
            <Text secondary={4} bold Color="green">
              Origen
            </Text>
            <Text>
              Titular de la Secretaría de Medio Ambiente y Recursos Naturales
            </Text>
            <SubTitle secondary={2} Color="green">
              Presidente(a) Suplente
            </SubTitle>
            <Text secondary={2}>Titular de la Comisión Nacional Forestal</Text>
            <Footer Color={"green"}>
              Conforme al artículo 152 de la Ley General de Desarrollo Forestal
              Sustentable, la presidencia le corresponde a la Secretaria de
              Medio Ambiente y a la Comisión Nacional Forestal.{" "}
              <Reference>
                (...)"Dicho Consejo será presidido por el Titular de la
                Secretaría, siendo el Presidente Suplente el titular de la
                Comisión"(...)
              </Reference>
            </Footer>
          </Wrapper>
        </Card>
        <Card Color="grey">
          <Wrapper>
            <Title Color="darkgrey">Secretaría Técnica</Title>
            <Text secondary={3} bold Color="darkgrey">
              Cargo (Honorífico)
            </Text>
            <SubTitle Color="darkgrey">Secretario(a) Técnico Titular</SubTitle>
            <Text>
              Nombrado por el Titular de la Comisión Nacional Forestal
            </Text>
            <SubTitle secondary={2} Color="darkgrey">
              Secretario(a) Técnico Suplente
            </SubTitle>
            <Text secondary={4} bold Color="darkgrey">
              Origen
            </Text>
            <Text secondary={2}>
              Designado por la Titular de la Secretaría de Medio Ambiente y
              Recursos Naturales
            </Text>
            <Footer Color={"grey"}>
              Conforme al artículo 152 de la Ley General de Desarrollo Forestal
              Sustentable, la Secretaria Técnica se asignan por nombramiento y
              designación y le corresponden a la Comisión Nacional Forestal y a
              una persona designada por la Titular de la Secretaria de Medio
              Ambiente y Recursos Naturales.
              <Reference>
                (...)"El titular de la Comisión; asimismo, este último nombrará
                a un Secretario Técnico, mismo que contará con un suplente que
                será designado por el titular de la Secretaría."(...)
              </Reference>
            </Footer>
          </Wrapper>
        </Card>
        <Card Color="darkyellow">
          <Wrapper className="secondary">
            <Title Color="darkyellow">Representaciones</Title>
            <Text secondary={3} bold Color={"darkyellow"}>
              Cargo (Honorífico){" "}
            </Text>
            <Text secondary={4} bold Color={"darkyellow"}>
              Origen
            </Text>
            <SubTitle Color="darkyellow">Consejero(a) Titular</SubTitle>
            <CardList>
              <ListItem>Comunidades Forestales</ListItem>
              <ListItem>Profesional</ListItem>
              <ListItem>Industrial</ListItem>
              <ListItem>Sociedad civil</ListItem>
              <ListItem>Académica</ListItem>
              <ListItem>Pueblos indígenas</ListItem>
              <ListItem>Consejos Estatales</ListItem>
              <ListItem>Gobierno Federal</ListItem>
            </CardList>
            <SubTitle secondary Color="darkyellow">
              Consejero(a) Suplente
            </SubTitle>
            <RepresentacionesFooter Color={"darkyellow"}>
              <Parrafo>
                Conforme a los artículos 5, 6, 7, 8, 9 y 10 del Reglamento del
                Consejo Nacional Forestal,{" "}
                <strong>
                  las ocho representaciones del Consejo Nacional Forestal
                </strong>{" "}
                se integrarán y designarán a sus Consejeros(as) de la siguiente
                manera.
              </Parrafo>
              <Representaciones style={{ border: "none" }}>
                <List style={{ fontSize: "16px" }}>
                  <ListItem>Comunidades Forestales</ListItem>
                  <ListItem>Profesional</ListItem>
                  <ListItem>Industrial</ListItem>
                  <ListItem>Sociedad civil</ListItem>
                  <ListItem>Académica</ListItem>
                  <ListItem>Pueblos indígenas</ListItem>
                </List>
              </Representaciones>
              <Description>
                <Parrafo>
                  Para la integración a estas primeras seis representaciones, el
                  Presidente del Consejo Nacional Forestal emitirá una
                  <strong> convocatoria pública </strong>
                  dirigida a las personas morales interesadas a integrarse a la
                  membresía del Consejo; buscando aumentar la participación,
                  como inclusión y diversidad de las organizaciones involucradas
                  en el desarrollo del sector forestal.
                </Parrafo>
                <Parrafo>
                  La<strong> convocatoria </strong>
                  precisará los requisitos y plazos para solicitar la
                  incorporación a estas representaciones. La Secretaría Técnica
                  revisará las solicitudes y podrá determinar la integración a
                  la Representación que corresponda.
                </Parrafo>
                <Parrafo>
                  El resultado de las solicitudes recibidas a través de la
                  <strong> convocatoria</strong>, será sometido al pleno del
                  Consejo para su aprobación y{" "}
                  <strong>
                    {" "}
                    el listado resultante conformará la membresía del Consejo
                  </strong>
                  .
                </Parrafo>
                <Parrafo>
                  Por lo menos cada tres años se realizará el proceso para
                  incorporar y refrendar la participación en la membresía del
                  Consejo.
                </Parrafo>
                <Parrafo>
                  Las Representaciones señaladas, acordarán de manera
                  democrática, transparente y legítima la designación de un(a)
                  Consejero(a) Titular y un(a) Consejero(a) Suplente.
                </Parrafo>
              </Description>
              <Collapsible size color title={"Membresía Actual 2021 - 2024"}>
                <Container>
                  <Anchor
                    href={`${process.env.PUBLIC_URL.concat(
                      "/documents/conaf/convocatoria2021.pdf"
                    )}`}
                    download={"Convocatoria 2021 - 2023 CONAF.pdf"}
                  >
                    Convocatoria
                  </Anchor>
                  <Anchor
                    href={`${process.env.PUBLIC_URL.concat(
                      "/documents/conaf/ampliacion2021.pdf"
                    )}`}
                    download={
                      "Ampliación de plazos de la convocatoria 2021 - 2023 CONAF.pdf"
                    }
                  >
                    Ampliación de plazos de la convocatoria
                  </Anchor>
                  <Anchor
                    href={`${process.env.PUBLIC_URL.concat(
                      "/documents/conaf/listado2021.pdf"
                    )}`}
                    download={"Listado de integrantes 2021 - 2023 CONAF.pdf"}
                  >
                    Listado de integrantes
                  </Anchor>
                </Container>
              </Collapsible>
              <Collapsible color size title={"2016 - 2018"}>
                <Container>
                  <Anchor
                    href={`${process.env.PUBLIC_URL.concat(
                      "/documents/conaf/convocatoria2016.pdf"
                    )}`}
                    download={"Convocatoria 2016 - 2018 CONAF.pdf"}
                  >
                    Convocatoria
                  </Anchor>
                  <Anchor
                    href={`${process.env.PUBLIC_URL.concat(
                      "/documents/conaf/listado2016.pdf"
                    )}`}
                    download={"Listado de integrantes 2016 - 2018 CONAF.pdf"}
                  >
                    Listado de integrantes
                  </Anchor>{" "}
                </Container>
              </Collapsible>

              <Collapsible color size title={"2013 - 2014"}>
                <Container>
                  <Anchor
                    href={`${process.env.PUBLIC_URL.concat(
                      "/documents/conaf/convocatoria2013.pdf"
                    )}`}
                    download={"Convocatoria 2013 - 2014 CONAF.pdf"}
                  >
                    Convocatoria
                  </Anchor>
                  <Anchor
                    href={`${process.env.PUBLIC_URL.concat(
                      "/documents/conaf/listado2013.pdf"
                    )}`}
                    download={"Listado de integrantes 2013 - 2014 CONAF.pdf"}
                  >
                    Listado de integrantes
                  </Anchor>
                </Container>
              </Collapsible>
              {/*
              <Collapsible color size title={"2010 - 2012"}>
                <Container>
                  <Anchor
                    target={"_blank"}
                    href={
                      "http://www.conafor.gob.mx:8080/documentos/docs/7/1175Convocatoria%20Consejo%20Nacional%20Forestal.pdf"
                    }
                  >
                    Convocatoria
                  </Anchor>
                  <Anchor href={"http://youtube.com"}>
                    Listado de integrantes
                  </Anchor>
                </Container>
              </Collapsible>
*/}
              <Representaciones>
                <List style={{ fontSize: "16px" }} start={7}>
                  <ListItem>Consejos Estatales</ListItem>
                </List>
              </Representaciones>
              <Description>
                <Parrafo>
                  Para la integración de esta septima representación en el
                  Consejo Nacional Forestal, los Consejos Estatales Forestales
                  de cada región designarán a sus Consejeros(as) Titulares y
                  Consejeros(as) Suplentes y durarán un periodo no mayor a tres
                  años. Las regiones en las que se encuentran divididas los
                  Consejos Forestales Estatales son las siguientes:
                </Parrafo>
                <Tabla>
                  <Thead>
                    <Tr>
                      <Th>Región Norte</Th>
                      <Th>Región Centro</Th>
                      <Th>Región Sur</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Baja California</Td>
                      <Td>Aguascalientes</Td>
                      <Td>Campeche</Td>
                    </Tr>
                    <Tr>
                      <Td>Baja California Sur</Td>
                      <Td>Ciudad de México</Td>
                      <Td>Chiapas</Td>
                    </Tr>
                    <Tr>
                      <Td>Chihuahua</Td>
                      <Td>Colima</Td>
                      <Td>Guerrero</Td>
                    </Tr>
                    <Tr>
                      <Td>Coahuila</Td>
                      <Td>Guanajuato</Td>
                      <Td>Oaxaca</Td>
                    </Tr>
                    <Tr>
                      <Td>Durango</Td>
                      <Td>Hidalgo</Td>
                      <Td>Quintana Roo</Td>
                    </Tr>
                    <Tr>
                      <Td>Nuevo León</Td>
                      <Td>Estado de México</Td>
                      <Td>Tabasco</Td>
                    </Tr>
                    <Tr>
                      <Td>San Luis Potosí</Td>
                      <Td>Michoacán</Td>
                      <Td>Veracruz</Td>
                    </Tr>
                    <Tr>
                      <Td>Sinaloa</Td>
                      <Td>Morelos</Td>
                      <Td>Yucatán</Td>
                    </Tr>
                    <Tr>
                      <Td>Sonora</Td>
                      <Td>Jalisco</Td>
                      <Td></Td>
                    </Tr>
                    <Tr>
                      <Td>Tamaulipas</Td>
                      <Td>Nayarit</Td>
                      <Td></Td>
                    </Tr>
                    <Tr>
                      <Td>Zacatecas</Td>
                      <Td>Puebla</Td>
                      <Td></Td>
                    </Tr>
                    <Tr>
                      <Td></Td>
                      <Td>Querétaro</Td>
                      <Td></Td>
                    </Tr>
                    <Tr>
                      <Td></Td>
                      <Td>Tlaxcala</Td>
                      <Td></Td>
                    </Tr>
                    <Tr></Tr>
                  </Tbody>
                </Tabla>
              </Description>
              <Representaciones>
                <List style={{ fontSize: "16px" }} start={8}>
                  <ListItem>Gobierno Federal</ListItem>
                </List>
              </Representaciones>
              <Description>
                <Parrafo
                  style={{
                    borderBottom: "2px solid #fff",
                    paddingBottom: "10px",
                  }}
                >
                  Para la integración de esta octava representacion en el
                  Consejo Nacional Forestal, las personas Consejeras Titular y
                  Suplente de la Representación del Gobierno Federal serán
                  nombrados por las personas titulares de las Dependencias y
                  Entidades de la Administración Pública Federal, vinculadas con
                  el sector forestal, definidas por acuerdo del Presidente del
                  Consejo.
                </Parrafo>
              </Description>
              <Footer
                Color={"yellow"}
                style={{
                  textAlign: "center",
                  color: "#000",
                  fontWeight: 600,
                }}
              >
                Como criterio general, las Representaciones deberán designar de
                manera preferente a una mujer como Consejera Titular o Suplente.
              </Footer>
            </RepresentacionesFooter>
          </Wrapper>
        </Card>
        <Card Color="wine">
          <Wrapper>
            <Text secondary={3} bold Color="wine">
              Cargo (Honorífico)
            </Text>
            <Title Color="wine">Invitado Permanente</Title>
            <SubTitle Color="wine">Invitado(a) Titular</SubTitle>
            <Text secondary={4} bold Color="wine">
              Origen
            </Text>
            <Text>Instituto Nacional de las Mujeres</Text>
            <SubTitle secondary={2} Color="wine">
              Invitado(a) Suplente
            </SubTitle>
            <Text secondary={2}>Instituto Nacional de las Mujeres</Text>
            <Footer Color={"wine"}>
              Conforme al artículo 5 del Reglamento del Consejo Nacional
              Forestal El Consejo tiene como invitado permanente al Instituto
              Nacional de las Mujeres.
              <Reference>
                (...)"El Consejo tendrá como invitado permanente a una persona
                representante del Instituto Nacional de las Mujeres, quien
                tendrá derecho de voz en las sesiones del Consejo."(...)
              </Reference>
            </Footer>
          </Wrapper>
        </Card>
      </GridLayout>
      <Title isHeader>
        Manual de la membresía del Consejo Nacional Forestal
      </Title>
      <Separator />
      <TextManual>
        El Manual de la Membresía del Consejo Nacional Forestal es un documento
        que define y explica, en lenguaje amigable, las funciones, tareas,
        responsabilidades y productos que se esperan de los consejeros,
        coordinadores y representantes, de las organizaciones acreditadas que
        forman parte de las Representaciones y de los miembros de los Comités
        Técnicos, para con ello incidir de manera significativa en la gestión de
        los recursos forestales, a través de esta plataforma de participación
        social.
      </TextManual>
      <Reference
        Color={"darkgrey"}
        href={`${process.env.PUBLIC_URL.concat(
          "/documents/manual.pdf"
        )}`}
        download={"Manual de la membresía del Consejo Nacional Forestal.pdf"}
      >Descargue el Manual de la membresía del Consejo Nacional Forestal</Reference>
    </>
  );
};

export default Integracion;
