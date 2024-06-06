import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Separator from "../components/Separator";
import Reference from "../components/Reference";
import Video from './video2';

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

const Light = styled.p`
  display: inline;
  font-weight: 300;
  font-size: 24px;

  @media screen and (min-width: 1024px) {
    font-size: 32px;
  }
`;

const Index = () => {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // Obtener el contador de visitas de localStorage
    const storedVisitCount = localStorage.getItem('visitCount');
    const currentVisitCount = storedVisitCount ? parseInt(storedVisitCount, 10) : 0;
    // Incrementar el contador de visitas
    const newVisitCount = currentVisitCount + 1;
    // Guardar el nuevo contador de visitas en localStorage
    localStorage.setItem('visitCount', newVisitCount);
    // Actualizar el estado
    setVisitCount(newVisitCount);
  }, []);

  return (
    <>
      <Title id="index">
        Consejo Nacional Forestal <Light>(CONAF)</Light>
      </Title>
      <Separator />
      <Wrapper>
        <Description>
          Es un
          <strong> órgano de carácter consultivo y de asesoramiento</strong> en
          las materias que le señala la Ley General de Desarrollo Forestal
          Sustentable y en las que se le solicite su opinión. Funge como órgano
          de asesoría, supervisión, vigilancia, evaluación y seguimiento en la
          aplicación de los criterios e instrumentos de política forestal
          establecidos en la Ley General de Desarrollo Forestal Sustentable.
        </Description>
      </Wrapper>
      <Reference Color={"darkgrey"} href={"/marco-legal"}>
        Artículo 152 de la Ley General de Desarrollo Forestal Sustentable
      </Reference>
      <Video />
      <p>Visitas: {visitCount}</p>
    </>
  );
};

export default Index;
