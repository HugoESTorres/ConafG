import styled from "styled-components";
import Separator from "../components/Separator";
import Data from "../data/Comites.json";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 1024px) {
  }
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  grid-template-rows: auto;
  align-items: space-evenly;
  width: 100%;
  height: 105px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  border-top: 5px solid var(--wine);
  border-radius: 4px;

  @media screen and (min-width: 1024px) {
    grid-template-columns: 15% 1fr;
    border-left: 20px solid var(--wine);
    border-top: none;
    height: 120px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  gap: 2px;

  @media screen and (min-width: 1024px) {
    gap: 5px;
  }
`;

const Photo = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 4px;
  overflow: hidden;
  margin: 15px 0 0 10px;

  @media screen and (min-width: 1024px) {
    height: 120px;
    width: 120px;
    margin: 0;
  }
`;

const Title = styled.h3`
  text-align: ${({ isHeader }) => (isHeader ? "left" : "center")};
  color: var(--wine);
  margin: ${({ isHeader }) => (isHeader ? "15px 0 10px 0" : "0")};
  font-size: ${({ isHeader }) => (isHeader ? "22px" : null)};

  @media screen and (min-width: 1024px) {
    font-size: ${({ isHeader }) => (isHeader ? "32px" : null)};
    margin: ${({ isHeader }) => (isHeader ? "25px 0 10px 0" : "0")};
  }
`;

const Text = styled.p`
  text-align: center;
  margin: 2px 10px;
  font-size: 12px;

  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
`;

const Subtitle = styled.h5`
  font-size: 12px;
  text-align: center;
  margin: 0 5px;

  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
`;

const DirectoryCards = ({ Comite }) => {
  const data = Data.find((each) => each.shortname === Comite);

  return (
    <>
      <Title isHeader>Directorio</Title>
      <Separator />
      {data[Comite].map((item) => (
        <div key={item.id}>
          <Title isHeader>{item.name}</Title>
          <Container>
            <Card>
              <Photo src={item.phototit} alt={item.titular} />
              <Wrapper>
                <Title>{item.nomtit}</Title>
                <Text>{item.titular}</Text>
                <Subtitle>{item.orgtit}</Subtitle>
              </Wrapper>
            </Card>
            {item.nomsup && (
              <Card>
                <Photo src={item.photosup} alt={item.suplente} />
                <Wrapper>
                  <Title>{item.nomsup}</Title>
                  <Text>{item.suplente}</Text>
                  <Subtitle>{item.orgsup}</Subtitle>
                </Wrapper>
              </Card>
            )}
          </Container>
        </div>
      ))}
    </>
  );
};

export default DirectoryCards;
