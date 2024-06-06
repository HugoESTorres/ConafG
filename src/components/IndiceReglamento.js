import React from 'react'
import styled from "styled-components";
import { HiExternalLink } from "react-icons/hi";
import Reglamento from "../data/Reglamento.json";
import { Link } from "react-scroll";

const MainIndice = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
`;

const StyledIndice = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  border: 1px solid #aaa;
`;

const HeaderLink = styled(Link)`
  font-size: 1.2rem;
  color: var(--green);
  font-weight: 600;
  cursor: pointer;
  margin: 10px 0;
  text-align: justify;
  font-size: 12px;

   &:hover {
    filter: brightness(150%);
  }

  @media screen and (min-width: 767px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
`;

const StyledSecond = styled.div`
  width: 100%;
  display: grid;
  color: white;
  font-weight: 600;
  grid-template-columns: repeat(12,1fr);
  grid-template-rows: auto;
  gap: 5px;

  @media screen and (min-width: 1024px){
  grid-template-columns: repeat(18,1fr);
  }
`;

const SecondLink = styled(Link)` 
  padding: 0 3px;
  text-align: center;
  background-color: var(--dark-red);
  cursor: pointer;
  line-height: 1.7;
  font-size: 10px;

  &:hover {
    filter: brightness(150%);
  }

  @media screen and (min-width: 767px) {
    font-size: 12px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 14px;
  }
`;


const SecondaryLink = styled.a.attrs({
  target: "_blank",
  rel: "noopener",
})`
  display: block;
  text-align: right;

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



const IndiceReglamento = () => {
  return (
    <MainIndice>
      <StyledIndice>

        {Reglamento.map(({ id, name, path, articulos }) => (
          <React.Fragment key={id}>
            <HeaderLink smooth offset={-50} to={path}>
              {name}
            </HeaderLink>
            <StyledSecond>
              {articulos.map(({ id, name, path }) => (
                <SecondLink key={id} smooth offset={-50} to={path}>
                  {id.slice(4,7)}
                </SecondLink>
              ))}
            </StyledSecond>
          </React.Fragment>
        ))}
      <SecondaryLink
        href={
          "https://www.gob.mx/cms/uploads/attachment/file/539058/Reglamento_del_Consejo_Nacional_Forestal_CONAF.pdf"
        }
      >
        <HiExternalLink />
        Descargar Reglamento del Consejo Nacional Forestal
      </SecondaryLink>
      </StyledIndice>
    </MainIndice>
  );
};

export default IndiceReglamento;
