import styled from "styled-components";
import React from "react";
import Estados from "../data/Estados.json";
import { FaFilePdf } from "react-icons/fa";
import Collapsible from "./Collapsible";

const Main = styled.div`
  width: 100%;
  height: 100%;
`;
const Header = styled.div`
  width: 100%;
`;

const HeaderTitle = styled.h1`
  color: var(--green);
`;

const Year = styled.h1`
  color: #000;
`;

const ConsejoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 5px 0;
`;
const DirectorioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 5px 0;
`;
const ReglamentoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 5px 0;
`;

const Anchor = styled.a`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #cdcbcb;
  color: var(--red);
  cursor: pointer;
  padding: 2px 0;
`;

const Text = styled.p`
  font-size: 9px;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #cdcbcb;
  padding: 2px 0;

  @media screen and (min-width: 767px) {
    font-size: 12px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
`;
const HeadText = styled.p`
  width: 100%;
  text-align: center;
  font-weight: 600;
  border-bottom: 1px solid var(--dark-grey);
  border-top: 1px solid var(--dark-grey);
`;

const ConsejoEstatal = ({ clave }) => {
  const estado = Estados.find((estado) => estado.shortname === clave);

  return (    
    <>
      {estado !== undefined && (
        <Main>
          <Header>
            <HeaderTitle>{estado.estado}</HeaderTitle>
          </Header>
          {estado.reglamento && <h3 style={{ textAlign: "center", width: "100%" }}>Reglamento</h3>}
          <ReglamentoContainer>
            {estado.reglamento && (
              <>
                <HeadText>Nombre</HeadText>
                <HeadText>Fecha</HeadText>
                <HeadText>PDF</HeadText>
              </>
            )}
            {estado.reglamento?.map((reg) => (
              <React.Fragment key={reg.path}>
                <Text>{reg.nombre}</Text>
                <Text>{reg.fecha}</Text>
                {reg.path !== "En proceso" ? (
                  <Anchor
                    href={`${process.env.PUBLIC_URL.concat(reg.path)}`}
                    download={`${reg.nombre} del estado de ${estado.estado}`}
                  >
                  <FaFilePdf></FaFilePdf>
                  </Anchor>
                ) : (
                  <Text>{reg.path}</Text>
                )} 
              </React.Fragment>
            ))}
          </ReglamentoContainer>
          <Collapsible title={"Directorio"}>
          {estado.directorio && <h1> </h1>}
          <DirectorioContainer>
            {estado.directorio && (
              <>
                <HeadText>Integrante - COEF</HeadText>
                <HeadText>Nombre (s)</HeadText>
                <HeadText>Dependencia / Organización</HeadText>
              </>
            )}
            {estado.directorio?.map((dir) => (
              <React.Fragment key={dir.path}>
                <Text style={{ backgroundColor: '#f2f2f2' }}>{dir.integrante}</Text>
                <Text style={{ backgroundColor: '#f2f2f2' }}>{dir.nombre}</Text>
                <Text style={{ backgroundColor: '#f2f2f2' }}>{dir.dep}</Text>
              </React.Fragment>
            ))}
          </DirectorioContainer>
          </Collapsible>
          <Collapsible title={"Sesiones"}>
          {estado.actas2024 && <Year>2024</Year>}
          <ConsejoContainer>
            {estado.actas2024 && (
              <>
                <HeadText>Sesión</HeadText>
                <HeadText>Fecha</HeadText>
                <HeadText>Acta PDF</HeadText>
              </>
            )}
            {estado.actas2024?.map((acta) => (
              <React.Fragment key={acta.path}>
                <Text>{acta.nombre}</Text>
                <Text>{acta.fecha}</Text>
                {acta.path !== "En proceso" ? (
                  <Anchor
                    href={`${process.env.PUBLIC_URL.concat(acta.path)}`}
                    download={`${acta.nombre} del estado de ${estado.estado}`}
                  >
                    <FaFilePdf></FaFilePdf>
                  </Anchor>
                ) : (
                  <Text>{acta.path}</Text>
                )}
              </React.Fragment>
            ))}
          </ConsejoContainer>
          {estado.actas2023 && <Year>2023</Year>}
          <ConsejoContainer>
            {estado.actas2023 && (
              <>
                <HeadText>Sesión</HeadText>
                <HeadText>Fecha</HeadText>
                <HeadText>Acta PDF</HeadText>
              </>
            )}
            {estado.actas2023?.map((acta) => (
              <React.Fragment key={acta.path}>
                <Text style={{ backgroundColor: '#f2f2f2' }}>{acta.nombre}</Text>
                <Text style={{ backgroundColor: '#f2f2f2' }}>{acta.fecha}</Text>
                {acta.path !== "N/A" ? (
                  <Anchor
                    href={`${process.env.PUBLIC_URL.concat(acta.path)}`}
                    download={`${acta.nombre} del estado de ${estado.estado}`}
                  >
                    <FaFilePdf></FaFilePdf>
                  </Anchor>
                ) : (
                  <Text>{acta.path}</Text>
                )}
              </React.Fragment>
            ))}
          </ConsejoContainer>
          {estado.actas2022 && <Year>2022</Year>}
          <ConsejoContainer>
            {estado.actas2022 && (
              <>
                <HeadText>Sesión</HeadText>
                <HeadText>Fecha</HeadText>
                <HeadText>Acta PDF</HeadText>
              </>
            )}
            {estado.actas2022?.map((acta) => (
              <React.Fragment key={acta.path}>
                <Text>{acta.nombre}</Text>
                <Text>{acta.fecha}</Text>
                {acta.path !== "N/A" ? (
                  <Anchor
                    href={`${process.env.PUBLIC_URL.concat(acta.path)}`}
                    download={`${acta.nombre} del estado de ${estado.estado}`}
                  >
                    <FaFilePdf></FaFilePdf>
                  </Anchor>
                ) : (
                  <Text>{acta.path}</Text>
                )}
              </React.Fragment>
            ))}
          </ConsejoContainer>
          <Collapsible title={"Historico"}>
          {estado.actas2021 && <Year> </Year>}
          <ConsejoContainer>
            {estado.actas2021 && (
              <>
                <HeadText>Sesión</HeadText>
                <HeadText>Fecha</HeadText>
                <HeadText>Acta PDF</HeadText>
              </>
            )}
            {estado.actas2021?.map((acta) => (
              <React.Fragment key={acta.path}>
                <Text>{acta.nombre}</Text>
                <Text>{acta.fecha}</Text>
                {acta.path !== "N/A" ? (
                  <Anchor
                    href={`${process.env.PUBLIC_URL.concat(acta.path)}`}
                    download={`${acta.nombre} del estado de ${estado.estado}`}
                  >
                    <FaFilePdf></FaFilePdf>
                  </Anchor>
                ) : (
                  <Text>{acta.path}</Text>
                )}
              </React.Fragment>
            ))}
          </ConsejoContainer>
          </Collapsible>
          {(estado.actas2021 === undefined) &
          (estado.actas2022 === undefined) ? ( 
          <div style={{ color: '#666', marginLeft: '15px' }}>
          <br></br>
          Sin Sesiones.
          </div>
          ) : null}
          </Collapsible>

        </Main>
      )}
    </>
  );
};

export default ConsejoEstatal;
