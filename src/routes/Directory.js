import styled from "styled-components";
import Separator from "../components/Separator";
import Data from "../data/Directory.json";
import Reference from "../components/Reference";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
  margin: 20px 0;

  @media screen and (min-width: 1024px) {
  }
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: 48% 52%;
  grid-template-rows: auto;
  align-items: space-between;
  width: 100%;
  height: 150px;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.7);
  border-left: 10px solid
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
  border-radius: 4px;


  @media screen and (min-width: 767px) {
    grid-template-columns: 15% 1fr;
    align-items: center;
    height: 110px;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 15% 1fr;
    height: 120px;
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
    border-top: none;
  }

`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;


  @media screen and (min-width: 767px) {
  padding: 0;
  }

  @media screen and (min-width: 1024px) {
    gap: 10px;
  }
`;

const Photo = styled.img`
  height: 150px;
  width: 150px;
  margin-right: auto;
  overflow: hidden;
  padding-right: 5px;


@media screen and (min-width: 767px){
  width: 110px;
  height: 110px;
}

  @media screen and (min-width: 1024px) {
    height: 120px;
    width: 120px;
  }
`;

const Title = styled.h2`
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
    (Color === "wine" && "var(--wine)")};
  margin: ${({ isHeader }) => (isHeader ? "30px 0 0 0" : "0")};

  @media screen and (min-width: 1024px) {
    font-size: ${({isHeader}) => isHeader ? '32px' : '24px'};
  }
`;

const Subtitle = styled.h6`
  text-align: center;
  margin: 0;

  @media screen and (min-width: 767px) {
  font-size: 12px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 18px;
    margin: 0;
  }
`;

const Text = styled.p`
  text-align: center;

  @media screen and (min-width: 1024px) {
    font-size: 22px;
    margin: 0;
  }
`;

const DirectoryCards = () => {
  return (
    <>
      <Title isHeader>Directorio</Title>
      <Separator />
      {Data.map((repre) => (
        <div key={repre.id}>
          <Title isHeader Color={repre.color}>
            {repre.name}
          </Title>
          <Container>
            <Card Color={repre.color}>
              <Photo src={repre.phototit} alt={repre.titular} />
              <Wrapper>
                <Title Color={repre.color}>{repre.nomtit}</Title>
                <Text>{repre.titular}</Text>
                <Subtitle>{repre.cargotit}</Subtitle>
              </Wrapper>
            </Card>
            <Card Color={repre.color}>
              <Photo src={repre.photosup} alt={repre.suplente} />
              <Wrapper>
                <Title Color={repre.color}>{repre.nomsup}</Title>
                <Text>{repre.suplente}</Text>
                <Subtitle>{repre.cargosup}</Subtitle>
              </Wrapper>
            </Card> 
          </Container>
          <Reference Color={"grey"} >
          Ultima Actualización: Febrero 2024
      </Reference>

        </div>
      ))}
    </>
  );
};

export default DirectoryCards;
