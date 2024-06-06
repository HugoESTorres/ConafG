import { useField } from "formik";
import styled from "styled-components";

const RadioOption = styled.input`
  margin-right: 5px;
  font-size: 16px;
  transform: scale(1.2);
  filter: hue-rotate(190deg);
`;

/* 
const Error = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  color: red;
  margin-top: 5px;
  padding: 5px;
  background: #ffeae9;
  font-weight: 600;
  border-radius: 5px;
`;
*/

const RadioInput = ({ label, options, ...props }) => {
  const [field] = useField({ ...props, type: "radio" });
  return (
    <>
      <label>
        <RadioOption type={"radio"} {...field} />
        {label}
      </label>
    </>
  );
};

export default RadioInput;
