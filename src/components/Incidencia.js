import styled from "styled-components";
import Separator from "./Separator";
import Reference from "./Reference";
import Title from "./Title";

const List = styled.ul`
  text-align: justify;
  padding: 0 20px;
  margin-left: 15px;

  @media screen and (max-width: 767px) {
    padding: 0 5px;
    font-size: 16px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
`;
const ItemList = styled.li`
  text-align: justify;
  line-height: 1.6;

  @media screen and (max-width: 767px) {
    padding: 0 5px;
    font-size: 16px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
`;

const SubTitle = styled.h2`
  font-weight: 300;
  text-align: justify;

  @media screen and (max-width: 767px) {
    font-size: 20px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 22px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;

const Incidencia = () => {
  return (
    <>
      <Title isHeader>Niveles de Incidencia</Title>
      <Separator />
      <SubTitle>
        El grado de influencia que tiene la participación ciudadana en la
        gestión pública sobre el diseño, ejecución, monitoreo y evaluación de
        las políticas, programas y proyectos públicos a través del Consejo
        Nacional Forestal se desarrolla en los siguientes niveles de incidencia:
      </SubTitle>
      <List>
        <ItemList>
          <strong>Información</strong>. Las personas representantes de la
          sociedad civil tienen acceso a información, datos, hechos o mensajes
          sobre un asunto público.
        </ItemList>
        <ItemList>
          <strong>Diálogo</strong>. El personal del servicio público y las
          personas representantes de la sociedad civil intercambian información
          respecto a temas o problemas en particular, en una relación de doble
          vía;
        </ItemList>
        <ItemList>
          <strong>Opinión</strong>. Las personas representantes de la sociedad
          civil opinan o plantean propuestas sobre temas o problemas a partir de
          preguntas formuladas por las personas del servicio público;
        </ItemList>
        <ItemList>
          <strong>Deliberación</strong>. El personal del servicio público y las
          personas representantes de la sociedad civil debaten en forma
          colectiva para mejorar la adopción de una decisión determinada;
        </ItemList>
        <ItemList>
          <strong>Cogestión</strong>. El personal del servicio público y las
          personas representantes de la sociedad civil se involucran de manera
          conjunta en la implementación de las políticas, programas y proyectos
          públicos
        </ItemList>
        <ItemList>
          <strong>Vigilancia</strong>. Las personas representantes de la
          sociedad civil realizan el seguimiento del cumplimiento de las
          decisiones públicas.
        </ItemList>
      </List>
      <Reference Color={"grey"} href={"/marco-legal"}>
        Articulo 4 del Reglamento del Consejo Nacional Forestal
      </Reference>
      <Reference
        none
        Color={"grey"}
        href={
          "http://dof.gob.mx/nota_detalle.php?codigo=5493639&fecha=11/08/2017"
        }
      >
        Lineamientos Cuarto, fracción IX y Décimo primero de los Lineamientos
        para el impulso, conformación, organización y funcionamiento de los
        mecanismos de participación ciudadana en las dependencias y entidades de
        la Administración Pública Federal
      </Reference>
    </>
  );
};

export default Incidencia;
