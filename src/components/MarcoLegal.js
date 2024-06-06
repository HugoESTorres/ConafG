import styled from "styled-components";
import { HiExternalLink } from "react-icons/hi";
import Separator from "../components/Separator";
import Reference from "./Reference";

const Link = styled.a.attrs({
  target: "_blank",
  rel: "noopener",
})`
  color: #000;
`;
const SecondaryLink = styled.a.attrs({
  target: "_blank",
  rel: "noopener",
})`
  display: block;
  text-align: justify;

  @media screen and (max-width: 767px) {
    font-size: 12px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
`;

const Text = styled.p`
  margin-bottom: 25px;
  text-align: justify;

  @media screen and (max-width: 767px) {
    font-size: 16px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
      <Video />
`;
const Bold = styled.span`
  font-weight: 600;
`;

const Title = styled.h1``;

const MarcoLegal = () => {
  return (
    <>
      <Title id="marcolegal">Fundamento Legal</Title>
      <Separator />
      <Text>
        El Consejo Nacional Forestal{" "}
        <Bold>
          se sustenta en los artículos 152 y 153 de la{" "}
          <Link href={"https://www.diputados.gob.mx/LeyesBiblio/ref/lgdfs.htm"}>
            Ley General de Desarrollo Forestal Sustentable.
          </Link>
        </Bold>{" "}
      </Text>
      <Text>
        Adicionalmente en el{" "}
        <Bold>
          <Link
            href={
              "https://www.gob.mx/cms/uploads/attachment/file/539058/Reglamento_del_Consejo_Nacional_Forestal_CONAF.pdf"
            }
          >
            Reglamento del Consejo Nacional Forestal,  
          </Link>
        </Bold>
      {" "}se establece la composición y funcionamiento del Consejo, así como de sus Comités Técnicos.
      </Text>
      <Reference Color={"darkgreen"} href={"/marco-legal"}>
        Artículo 1 del Reglamento del Consejo Nacional Forestal
      </Reference>
      <SecondaryLink
        href={"https://www.diputados.gob.mx/LeyesBiblio/pdf/LGDFS.pdf"}
      >
        <HiExternalLink />
        Ley General de Desarrollo Forestal Sustentable
      </SecondaryLink>
      <SecondaryLink
        href={
          "https://www.gob.mx/cms/uploads/attachment/file/539058/Reglamento_del_Consejo_Nacional_Forestal_CONAF.pdf"
        }
      >
        {" "}
        <HiExternalLink />
        Reglamento del Consejo Nacional Forestal{" "}
      </SecondaryLink>
      <SecondaryLink
        href={
          "http://dof.gob.mx/nota_detalle.php?codigo=5493639&fecha=11/08/2017"
        }
      >
        {" "}
        <HiExternalLink />
        Lineamientos para el impulso, conformación, organización y
        funcionamiento de los mecanismos de participación ciudadana en las
        dependencias y entidades de la Administración Pública Federal
      </SecondaryLink>
    </>
  );
};

export default MarcoLegal;
