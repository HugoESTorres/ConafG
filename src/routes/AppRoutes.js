import { Routes, Route } from "react-router-dom";
import App from '../App'
import Directory from "./Directory";
import Index from "./Index";
import MarcoLegal from "./MarcoLegal";
import Sesions from "./Sesions";
import ConsejosEstatales from "./ConsejosEstatales";
import Error404 from "./Error404";
import Integracion from "./Integracion";
import Funciones from "./Funciones";
import Encuesta from "./Encuesta";
import Comites from "./ComitesTecnicos";
import ComiteHome from "../components/ComiteHome";
import ComiteTecnico from "../components/ComiteTecnico";
import EndSurvey from './End'

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Index />} />
          <Route path="marco-legal" element={<MarcoLegal />} />
          <Route path="integracion" element={<Integracion />} />
          <Route path="directorio" element={<Directory />} />
          <Route path="sesiones" element={<Sesions />} />
          <Route path="funciones" element={<Funciones />} />
          <Route path="consejos-estatales" element={<ConsejosEstatales />} />
          <Route path="encuesta/:id" element={<Encuesta />}/>
          <Route path="comites-tecnicos" element={<Comites />}>
            <Route index element={<ComiteHome />} />
            <Route path=":comiteId" element={<ComiteTecnico />} />
          </Route>
          <Route path="end" element={<EndSurvey/>} />
          <Route path="/*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
};

export default PageRoutes;
