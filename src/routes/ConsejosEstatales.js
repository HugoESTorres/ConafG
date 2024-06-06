import React from "react";
import Separator from "../components/Separator";
import Title from "../components/Title";
import ConsejoView from "../components/ConsejoView";
import styled from "styled-components";
import Collapsible from "./Collapsible";
import infacuerdos from "../data/infacuerdos.json";
import { FaFilePdf } from "react-icons/fa";

const Reference = styled.p`
  display: block;
  width: 100%;
  font-size: 12px;
  color: var(--dark-grey);
  text-decoration: none;
  font-style: italic;

  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
`;

const Main = styled.div`
  width: 100%;
  margin-top: 0 !important; /* Anulando cualquier margen heredado */
  
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  

  th,
  td {
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }

  tr:hover {
    background-color: #f5f5f5;
  }
`;

const Th = styled.th`
  background-color: var(--light-grey);
  border: 1px solid var(--grey);
  padding: 9px;
  text-align: left;
`;

const Td = styled.td`
  border: 1px solid var(--grey);
  padding: 8px;
  font-size: 14px;
  color: green;
`;

const CollapsibleContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const ConsejosEstatales = () => {
  return (
    <>
      <Title isHeader>Consejos Estatales Forestales</Title>
      <Separator />
      <Reference>
        Seleccione el estado del que desee visualizar información.
      </Reference>
      <ConsejoView />

      <Collapsible title={"Informe de acuerdos"}>
        {Object.entries(infacuerdos).map(([year, data]) => (
          <Collapsible key={year} title={year}>
            <CollapsibleContent isOpen={true}>
              <Main>
                <Table>
                  <thead>
                    <tr>
                      <Th>Trimestre</Th>
                      <Th>Documento</Th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => (
                      <tr key={index}>
                        <Td>{item.trimestre}</Td>
                        <Td>
                          {item.path ? (
                            <a
                              href={`${process.env.PUBLIC_URL}/${item.path}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaFilePdf style={{ color: "red" }} />
                            </a>
                          ) : (
                            "En proceso"
                          )}
                        </Td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Main>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </Collapsible>
    </>
  );
};

export default ConsejosEstatales;
