import styled from "styled-components";
import Separator from "../components/Separator";
import Reference from "../components/Reference";

const Wrapper = styled.div`
  width: 100%;
`;

const Description = styled.p`
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
const Title = styled.h1`
  width: 100%;

  @media screen and (max-width: 767px) {
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }

  @media screen and (min-width: 1024px) {
    font-size: 32px;
  }
`;

const ListItems = styled.li`
  margin-left: 45px;
`;

const ListContainer = styled.div`
  margin-top: 30px;
`;

const TemasPrioritarios = () => {
  return (
    <>
      <Title id="index">Temas priorizados por el Consejo Nacional Forestal</Title>
      <Separator />
      <Wrapper>
        <Description>
          <p>
            El Consejo Nacional Forestal, generó un listado de temas
            prioritarios, elaborado y aprobado por las Representaciones que lo
            integran, con la finalidad de incidir de manera significativa en la
            gestión de los recursos forestales.
          </p>
          <p>
            En este sentido, los Comités Técnicos del Consejo consideran estos
            temas para realizar sus Programas de Actividades, y una vez son
            analizados, las opiniones y propuestas son puestas consideración del
            Pleno de Consejo.
          </p>
          <ListContainer>
            <p>Los temas priorizados son:</p>
            <ol>
              <ListItems>
                Simplificación de la gestión regulatoria y cercanía de Conafor
                con la gente.
              </ListItems>
              <ListItems>
                Atención a la deforestación, degradación, tala y comercio ilegal
                de madera.
              </ListItems>
              <ListItems>
                Fomento del manejo forestal comunitario e impulso a la
                integración y competitividad de las cadenas de valor forestal.
              </ListItems>
              <ListItems>
                Impacto del COVID-19 y medidas de recuperación propuestas.
              </ListItems>
              <ListItems>
                Cambio de fondo de las Reglas de Operación de la Conafor.
              </ListItems>
            </ol>
          </ListContainer>
        </Description>
      </Wrapper>
      <Reference
        Color={"darkgrey"}
        href={`${process.env.PUBLIC_URL.concat("/documents/temas.pdf")}`}
        download={"Temas Prioritarios del Consejo Nacional Forestal.pdf"}
      >
      Descargue los temas priorizados por el Consejo Nacional Forestal
      </Reference>
    </>
  );
};

export default TemasPrioritarios;
