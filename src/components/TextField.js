import { useField, Field } from "formik";
import styled from "styled-components";

const Label = styled.label`
  font-weight: 600;
  max-width: 100%;
  cursor: default;
  font-size: 18px;
`;

const Input = styled(Field)`
  width: 100%;
  height: 39px;
  font-size: 18px;
  padding: 6px 12px;
  background-color: #fff;
  border: 1px solid ${({error }) => error ? 'red' : '#ccc'};
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
`;

const InputContainer = styled.div`
  margin: 10px 0;
`

const Error = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  color: red;
  margin-top: 5px;
  padding: 5px;
  background: #FFEAE9;
  font-weight: 600;
  border-radius: 5px;
`

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <InputContainer>
      <Label>
        {label}
        <Input {...field} />
      </Label>
      {meta.touched && meta.error ? <Error>{meta.error}</Error> : null}
    </InputContainer>
  );
};
