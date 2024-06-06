import styled from "styled-components";
import { useField } from "formik";

const Label = styled.label`
  margin-top: 10px;
  font-weight: 600;
  max-width: 100%;
  cursor: default;
  font-size: 18px;
`;

const CheckboxInput = ({ label, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <Label>
        <input type={"checkbox"} {...field} /> {label}
      </Label>
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </>
  );
};

export default CheckboxInput;
