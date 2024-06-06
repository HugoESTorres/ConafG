import styled from "styled-components";
import { useParams } from "react-router-dom";
import DirectoryCards from "../components/ComiteDirectoryCard";
import Comites from "../data/Comites.json";

const StyledComite = styled.div`
  width: 100%;
  margin: 10px;
`;

const Title = styled.h3``;

const Text = styled.p`
  font-weight: 400;
  text-align: justify;
  margin-right: 15px;
  @media screen and (min-width: 1024px) {
    font-size: 18px;
    height: 100px;
  }
`;

const ComiteTecnico = () => {
  let params = useParams();
  const getComite = (shortname) => {
    return Comites.find((comite) => comite.shortname === shortname);
  };

  let comite = getComite(params.comiteId);

  return (
    <StyledComite>
      <Title isHeader>{comite.name}</Title>
      <Text>{comite.description}</Text>
      <DirectoryCards Comite={comite.shortname} />
    </StyledComite>
  );
};

export default ComiteTecnico;
