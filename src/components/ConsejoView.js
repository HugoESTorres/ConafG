import { useState } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ConsejoEstatal from "./ConsejoEstatal";
import Estado from "../data/Estados.json";

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 5px;
  justify-content: center;
  position: sticky;
  border-radius: 4px;
`;

const Select = styled(Field)`
    width: 100%;
    height: 39px;
    padding: 6px 12px;
    margin-top: 10px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
    font-size: 18px;
    line-height: 1.428571429;
    color: #555;
    display: block;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
}
`;

const ConsejoView = () => {
  const [clave, setClave] = useState("AGS");

  const handleChange = (e) => {
    setClave(e.currentTarget.value);
  };

  return (
    <>
      <Formik
        initialValues={{ estado: "" }}
        validationSchema={Yup.object({
          estado: Yup.string()
            .max(25, "Debes seleccionar una opción valida")
            .required("Requerido"),
        })}
      >
        <Form>
          <Select as="select" name="estado" onChange={handleChange}>
            {Estado.map((e) => (
              <option value={e.shortname}>
                {e.estado}
              </option>
            ))}
          </Select>
          <ErrorMessage name="estado" />
        </Form>
      </Formik>
      <Container id={"container"}>
        <ConsejoEstatal clave={clave} />
      </Container>
    </>
  );
};

export default ConsejoView;
