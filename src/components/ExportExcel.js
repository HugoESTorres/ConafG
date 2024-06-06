import ReactExport from "react-export-excel";
import styled from "styled-components";
import { FaFileExcel } from "react-icons/fa";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const DownloadButton = styled.button`
  color: var(--green);
  background-color: transparent;
  border: none;

  &:hover {
    color: var(--dark-red);
    cursor: pointer;
  }
`;

const ExportExcel = ({filename, data, sheetname}) => {
  const columnNames = Object.keys(data.find(e => e)) 
  return (
    <ExcelFile
      element={
        <DownloadButton>
          <FaFileExcel size={30} />
        </DownloadButton>
      }
      filename={filename}
    >
      <ExcelSheet name={sheetname} data={data.sort()}>
        {columnNames.map(column => (
          <ExcelColumn label={column} value={column}/>
        ))}
      </ExcelSheet>
    </ExcelFile>
  );
};

export default ExportExcel;
