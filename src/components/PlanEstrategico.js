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

const PlanEstrategico = () => {
  return (
    <>
      <Title id="index">Plan Estratégico</Title>
      <Separator />
      <Wrapper>
        <Description>
          El Consejo Nacional Forestal cuenta con un Plan Estratégico en el que
          se integran las estrategias y acciones que fortalecen la operación del
          Consejo, para con ello incidir de manera significativa en la gestión
          de los recursos forestales, a través de esta plataforma de
          participación social.
        </Description>
      </Wrapper>
      <Reference
        Color={"darkgrey"}
        href={`${process.env.PUBLIC_URL.concat(
          "/documents/planestrategico.pdf"
        )}`}
        download={"Plan Estratégico del Consejo Nacional Forestal.pdf"}
      >
        Descargue el Plan Estratégico del Consejo Nacional Forestal
      </Reference>
    </>
  );
};

export default PlanEstrategico;
