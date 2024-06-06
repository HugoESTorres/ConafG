import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as Yup from "yup";
import axios from "axios";
import Title from "../components/Title";
import Separator from "../components/Separator";
import { TextField } from "../components/TextField";
import { Formik, Form } from "formik";
import RadioInput from "../components/RadioInput";
import Questions from "../data/Questions.json";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 25px;
  border: 1px solid #eee;
  border-radius: 5px;
  border-top: 5px solid var(--green);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  :first-child {
    border-bottom: 2px solid #eee;
    padding-bottom: 20px;
  }
`;

const Button = styled.button`
  border: 2px solid #9d2449;
  background-color: transparent;
  box-shadow: 0 0 0 0 #9d2449;
  font-size: 18px;
  cursor: pointer;
  color: #9d2449;
  border-radius: 3px;
  padding: 10px 25px;
  margin: 10px 0 0;
  float: right;
  &:hover {
    background: #9d2449;
    color: #fff;
  }
`;

const RadioQuestion = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Label = styled.label`
  margin: 30px 0 10px;
  font-weight: 600;
  max-width: 100%;
  cursor: default;
  font-size: 18px;
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

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

const IDContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  padding: 20px 0;
    `

const insertHandler = async (values, { resetForm}) => {
  const formData = {
    id: values.id,
    nombre: values.nombre,
    edad: values.edad,
    genero: values.genero,
    descgenero: values.descgenero,
    discapacidad: values.discapacidad,
    descdiscapacidad: values.descdiscapacidad,
    lenguaindigena: values.lenguaindigena,
    desclengua: values.desclengua,
    q1: values.q1,
    q2: values.q2,
    q3: values.q3,
    q4: values.q4,
    q5: values.q5,
    q6: values.q6,
    q7: values.q7,
    q8: values.q8,
    q9: values.q9,
    q10: values.q10,
    q11: values.q10,
    q12: values.q12,
    q13: values.q13,
    q14: values.q14,
    q15: values.q15,
  };
  try {
    const response = await axios.post("/survey", formData);
  } catch (e) {
  } finally {
    resetForm()
  }
};

const FormSchema = Yup.object().shape({
  nombre: Yup.string()
    .min(2, "Ingresar un nombre correcto")
    .max(50, "Ingrese un nombre correcto"),
  edad: Yup.number()
    .required("Debe ingresar un valor")
    .positive("Edad tiene que ser un número positivo")
    .integer("Edad tiene que ser número entero")
    .typeError("Debe ingresar números enteros"),
  genero: Yup.string().required("Debe elegir una opción"),
  descgenero: Yup.string(),
  discapacidad: Yup.string().required("Debe elegir una opción"),
  descdiscapacidad: Yup.string(),
  lenguaindigena: Yup.string().required("Debe elegir una opción"),
  desclengua: Yup.string(),
  q1: Yup.string().required(),
  q2: Yup.string().required(),
  q3: Yup.string().required(),
  q4: Yup.string().required(),
  q5: Yup.string().required(),
  q6: Yup.string().required(),
  q7: Yup.string().required(),
  q8: Yup.string().required(),
  q9: Yup.string().required(),
  q10: Yup.string().required(),
  q11: Yup.string().required(),
  q12: Yup.string().required(),
  q13: Yup.string().required(),
  q14: Yup.string().required(),
  q15: Yup.string().required(),
});

const Encuesta = () => {
  const { id }= useParams();
  const navigate = useNavigate()
  return (
    <>
      <Title isHeader>Encuesta para el mecanismo Consejos Consultivos</Title>
      <Separator />
      <Container>
        <Formik
          initialValues={{
            id,
            nombre: "",
            edad: "",
            genero: "",
            descgenero: "",
            discapacidad: "",
            descdiscapacidad: "",
            lenguaindigena: "",
            desclengua: "",
            q1: "",
            q2: "",
            q3: "",
            q4: "",
            q5: "",
            q6: "",
            q7: "",
            q8: "",
            q9: "",
            q10: "",
            q11: "",
            q12: "",
            q13: "",
            q14: "",
            q15: "",
          }}
          validationSchema={FormSchema}
          onSubmit={insertHandler}
        >
          {({ values, errors }) => (
            <Form>
              <FormGroup>
                <Title>Datos personales</Title>
                <IDContainer style={{ display: 'none'}}><p>ID</p>{id}</IDContainer> 
                <TextField
                  label={"Nombre (Opcional)"}
                  type={"text"}
                  name={"nombre"}
                />
                <TextField label={"Edad"} type={"text"} name={"edad"} />
                {errors.edad&& <Error>{errors.edad}</Error>}
                <Label>Género</Label>
                <RadioQuestion>
                  <RadioInput
                    name={"genero"}
                    value={"masculino"}
                    label={"Masculino"}
                  />
                  <RadioInput
                    name={"genero"}
                    value={"femenino"}
                    label={"Femenino"}
                  />
                  <RadioInput name={"genero"} value={"otro"} label={"Otro"} />
                </RadioQuestion>
                {errors.genero && <Error>{errors.genero}</Error>}
                {values.genero === "otro" && (
                  <TextField
                    label={"¿Cuál?"}
                    type="text"
                    name={"descgenero"}
                  ></TextField>
                )}
                <Label>Tiene alguna discapacidad?</Label>
                <RadioQuestion>
                  <RadioInput name={"discapacidad"} value={"si"} label={"Si"} />
                  <RadioInput name={"discapacidad"} value={"no"} label={"No"} />
                </RadioQuestion>
                {values.discapacidad === "si" && (
                  <TextField
                    label={"¿Cuál?"}
                    type="text"
                    name={"descdiscapacidad"}
                  ></TextField>
                )}

                {errors.discapacidad && <Error>{errors.discapacidad}</Error>}
                <Label>Habla usted alguna lengua indígena?</Label>
                <RadioQuestion>
                  <RadioInput
                    name={"lenguaindigena"}
                    value={"si"}
                    label={"Si"}
                  />
                  <RadioInput
                    name={"lenguaindigena"}
                    value={"no"}
                    label={"No"}
                  />
                </RadioQuestion>

                {errors.lenguaindigena && (
                  <Error>{errors.lenguaindigena}</Error>
                )}
                {values.lenguaindigena === "si" && (
                  <TextField
                    label={"¿Cuál?"}
                    type="text"
                    name={"desclengua"}
                  ></TextField>
                )}
              </FormGroup>
              <FormGroup>
                <Title>Reactivos</Title>
                {Questions.map((question) => (
                  <QuestionContainer key={question.id}>
                    <Label>
                      {`${question.id}. `}
                      {question.question}
                    </Label>
                    <RadioQuestion>
                      <RadioInput
                        name={`q${question.id}`}
                        value={"si"}
                        label={"Si"}
                      />
                      <RadioInput
                        name={`q${question.id}`}
                        value={"no"}
                        label={"No"}
                      />
                    </RadioQuestion>
                  </QuestionContainer>
                ))}
              </FormGroup>
              {Object.keys(errors).length > 0 ? (
                <Error>Existen errores o preguntas por contestar.</Error>
              ) : null}
              <Button type="submit" onClick={() => setTimeout(()=> {
                  navigate('/end')
              },1000)}>Terminar</Button>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default Encuesta;
