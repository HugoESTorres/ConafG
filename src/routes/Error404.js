import styled from "styled-components";

const GridLayout = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  align-content: center;
  grid-template-areas:
    "title"
    "subtitle"
    "text"
    "image"
    "subtitle2"
    "list";


  @media screen and (min-width: 767px) {
    margin: 150px 0;
    grid-template-columns: 40% 10% 10% 30%;
    grid-template-rows: auto;
    grid-template-areas:
      "title title . image"
      "subtitle  . . subtitle2"
      "text text . list";
  }
  `

const Title = styled.h1`
  grid-area: title;
  text-align: justify;
`;

const SubTitle = styled.h2`
  grid-area: ${({ secondary }) => (secondary ? "subtitle2" : "subtitle")};
`;
const Text = styled.p`
  grid-area: text;
`;

const Image = styled.img.attrs({
  src: "https://framework-gb.cdn.gob.mx/qa/assets/images/error.svg",
})`
  width: 40%;
  grid-area: image;

  @media screen and (min-width: 767px) and (max-width: 1024px) {
    width: 90%;
  }

  @media screen and (min-width: 1024px) {
    width: 90%;
  }
`;

const List = styled.ul`
  list-style: none;
  grid-area: list;
`;
const ListItem = styled.li``;

const Anchor = styled.a`
  color: #000;
  cursor: pointer;
  font-weight: 400;
  text-decoration: underline;

  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
  @media screen and (min-width: 767px) and (max-width: 1024px) {
    font-size: 16px;
  }
`;

const Error404 = () => {
  return (
    <>
      <GridLayout>
        <Title>La página solicitada no se encuentra en este servidor</Title>
        <SubTitle>Error 404</SubTitle>
        <Text>
          La página solicitada puede no estar disponible, haber cambiado de
          dirección (URL) o no existir. Con frecuencia es debido a algún error
          al escribir la dirección en la página (URL). Compruebe de nuevo si es
          correcta.
        </Text>
        <Image />
        <SubTitle secondary>Otras opciones:</SubTitle>
        <List>
          <ListItem>
            <Anchor href={"/"}>Regresar al inicio</Anchor>
          </ListItem>
          <ListItem>
            <Anchor
              href={"https://www.gob.mx"}
              target={"_blank"}
              rel={"noopener"}
            >
              Buscar en gob.mx
            </Anchor>
          </ListItem>
          <ListItem>
            <Anchor onClick={() => window.history.go(-1)}>
              Volver a la página anterior
            </Anchor>
          </ListItem>
        </List>
      </GridLayout>
    </>
  );
};

export default Error404;
