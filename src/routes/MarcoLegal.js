import styled from "styled-components";
import Reference from "../components/Reference";
import IndiceReglamento from "../components/IndiceReglamento";

const Tabla = styled.table`
  width: 100%;
  margin: 25px 0;
  background-color: transparent;
  border-collapse: collapse;
  border-spacing: 0;
  display: table;
  text-indent: initial:
  border-color: grey;
`;

const Thead = styled.thead`
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
`;
const Tr = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
  background-color: ${(props) => (props.odd ? "#eee" : null)};

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;

const Th = styled.th`
  display: table-cell;
  font-weight: bold;
  text-align: left;
  padding: 4px;
  line-height: 1.4285;
  vertical-align: bottom;
  border-bottom: 2px solid #ddd;
  border-top: 0;

  @media screen and (max-width: 767px) {
    font-size: ${(props) => (props.big ? "18px" : "10px")};
  }

  @media screen and (min-width: 1024px) {
    font-size: ${(props) => (props.big ? "32px" : "18px")};
  }
`;

const Tbody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
`;

const Td = styled.td`
  padding: 8px;
  line-height: 1.4285;
  vertical-align: top;
  border-top: 1px solid #ddd;
  width: 27%;

  @media screen and (max-width: 767px) {
    padding: 4px;
    font-size: 10px;
  }

  @media screen and (min-width: 1024px) {
  }
`;

const List = styled.ul`
  list-style-type: ${({ dot }) => (dot ? null : "upper-roman")};
  text-align: justify;
  margin: 15px 20px 15px 30px;
`;

const ListItem = styled.li`
  font-size: 12px;

  @media screen and (min-width: 1024px) {
    font-size: 1rem;
  }
`;

const Title = styled.h1`
  margin-top: 40px;
`;
const Text = styled.p`
  font-size: 12px;
  margin-bottom: 10px;
  text-align: justify;

  @media screen and (min-width: 1024px) {
    font-size: 1rem;
  }
`;
const Subtitle = styled.p`
  color: #fff;
  font-weight: 600;
  font-size: 24px;
  background-color: ${({ Ley }) => (Ley ? "var(--dark-green)" : "var(--wine)")};
  border-radius: 0 20px 0 20px;
  padding: 5px 0 2px 15px;
`;

const SubTitle = styled.h3``;

const Bold = styled.span`
  font-size: 12px;
  font-weight: 600;
  @media screen and (min-width: 1024px) {
    font-size: 1rem;
  }
`;


const Regulation = () => {
  return (
    <>
      <Title>Marco Legal</Title>
     
      <Subtitle name="ley" Ley>Ley General de Desarrollo Forestal Sustentable</Subtitle>
      <SubTitle name="art152">Artículo 152</SubTitle>
      <Text>
        Se crea el Consejo Nacional Forestal, como órgano de carácter consultivo
        y de asesoramiento, en las materias que le señale esta Ley y en las que
        le solicite su opinión. Además, fungirá como órgano de asesoría,
        supervisión, vigilancia, evaluación y seguimiento en la aplicación de
        los criterios de política forestal y de los instrumentos de política
        forestal previstos en esta Ley. Invariablemente, deberá solicitársele su
        opinión en materia de planeación forestal, reglamentos y normas.
      </Text>
      <Text>
        Dicho Consejo será presidido por el Titular de la Secretaría, siendo el
        Presidente Suplente el titular de la Comisión; asimismo, este último
        nombrará a un Secretario Técnico, mismo que contará con un suplente que
        será designado por el titular de la Secretaría.
      </Text>
      <SubTitle name="art153">Artículo 153</SubTitle>
      <Text>
        La Secretaría y la Comisión, junto con los gobiernos de las Entidades
        Federativas, integrarán los Consejos Estatales Forestales, mismos que
        fungirán como órganos de carácter consultivo y de asesoramiento en las
        materias de esta Ley.
      </Text>
      <Text>
        Para el caso de estos, se garantizará en todo momento la participación
        de los representantes de comunidades forestales, académicos, pueblos
        indígenas, profesional, industrial, sociedad civil, jóvenes, mujeres, y
        Gobierno Federal; siendo así de manera enunciativa más no limitativa.
      </Text>
      <Text>
        En las leyes locales de la materia y sus reglamentos, se establecerá la
        composición y funcionamiento de estos. Asimismo, se establecerá la
        vinculación de los Consejos Estatales Forestales con los Consejos en
        materia de Medio Ambiente y Desarrollo Rural Sustentable en los ámbitos
        previstos en las leyes correspondientes.
      </Text>
      
      <Subtitle>Reglamento del Consejo Nacional Forestal </Subtitle>
      <IndiceReglamento />
      <Text>
        Aprobado en la 51ª Sesión Ordinaria del Consejo Nacional Forestal el 25
        de noviembre de 2019
      </Text>
      <SubTitle name="cap1">Capítulo I. Disposiciones Generales</SubTitle>
      <Text>
        <Bold name="art1">Artículo 1.</Bold> El presente Reglamento tiene por
        objeto establecer la composición y funcionamiento del Consejo Nacional
        Forestal y de sus Comités Técnicos, en los términos que establecen los
        artículos 152 y 153 de la Ley General de Desarrollo Forestal
        Sustentable.{" "}
      </Text>
      <Text>
        <Bold name={"art2"}>Artículo 2.</Bold> Para los efectos de este
        Reglamento, serán aplicables las definiciones contenidas en la Ley
        General de Desarrollo Forestal Sustentable y su Reglamento, así como las
        siguientes:
      </Text>
      <List>
        <ListItem>
          Asistente Técnico: Servidor público de la Comisión, de la Secretaría o
          de sus Órganos sectorizados, designado para asistir en la operación de
          los Comités Técnicos;
        </ListItem>
        <ListItem>
          Comité Técnico: Cualquiera de los Comités Técnicos que funjan como
          órganos colegiados de apoyo al Consejo que realizan las tareas de
          análisis, deliberación y generación de propuestas;
        </ListItem>
        <ListItem>Consejo: El Consejo Nacional Forestal;</ListItem>
        <ListItem>
          Consejero: Persona elegida por cada una de las Representaciones que
          funge como miembro del Consejo;
        </ListItem>
        <ListItem>Comisión: La Comisión Nacional Forestal;</ListItem>
        <ListItem>Coordinador: Persona que preside un Comité Técnico;</ListItem>
        <ListItem>
          Grupo de Trabajo: Cuerpo colegiado de carácter temporal, encargado de
          atender temas específicos derivados de los acuerdos tomados en el
          Consejo;
        </ListItem>
        <ListItem>
          Ley: La Ley General de Desarrollo Forestal Sustentable;
        </ListItem>
        <ListItem>
          Membresía del Consejo: La totalidad de las personas morales que se
          encuentran integradas a una Representación;
        </ListItem>
        <ListItem>
          Organización Forestal Especializada: Organización de carácter social o
          privado, vinculada con la materia forestal especializada por giro de
          producción forestal maderable o no maderable;
        </ListItem>
        <ListItem>Presidente: Persona que preside el Consejo;</ListItem>
        <ListItem>
          Procuraduría: Procuraduría Federal de Protección al Ambiente;
        </ListItem>
        <ListItem>
          Reglamento: El Reglamento del Consejo Nacional Forestal;
        </ListItem>
        <ListItem>
          Representación Académica: Universidades, institutos y centros de
          enseñanza e investigación de carácter público y privado, dedicados a
          la enseñanza, transferencia de tecnología e investigación en materia
          forestal;
        </ListItem>
        <ListItem>
          Representación de la Sociedad Civil: Personas morales sin fines de
          lucro, cuyo objeto social incluye promover, entre otras cosas, el uso
          sustentable y la conservación de los recursos forestales o temas
          similares y que cuenta con Clave Única de Inscripción de acuerdo con
          la Ley Federal de Fomento a las Actividades Realizadas por
          Organizaciones de la Sociedad Civil;
        </ListItem>
        <ListItem>
          Representación de las Comunidades Forestales: Personas morales
          integradas por dueños y poseedores de terrenos forestales, así como
          ejidos y comunidades que aprovechan recursos forestales;
        </ListItem>
        <ListItem>
          Representación de los Consejos Estatales Forestales: Consejos
          Estatales agrupados en las regiones norte, centro y sur del país;
        </ListItem>
        <ListItem>
          {" "}
          Representación de los Pueblos Indígenas: Personas morales cuyo objeto
          social incluye representar, defender o agrupar personas pertenecientes
          a pueblos indígenas y que realicen actividades en territorios
          relacionados con los bienes y recursos forestales;
        </ListItem>
        <ListItem>
          {" "}
          Representación del Gobierno Federal: Dependencias y entidades de la
          Administración Pública Federal relacionadas con el sector forestal;
        </ListItem>
        <ListItem>
          {" "}
          Representación Industrial: Cámaras, asociaciones, sociedades y
          organizaciones dedicadas a la actividad industrial forestal;{" "}
        </ListItem>
        <ListItem>
          {" "}
          Representación Profesional: Colegios, sociedades, organizaciones y
          asociaciones, de carácter profesional, gremial, técnico, consultivo y
          científico, vinculados a la actividad forestal;{" "}
        </ListItem>
        <ListItem>
          {" "}
          Representaciones: Grupos de personas involucradas en el desarrollo de
          la actividad forestal que se integran a lo dispuesto en este
          Reglamento y conforman la Membresía del Consejo;{" "}
        </ListItem>
        <ListItem>
          {" "}
          Representante: Persona física designada por una Representación para
          participar en los Comités Técnicos;{" "}
        </ListItem>
        <ListItem>
          {" "}
          Secretaría: La Secretaría de Medio Ambiente y Recursos Naturales y{" "}
        </ListItem>
        <ListItem>
          {" "}
          Secretario Técnico: El Titular de la Secretaría Técnica del Consejo.{" "}
        </ListItem>
      </List>
      <Text>
        {" "}
        <Bold name={"art3"}>Artículo 3. </Bold> El Consejo es un órgano de
        carácter consultivo y de asesoramiento en las materias que le señala la
        Ley y en las que se le solicite su opinión. Funge como órgano de
        asesoría, supervisión, vigilancia, evaluación y seguimiento en la
        aplicación de los criterios e instrumentos de política forestal
        establecidos en la Ley.
      </Text>
      <SubTitle name={"cap2"}>
        Capítulo II. De las Atribuciones del Consejo
      </SubTitle>
      <Text>
        <Bold name={"art4"}>Artículo 4. </Bold>
        El Consejo tendrá las siguientes atribuciones:
      </Text>
      <List>
        <ListItem>
          {" "}
          Propiciar la corresponsabilidad y concurrencia con otros consejos y
          representaciones en materia forestal{" "}
        </ListItem>
        <ListItem>
          {" "}
          Actuar como instancia colegiada para la deliberación, conciliación y
          emisión de recomendaciones en las materias que son de su competencia{" "}
        </ListItem>
        <ListItem>
          {" "}
          Mantener la vinculación y comunicación con los Consejos Estatales
          Forestales{" "}
        </ListItem>
        <ListItem>
          {" "}
          Emitir su opinión sobre los procesos, mecanismos e instrumentos que
          sean puestos a su consideración e incidan en la política forestal
          nacional{" "}
        </ListItem>
        <ListItem>
          {" "}
          Evaluar el desarrollo, implementación e impacto de los programas
          gubernamentales y las políticas públicas que inciden en el sector
          forestal, a fin de emitir su opinión y recomendaciones
          correspondientes{" "}
        </ListItem>
        <ListItem>
          {" "}
          Proponer mecanismos para la participación ciudadana en materia
          forestal{" "}
        </ListItem>
        <ListItem>
          {" "}
          Observar y opinar sobre el diseño y cumplimiento de los instrumentos
          de planeación que incidan en el sector forestal{" "}
        </ListItem>
        <ListItem>
          {" "}
          Contribuir en mejorar los procedimientos y mecanismos de gestión
          forestal{" "}
        </ListItem>
        <ListItem>
          {" "}
          Proponer acciones para impulsar el desarrollo forestal sustentable{" "}
        </ListItem>
        <ListItem>
          {" "}
          Opinar en la delimitación de las Unidades de Manejo Forestal{" "}
        </ListItem>
        <ListItem>
          {" "}
          Participar en el diseño, instrumentación y evaluación de acciones
          integrales de prevención y combate a la ilegalidad forestal{" "}
        </ListItem>
        <ListItem>
          {" "}
          Participar en la elaboración y aplicación de programas e instrumentos
          económicos que se requieran para fomentar las labores de conservación
          y restauración de los recursos forestales y las cuencas hidrográficas{" "}
        </ListItem>
        <ListItem>
          {" "}
          Opinar sobre el diseño, desarrollo y aplicación de instrumentos
          económicos que incentiven el cumplimiento de los objetivos de la
          política forestal{" "}
        </ListItem>
        <ListItem>
          {" "}
          Proponer a la Secretaría y a la Comisión, lineamientos para promover
          la participación de los sectores social y privado en la planeación y
          realización de las actividades tendientes a incrementar la calidad y
          eficiencia en la conservación, producción, protección, restauración,
          ordenación, aprovechamiento, manejo, industrialización,
          comercialización y desarrollo forestal sustentable{" "}
        </ListItem>
        <ListItem>
          {" "}
          Proponer normas y participar en la consulta de Normas Oficiales
          Mexicanas y{" "}
        </ListItem>
        <ListItem>
          {" "}
          Las demás que, en cumplimiento de su propósito general, acuerde
          establecer el Presidente.{" "}
        </ListItem>
      </List>
      <SubTitle name="cap3">
        Capítulo III. De la Integración de las Representaciones y su
        Incorporación al Consejo
      </SubTitle>
      <Text>
        {" "}
        <Bold name={"art5"}>Artículo 5.</Bold> El Consejo se integrará por el
        Presidente, Presidente Suplente y los Consejeros de las siguientes
        Representaciones:
      </Text>
      <List>
        <ListItem> Comunidades Forestales </ListItem>
        <ListItem> Profesional </ListItem>
        <ListItem> Industrial </ListItem>
        <ListItem> Sociedad Civil </ListItem>
        <ListItem> Académica </ListItem>
        <ListItem> Pueblos Indígenas </ListItem>
        <ListItem> Consejos Estatales y </ListItem>
        <ListItem> Gobierno Federal. </ListItem>
      </List>
      <Text>
        Los Consejeros tendrán derecho de voz y un voto por Representación
        contarán con un suplente, que ejercerá las atribuciones del titular en
        caso de ausencia.
      </Text>
      <Text>
        El Consejo tendrá como invitado permanente a una persona representante
        del Instituto Nacional de las Mujeres, quien tendrá derecho de voz en
        las sesiones del Consejo.
      </Text>
      <Text>
        <Bold name={"art6"}>Artículo 6.</Bold> El Presidente emitirá la
        convocatoria pública para que las personas morales interesadas se
        integren a la Membresía del Consejo mediante su incorporación a las
        siguientes Representaciones: Comunidades Forestales, Profesional,
        Industrial, Académica, de la Sociedad Civil y Pueblos Indígenas.
      </Text>
      <Text>
        La convocatoria buscará aumentar la participación, inclusión y
        diversidad de las organizaciones involucradas en el desarrollo del
        sector forestal, incluyendo a organizaciones constituidas por mujeres y
        jóvenes.{" "}
      </Text>
      <Text>
        <Bold name={"art7"}>Artículo 7.</Bold> Para ser incorporado como
        integrante de las Representaciones señaladas en el artículo anterior,
        será necesario:
      </Text>
      <List>
        <ListItem>
          {" "}
          Ser una persona moral legalmente constituida, de cobertura nacional,
          regional, estatal o especializada, relacionada con los asuntos
          forestales;{" "}
        </ListItem>
        <ListItem>
          {" "}
          No perseguir fines de proselitismo partidista, político, electoral o
          religioso, sin menoscabo de las obligaciones señaladas en otras
          disposiciones legales; y{" "}
        </ListItem>
        <ListItem>
          {" "}
          Contar con un objeto social acorde a la Representación a la que aspira
          incorporarse.{" "}
        </ListItem>
      </List>
      <Text>
        {" "}
        La convocatoria precisará los requisitos y plazos para solicitar la
        incorporación a alguna Representación, considerando por lo menos: la
        acreditación de la existencia legal de la persona moral, los documentos
        que demuestren su participación en actividades relacionadas con la
        Representación a la que buscan incorporarse y la representación legal de
        quien comparece a su nombre, entre otros.{" "}
      </Text>
      <Text>
        {" "}
        La Secretaría Técnica revisará las solicitudes de incorporación y podrá
        determinar la integración a la Representación que corresponda de acuerdo
        con el objeto social, las actividades que desarrolla la interesada y de
        conformidad a la clasificación señalada en este Reglamento, con el fin
        de que el sector forestal se encuentre debidamente representado sin
        existir un límite máximo de miembros que integren las Representaciones.{" "}
      </Text>
      <Text>
        <Bold name={"art8"}>Artículo 8.</Bold> El resultado de la convocatoria
        será sometido al pleno del Consejo para su aprobación. El listado
        resultante conformará la Membresía del Consejo.{" "}
      </Text>
      <Text>
        Por lo menos cada 3 años se realizará el proceso para incorporar y
        refrendar la participación en la Membresía del Consejo.
      </Text>
      <Text>
        <Bold name={"art9"}>Artículo 9.</Bold> Una vez integrada la Membresía
        del Consejo, cada Representación designará a un Consejero Titular y a un
        Consejero Suplente, de acuerdo con lo siguiente:
      </Text>
      <List>
        <ListItem>
          {" "}
          Las Representaciones señaladas en el artículo 6 de este Reglamento,
          acordarán la designación de un Consejero Titular, mismo que durará un
          máximo de 3 años en su encargo, y un Consejero Suplente. Las
          Representaciones tienen, en todo momento, la facultad de relevar al
          Consejero Titular o al Suplente;{" "}
        </ListItem>
        <ListItem>
          {" "}
          Los Consejeros Titular y Suplente de la Representación del Gobierno
          Federal serán nombrados por los titulares de las Dependencias y
          Entidades de la Administración Pública Federal, vinculadas con el
          sector forestal, definidas por acuerdo del Presidente del Consejo; y{" "}
        </ListItem>
        <ListItem>
          {" "}
          Los Consejeros Titular y Suplente de la Representación de los Consejos
          Estatales Forestales serán designados por los Consejos Estatales de
          cada región y durarán un periodo no mayor a tres años.{" "}
        </ListItem>
      </List>
      <Text>
        {" "}
        Las Representaciones deberán designar de manera preferente a una mujer
        como Consejera Titular o Suplente.{" "}
      </Text>
      <Text>
        {" "}
        Además, cada Representación designará al Coordinador, titular y
        suplente, del Comité Técnico que corresponda de acuerdo con lo
        establecido en el artículo 31 de este Reglamento y a las personas que
        participarán en los Comités Técnicos como Representantes, teniendo la
        facultad de removerlos de conformidad con los acuerdos que se alcancen
        al interior de cada Representación.{" "}
      </Text>
      <Text>
        {" "}
        La designación de los Consejeros, Representantes, y Coordinadores de las
        Representaciones señaladas en el artículo 6 de este Reglamento, deberá
        ser democrática, transparente y legítima. El mecanismo de selección
        tendrá que ser consensuado entre los integrantes de cada Representación.{" "}
      </Text>
      <Text>
        {" "}
        Para acreditar lo anterior, se deberá proporcionar a la Secretaría
        Técnica, el acta de la reunión de la Representación que corresponda, en
        la que conste el acuerdo de designación de los Consejeros,
        Representantes, y Coordinadores de las Representaciones, misma que
        deberá señalar, el mecanismo de selección y las firmas de las personas
        participantes en el proceso.{" "}
      </Text>
      <Text>
        {" "}
        La Secretaría Técnica podrá proporcionar los requerimientos de logística
        para la realización de reuniones de las Representaciones para las
        designaciones referidas en el párrafo anterior.{" "}
      </Text>
      <List>
        <ListItem>
          {" "}
          Por conclusión del periodo establecido en el artículo 9 de este
          Reglamento{" "}
        </ListItem>
        <ListItem>
          {" "}
          Por renuncia, presentada por escrito dirigido al Presidente{" "}
        </ListItem>
        <ListItem>
          {" "}
          Por violaciones a este Reglamento, mediando acuerdo tomado por el
          Consejo{" "}
        </ListItem>
        <ListItem>
          {" "}
          Por haber sido removido, mediante acuerdo de la Representación
          correspondiente, lo cual deberá ser informado al Presidente{" "}
        </ListItem>
        <ListItem>
          {" "}
          Por acumulación de tres inasistencias consecutivas o cinco no
          consecutivas de sesiones del Consejo y{" "}
        </ListItem>
        <ListItem>
          {" "}
          Por incumplimiento de las funciones y obligaciones señaladas en el
          artículo 18 de este Reglamento.{" "}
        </ListItem>
      </List>
      <Text>
        <Bold name={"art10"}>Artículo 10.</Bold> Los Consejeros titulares, de
        las Representaciones señaladas en el artículo 6 de este Reglamento,
        causarán baja por alguna de las razones siguientes:
      </Text>
      <List>
        <ListItem>
          {" "}
          Por conclusión del periodo establecido en el artículo 9 de este
          Reglamento;{" "}
        </ListItem>
        <ListItem>
          {" "}
          Por renuncia, presentada por escrito dirigido al Presidente;{" "}
        </ListItem>
        <ListItem>
          {" "}
          Por violaciones a este Reglamento, mediando acuerdo tomado por el
          Consejo;{" "}
        </ListItem>
        <ListItem>
          {" "}
          Por haber sido removido, mediante acuerdo de la Representación
          correspondiente, lo cual deberá ser informado al Presidente;{" "}
        </ListItem>
        <ListItem>
          {" "}
          Por acumulación de tres inasistencias consecutivas o cinco no
          consecutivas de sesiones del Consejo; y{" "}
        </ListItem>
        <ListItem>
          {" "}
          Por incumplimiento de las funciones y obligaciones señaladas en el
          artículo 18 de este Reglamento.{" "}
        </ListItem>
      </List>
      <Text>
        <Bold name={"art11"}>Artículo 11.</Bold> En caso de que un Consejero
        Titular cause baja por las razones enunciadas en el artículo anterior,
        el Secretario Técnico deberá notificar dicha circunstancia al Presidente
        y a los integrantes de la Representación correspondiente, para efectos
        de designar un nuevo Consejero Titular. En tanto se nombra un nuevo
        Consejero Titular, el suplente realizará las funciones de aquel.
      </Text>
      <Text>
        <Bold name={"art12"}>Artículo 12.</Bold> El Consejo tendrá los órganos
        operativos siguientes:
      </Text>
      <List>
        <ListItem>Comités Técnicos</ListItem>
        <ListItem>Grupos de Trabajo</ListItem>
      </List>
      <SubTitle name="cap4">
        Capítulo IV. De las Funciones y Obligaciones del Presidente, del
        Secretario Técnico y de los Consejeros
      </SubTitle>
      <Text>
        <Bold name={"art13"}>Artículo 13.</Bold> El Presidente tendrá las
        funciones y obligaciones siguientes:
      </Text>
      <List>
        <ListItem> Representar al Consejo </ListItem>
        <ListItem> Cumplir y hacer cumplir este Reglamento </ListItem>
        <ListItem> Asistir y presidir las sesiones del Consejo </ListItem>
        <ListItem>
          {" "}
          Convocar, a través del Secretario Técnico, a las sesiones del Consejo{" "}
        </ListItem>
        <ListItem>
          {" "}
          Presentar iniciativas sobre asuntos a tratar en el Consejo{" "}
        </ListItem>
        <ListItem>
          {" "}
          Presentar un informe sobre el estado que guarda el sector forestal del
          país, y el informe anual de actividades del Consejo, en la última
          sesión ordinaria del año{" "}
        </ListItem>
        <ListItem>
          {" "}
          Atender de manera oportuna las opiniones, recomendaciones y acuerdos
          que emita el pleno del Consejo{" "}
        </ListItem>
        <ListItem>
          {" "}
          Proponer la participación de invitados especiales, expertos y
          observadores en las sesiones del Consejo{" "}
        </ListItem>
        <ListItem>
          {" "}
          Solicitar a los integrantes del Consejo la información que se requiera
          para la atención de los asuntos a tratar{" "}
        </ListItem>
        <ListItem>
          {" "}
          Conocer el informe anual de los Comités Técnicos y Grupos de Trabajo y
          sus resultados{" "}
        </ListItem>
        <ListItem>
          {" "}
          Impulsar el fortalecimiento de la organización interna de las
          Representaciones{" "}
        </ListItem>
        <ListItem>
          {" "}
          Coordinar el proceso de renovación del Consejo, con base a lo
          establecido en este Reglamento{" "}
        </ListItem>
        <ListItem>
          {" "}
          Emitir voto de calidad en caso de empate en las votaciones del Consejo{" "}
        </ListItem>
        <ListItem> Proponer reformas a este Reglamento y </ListItem>
        <ListItem>
          {" "}
          Las demás que sean necesarias para el buen funcionamiento del Consejo.{" "}
        </ListItem>
      </List>
      <Text>
        <Bold name={"art14"}>Artículo 14.</Bold> En ausencia del Presidente, el
        Presidente Suplente presidirá las sesiones y asumirá las funciones de
        este.
      </Text>
      <Text>
        <Bold name={"art15"}>Artículo 15.</Bold> La Secretaría Técnica estará a
        cargo de un Secretario Técnico y un Secretario Técnico Suplente
        designados de acuerdo con la Ley.
      </Text>
      <Text>
        <Bold name={"art16"}>Artículo 16.</Bold> El Secretario Técnico tendrá
        las funciones siguientes:
      </Text>
      <List>
        <ListItem>
          {" "}
          Organizar y mantener actualizado el archivo y el directorio del
          Consejo{" "}
        </ListItem>
        <ListItem>
          {" "}
          Integrar los expedientes correspondientes a las actas de acuerdos de
          las sesiones de los Comités Técnicos, Grupos de Trabajo y de las
          reuniones de las Representaciones{" "}
        </ListItem>
        <ListItem>
          {" "}
          Convocar, por instrucciones del Presidente o del Presidente Suplente,
          a las sesiones del Consejo{" "}
        </ListItem>
        <ListItem>
          {" "}
          Preparar el orden del día, llevar el registro de asistencia y levantar
          las actas de las sesiones del Consejo{" "}
        </ListItem>
        <ListItem>
          {" "}
          Organizar las sesiones y auxiliar al Presidente y al Presidente
          Suplente, en el desarrollo de las mismas{" "}
        </ListItem>
        <ListItem>
          {" "}
          Dar seguimiento a los acuerdos del Consejo, de los Comités Técnicos,
          Grupos de Trabajo y demás reuniones que se realicen{" "}
        </ListItem>
        <ListItem>
          {" "}
          Informar al Presidente y al Presidente Suplente sobre los avances de
          acuerdos y de todos los asuntos del Consejo{" "}
        </ListItem>
        <ListItem>
          {" "}
          Proponer al Consejo mecanismos de comunicación con los Consejeros y
          los Comités Técnicos{" "}
        </ListItem>
        <ListItem>
          {" "}
          Vincular al Consejo con los Consejos Estatales Forestales y otros
          Consejos que inciden en el territorio rural y se relacionan con el
          sector forestal{" "}
        </ListItem>
        <ListItem>
          {" "}
          Preparar el informe anual de actividades del Consejo{" "}
        </ListItem>
        <ListItem>
          {" "}
          Favorecer y apoyar la comunicación entre los integrantes de cada
          Representación y sus reuniones internas para fines del Consejo y{" "}
        </ListItem>
        <ListItem>
          {" "}
          Las demás que le sean asignadas por el Consejo, el Presidente y el
          Presidente Suplente, que sean necesarias para el cumplimiento del
          propósito y atribuciones del Consejo.{" "}
        </ListItem>
      </List>
      <Text>
        <Bold name={"art17"}>Artículo 17.</Bold> Los Consejeros tendrán la
        función y obligación de promover la realización de reuniones periódicas
        con los integrantes de su Representación, a efecto de analizar temas de
        su interés y elevar las propuestas y opiniones que generen al pleno del
        Consejo.
      </Text>
      <Text>
        <Bold name={"art18"}>Artículo 18.</Bold> Los Consejeros tendrán las
        siguientes funciones y obligaciones:
      </Text>
      <List>
        <ListItem> Cumplir las disposiciones del presente Reglamento </ListItem>
        <ListItem>
          {" "}
          Asistir a las sesiones del Consejo con derecho a voz y voto{" "}
        </ListItem>
        <ListItem>
          {" "}
          Informar al Consejo de los trabajos y acuerdos de su Representación y
          a los integrantes de su Representación, de los acuerdos y resoluciones
          del Consejo{" "}
        </ListItem>
        <ListItem>
          {" "}
          Promover y convocar a reuniones periódicas con los integrantes de su
          Representación para brindarles la información oportuna sobre los temas
          que se tratarán en el Consejo, con la finalidad de escuchar e integrar
          la postura de la Representación ante los diferentes temas a tratar{" "}
        </ListItem>
        <ListItem>
          {" "}
          Elaborar actas de acuerdos de las reuniones de su Representación{" "}
        </ListItem>
        <ListItem>
          {" "}
          Informar a la Secretaría Técnica de las reuniones realizadas de su
          Representación y proporcionar copia de las actas de acuerdos.{" "}
        </ListItem>
        <ListItem>
          {" "}
          Proponer las reglas para la organización interna de su Representación{" "}
        </ListItem>
        <ListItem> Cumplir los acuerdos y resoluciones del Consejo </ListItem>
        <ListItem>
          {" "}
          Presentar iniciativas, previo acuerdo con su Representación, sobre
          asuntos que consideren importantes tratar en el Consejo que sean de su
          competencia{" "}
        </ListItem>
        <ListItem>
          {" "}
          Participar en los Comités Técnicos y proponer la integración y
          participación de su Representación en los Grupos de Trabajo{" "}
        </ListItem>
        <ListItem>
          {" "}
          Atender de manera oportuna las opiniones, recomendaciones y acuerdos
          que emita el pleno del Consejo{" "}
        </ListItem>
        <ListItem>
          {" "}
          Proponer a invitados especiales y expertos a las sesiones del Consejo
          y{" "}
        </ListItem>
        <ListItem>
          {" "}
          Las demás que sean necesarias para el cumplimiento de sus funciones y
          obligaciones, del propósito y las atribuciones del Consejo.{" "}
        </ListItem>
      </List>
      <SubTitle name={"cap5"}>Capítulo V. De las Sesiones del Consejo</SubTitle>
      <Text>
        <Bold name={"art19"}>Artículo 19. </Bold> Las sesiones del Consejo serán
        ordinarias y extraordinarias. Las sesiones ordinarias se realizarán cada
        tres meses y las extraordinarias por acuerdo del Presidente, del
        Presidente Suplente, a solicitud de una Representación o a solicitud de
        seis Consejeros, o bien por acuerdo de la última sesión ordinaria. En
        las sesiones extraordinarias se tratará únicamente el asunto para el
        cual hayan sido convocadas.
      </Text>
      <Text>
        Las sesiones ordinarias y extraordinarias serán convocadas a través del
        Secretario Técnico.
      </Text>
      <Text>
        <Bold name={"art20"}>Artículo 20.</Bold> Las convocatorias a sesiones
        ordinarias se emitirán al menos siete días naturales anteriores a la
        fecha de la sesión, y en el caso de las extraordinarias con tres días
        naturales de antelación.
      </Text>
      <Text>
        <Bold name={"art21"}>Artículo 21.</Bold> La convocatoria deberá contener
        el orden del día propuesto, la fecha, hora y lugar de la sesión y la
        información de los asuntos a tratar. La convocatoria podrá señalar la
        forma de asistir a la sesión mediante medios tecnológicos audiovisuales.
        La asistencia mediante el uso de estos medios tendrá los mismos efectos
        que la presencia física y se asentará la presencia de los miembros del
        Consejo en el acta correspondiente.
      </Text>
      <Text>
        <Bold name={"art22"}>Artículo 22.</Bold> Las sesiones ordinarias o
        extraordinarias, se constituirán legalmente con la asistencia del
        Presidente o del Presidente Suplente y al menos cinco Consejeros. En
        caso de no conformarse el quorum necesario se emitirá una segunda
        convocatoria para el mismo día y con media hora de diferencia de la
        primera. La sesión se constituirá legalmente con la asistencia del
        Presidente o del Presidente Suplente y los Consejeros presentes, se
        respetará el contenido de la primera convocatoria siendo válidos los
        acuerdos alcanzados.
      </Text>
      <Text>
        <Bold name={"art23"}>Artículo 23.</Bold> El orden del día incluirá
        cuando menos los siguientes puntos:
      </Text>
      <List>
        <ListItem>
          {" "}
          Registro de asistencia y verificación del quórum legal{" "}
        </ListItem>
        <ListItem>
          {" "}
          Aprobación o modificación del orden del día propuesto{" "}
        </ListItem>
        <ListItem>
          {" "}
          Lectura y aprobación de Acta de acuerdos de la sesión anterior{" "}
        </ListItem>
        <ListItem> Informe de avances de acuerdos </ListItem>
        <ListItem> Relación de los temas a tratar </ListItem>
        <ListItem>
          {" "}
          Participación de los Consejeros para establecer la postura y
          propuestas de su Representación{" "}
        </ListItem>
        <ListItem> Lectura y registro de acuerdos y </ListItem>
        <ListItem> Asuntos generales. </ListItem>
      </List>
      <Text>
        En el caso de sesiones extraordinarias el orden del día contendrá:
      </Text>
      <List>
        <ListItem>
          Registro de asistencia y verificación de quórum legal
        </ListItem>
        <ListItem>Tema a tratar</ListItem>
        <ListItem>
          Participación de los Consejeros para establecer la postura y
          propuestas de su Representación
        </ListItem>
        <ListItem>Lectura y registro de acuerdos</ListItem>
      </List>
      <Text>
        <Bold name={"art24"}>Artículo 24.</Bold> Las resoluciones y acuerdos del
        Consejo se tomarán por mayoría simple de votos de los Consejeros
        presentes en la sesión.
      </Text>
      <Text>
        <Bold name={"art25"}>Artículo 25.</Bold> En cada sesión el Secretario
        Técnico levantará el acta de acuerdos. Una vez aprobada el acta en la
        sesión subsecuente del Consejo, será firmada por el Presidente y
        Secretario Técnico para constancia. Las actas serán remitidas a los
        Consejeros y Coordinadores, quiénes tendrán la responsabilidad de
        hacerlas del conocimiento de los integrantes de su Representación.
      </Text>
      <SubTitle name={"cap6"}>Capítulo VI. De los Comités Técnicos</SubTitle>
      <Text>
        <Bold name={"art26"}>Artículo 26.</Bold> Para que el Consejo emita
        opinión en los temas de su competencia el Secretario Técnico procederá a
        solicitar al Comité Técnico correspondiente deliberar y acordar la
        propuesta respectiva para su posterior aprobación por el pleno del
        Consejo.
      </Text>
      <Text>
        {" "}
        En el caso de que la opinión requerida al Consejo deba brindarse en un
        plazo perentorio, de acuerdo con la normatividad aplicable, el Consejo
        podrá acordar mecanismos que agilicen la emisión de opiniones
        considerando la posibilidad de que éstas sean generadas por Comités
        Técnicos o Grupos de Trabajo, los cuales deberán informar al Consejo
        sobre las opiniones emitidas.
      </Text>
      <Text>
        <Bold name={"art27"}>Artículo 27.</Bold> Los Comités Técnicos fungirán
        como cuerpos colegiados para el análisis, deliberación, consulta,
        asesoramiento y concertación de temas específicos que le sean asignados
        por el Consejo.
      </Text>
      <Text>
        <Bold name={"art28"}>Artículo 28.</Bold> Los Comités Técnicos serán los
        siguientes:
      </Text>
      <List>
        <ListItem>
          {" "}
          Comité Técnico de Legislación e Inspección y Vigilancia Forestal que
          atenderá los asuntos relacionados con leyes, reglamentos y normas así
          como aquellos temas relativos a la inspección y vigilancia forestal,
          fortalecimiento de la aplicación del marco normativo y combate a la
          ilegalidad{" "}
        </ListItem>
        <ListItem>
          {" "}
          Comité Técnico de Producción y Productividad Forestal que atenderá los
          temas relacionados con el manejo y aprovechamiento sustentable de los
          recursos forestales, el desarrollo de plantaciones forestales
          comerciales y la industrialización y comercialización de los productos
          forestales, maderables y no maderables así como lo relacionado al
          fortalecimiento de la organización para la producción forestal y
          asuntos de mercado forestal interno y externo{" "}
        </ListItem>
        <ListItem>
          {" "}
          Comité Técnico de Educación, Cultura Forestal y Desarrollo Tecnológico
          que atenderá los temas relacionados a la educación, cultura forestal,
          capacitación y adiestramiento, investigación y desarrollo tecnológico
          en materia forestal{" "}
        </ListItem>
        <ListItem>
          {" "}
          Comité Técnico de Protección y Conservación Forestal que atenderá los
          temas relacionados con manejo integral del fuego, protección,
          restauración de recursos forestales y sus suelos lo relacionado con
          los servicios ambientales de los ecosistemas forestales y manejo
          integrado de plagas y enfermedades forestales{" "}
        </ListItem>
        <ListItem>
          {" "}
          Comité Técnico de Servicios Técnicos Forestales que atenderá los
          asuntos relacionados con la asistencia técnica y la prestación de
          servicios técnicos forestales{" "}
        </ListItem>
        <ListItem>
          {" "}
          Comité Técnico de Cambio Climático y Bosques que atenderá los asuntos
          relacionados con mitigación y adaptación de los efectos del cambio
          climático sobre los bosques reducción de emisiones por deforestación y
          degradación forestal y{" "}
        </ListItem>
        <ListItem> Los demás que el Consejo acuerde establecer.</ListItem>
      </List>
      <Text>
        <Bold name={"art29"}>Artículo 29.</Bold> Los Comités Técnicos tendrán
        las siguientes atribuciones:
      </Text>
      <List>
        <ListItem>
          {" "}
          Emitir opinión o dictamen sobre los temas que les encomiende el
          Consejo;{" "}
        </ListItem>
        <ListItem>
          {" "}
          Proponer y opinar sobre proyectos de normas en materia forestal y
          relativas a los recursos naturales;{" "}
        </ListItem>
        <ListItem>
          {" "}
          Elaborar y presentar al Consejo a través de su Coordinador, el informe
          anual de trabajo del Comité;{" "}
        </ListItem>
        <ListItem>
          {" "}
          Presentar iniciativas al Consejo, a través de su Coordinador, sobre
          asuntos de su competencia;{" "}
        </ListItem>
        <ListItem>
          {" "}
          Informar al Consejo sobre las actividades y acuerdos desarrollados; y{" "}
        </ListItem>
        <ListItem>
          {" "}
          Las demás que en cumplimiento de su propósito general, autorice el
          Consejo de carácter facultativo y no limitativo.{" "}
        </ListItem>
      </List>
      <Text>
        <Bold name={"art30"}>Artículo 30.</Bold> Las Representaciones designarán
        a los Coordinadores de los Comités Técnicos de acuerdo con lo siguiente:
      </Text>
      <List dot>
        <ListItem>
          {" "}
          Representación Académica: Comité Técnico de Educación, Cultura
          Forestal y Desarrollo Tecnológico;{" "}
        </ListItem>
        <ListItem>
          {" "}
          Representación Industrial: Comité Técnico de Legislación e Inspección
          y Vigilancia Forestal;{" "}
        </ListItem>
        <ListItem>
          {" "}
          Representación de la Sociedad Civil: Comité Técnico de Protección y
          Conservación Forestal;{" "}
        </ListItem>
        <ListItem>
          {" "}
          Representación Profesional: Comité Técnico de Servicios Técnicos
          Forestales;{" "}
        </ListItem>
        <ListItem>
          {" "}
          Representación de las Comunidades Forestales: Comité Técnico de Cambio
          Climático y Bosques;{" "}
        </ListItem>
        <ListItem>
          {" "}
          Representación de los Pueblos Indígenas: Comité Técnico de Producción
          y Productividad Forestal.{" "}
        </ListItem>
      </List>
      <Text>
        La Coordinación de los Comités Técnicos recaerá en dos personas, una de
        las cuáles deberá ser mujer. Los Coordinadores acordarán la forma en que
        se dividirán el trabajo de coordinación o de concurrir a las sesiones.
      </Text>
      <Text>
        <Bold name={"art31"}>Artículo 31.</Bold> Los Comités Técnicos se
        integrarán por la Coordinación y los Representantes de cada una de las
        Representaciones. Cada Representación designará a un titular y suplente
        para participar en los diversos Comités Técnicos, independientemente o
        no de corresponderle la coordinación del mismo.
      </Text>
      <Text>
        Podrán contar con la presencia de los expertos que el propio Comité
        Técnico estime necesario invitar para atender algún aspecto específico
        de su agenda. Los expertos podrán ser invitados regulares solo en
        funciones de asesoría en temas específicos.
      </Text>
      <Text>
        Cada Comité Técnico contará con un Asistente Técnico que apoyará en la
        logística y el desarrollo de las sesiones, para lo cual podrá solicitar
        apoyo a la Secretaría Técnica.
      </Text>
      <Text>
        <Bold name={"art32"}>Artículo 32.</Bold> Los Consejeros de cada
        Representación entregarán por escrito ante la Secretaría Técnica los
        nombres del Representante y su suplente ante cada Comité.
      </Text>
      <Text>
        Los Representantes titulares ante Comités Técnicos durarán en su encargo
        un máximo de tres años, no pudiendo ser designados nuevamente para el
        periodo inmediato siguiente. Asimismo, la Representación tiene la
        facultad de remover, en cualquier momento, a sus Representantes.
      </Text>
      <Text>
        <Bold name={"art33"}>Artículo 33.</Bold> Los Representantes participarán
        en las sesiones de los Comités Técnicos y tendrán las siguientes
        atribuciones y obligaciones:
      </Text>
      <List>
        <ListItem>
          {" "}
          Asistir y participar con voz y voto en las sesiones del Comité
          Técnico;{" "}
        </ListItem>
        <ListItem>
          {" "}
          Participar en los Grupos de Trabajo que se integren;{" "}
        </ListItem>
        <ListItem>
          {" "}
          Presentar iniciativas sobre asuntos importantes a tratar en el Comité
          Técnico;{" "}
        </ListItem>
        <ListItem>
          {" "}
          Proponer al Comité Técnico la participación de invitados especiales;{" "}
        </ListItem>
        <ListItem>
          {" "}
          Informar al Consejero de su Representación las actividades y acuerdos
          tomados en las sesiones; y{" "}
        </ListItem>
        <ListItem>
          {" "}
          Las demás que le sean necesarias para el cumplimiento de las funciones
          y obligaciones, propósitos y atribuciones del Comité Técnico.{" "}
        </ListItem>
      </List>
      <Text>
        <Bold name={"art34"}>Artículo 34.</Bold> Los Coordinadores durarán en su
        cargo tres años, sin posibilidad de que este plazo sea ampliado ni
        volver a ser designados para el mismo. Tendrán las atribuciones
        siguientes:
      </Text>
      <List>
        <ListItem> Representar al Comité y presidir sus sesiones </ListItem>
        <ListItem>
          {" "}
          Preparar, en coordinación con el Asistente Técnico, el orden del día
          sesión y la convocatoria de cada sesión{" "}
        </ListItem>
        <ListItem>
          {" "}
          Convocar a las sesiones directamente o a través del Asistente Técnico{" "}
        </ListItem>
        <ListItem>
          {" "}
          Presentar a los integrantes del Comité Técnico los temas de análisis e
          iniciativas encomendadas por el Consejo{" "}
        </ListItem>
        <ListItem>
          {" "}
          Presentar un programa y un informe trimestral de actividades al
          Consejo{" "}
        </ListItem>
        <ListItem>
          {" "}
          Vigilar el cumplimiento de acuerdos del Comité Técnico{" "}
        </ListItem>
        <ListItem>
          {" "}
          Proponer la participación de invitados especiales y expertos y la
          formación de Grupos de Trabajo{" "}
        </ListItem>
        <ListItem>
          {" "}
          Supervisar la elaboración de las actas de las sesiones y demás
          documentos derivados de éstas{" "}
        </ListItem>
        <ListItem>
          {" "}
          Proporcionar al Secretario Técnico del Consejo copia de las actas de
          las sesiones del Comité Técnico{" "}
        </ListItem>
        <ListItem>
          {" "}
          Solicitar a los integrantes del Comité Técnico la información
          necesaria para el debido desempeño de sus funciones{" "}
        </ListItem>
        <ListItem>
          {" "}
          Proponer la formación de Grupos de Trabajo, y en su caso coordinar y
          apoyar su funcionamiento{" "}
        </ListItem>
        <ListItem>
          {" "}
          Emitir voto de calidad sólo en caso de empate y en caso de ausencia
          del Representante de la Representación que lo designó y{" "}
        </ListItem>
        <ListItem>
          {" "}
          Las demás que sean necesarias para el cumplimiento de las atribuciones
          y obligaciones del Comité Técnico.{" "}
        </ListItem>
      </List>
      <Text>
        <Bold name={"art35"}>Artículo 35.</Bold> Los Representantes titulares
        causarán baja por las razones siguientes:
      </Text>
      name={"art19"}
      <List>
        <ListItem>
          {" "}
          Por conclusión del periodo establecido en el artículo 32 de este
          Reglamento{" "}
        </ListItem>
        <ListItem>
          {" "}
          Por renuncia, presentada por escrito a la Secretaría Técnica{" "}
        </ListItem>
        <ListItem>
          {" "}
          Por violaciones al Reglamento, mediando acuerdo del Comité Técnico
          correspondiente{" "}
        </ListItem>
        <ListItem>
          {" "}
          Por remoción efectuada por la Representación correspondiente, lo cual
          deberá ser informado a la Secretaría Técnica{" "}
        </ListItem>
        <ListItem>
          {" "}
          Asimismo, en caso de acumulación de hasta tres inasistencias
          injustificadas consecutivas. En este cname={"art19"}aso se notificará
          a la Representación correspondiente para que designe un nuevo
          representante.{" "}
        </ListItem>
      </List>
      <Text>
        <Bold name={"art36"}>Artículo 36.</Bold> Las sesiones de los Comités
        Técnicos se llevarán a cabo mediante un programa de trabajo definido en
        la primera sesión del año, serán ordinarias y extraordinarias. Las
        sesiones ordinarias se realizarán de manera periódica en los días, horas
        y lugares fijos que el propio Comité acuerde. Las sesiones
        extraordinarias serán por acuerdo del Comité o por convocatoria del
        Coordinador tratándose únicamente el asunto para el que hayan sido
        convocadas.
      </Text>
      <Text>
        <Bold name={"art37"}>Artículo 37.</Bold> Las sesiones ordinarias serán
        convocadas con un mínimo de 5 días hábiles de anticipación a la fecha de
        la sesión y las extraordinarias, con una antelación de 3 días hábiles.
      </Text>
      <Text>
        <Bold name={"art38"}>Artículo 38.</Bold> La convocatoria deberá contener
        el orden del día propuesto, la fecha, hora y lugar de la sesión y la
        información de los asuntos a tratar. La convocatoria podrá señalar la
        forma de asistir a la sesión mediante medios tecnológicos audiovisuales.
        La asistencia mediante el uso de estos medios tendrá los mismos efectos
        que la presencia física y se asentará la presencia de los miembros del
        Consejo en el acta correspondiente.
      </Text>
      <Text>
        <Bold name={"art39"}>Artículo 39.</Bold> Las sesiones, ordinarias o
        extraordinarias, se constituirán legalmente con la asistencia de un
        Coordinador y al menos la mitad de los Representantes que conforman el
        Comité. En caso de no conformarse el quorum necesario se emitirá una
        segunda convocatoria para el mismo día y con media hora de diferencia de
        la primera, en este caso, la sesión se constituirá legalmente con la
        asistencia del Coordinador y los Representantes presentes, se respetará
        el contenido de la primera convocatoria siendo válidos los acuerdos
        alcanzados.
      </Text>
      <Text>
        <Bold name={"art40"}>Artículo 40.</Bold> En el orden del día propuesto
        se incluirá cuando menos los siguientes puntos:
      </Text>
      <List>
        <ListItem> Registro de asistentes y verificación del quórum </ListItem>
        <ListItem>
          {" "}
          Lectura y aprobación, en su caso, del acta de la sesión anterior{" "}
        </ListItem>
        <ListItem> Informe de avances de acuerdos anteriores </ListItem>
        <ListItem> Relación de temas a tratar </ListItem>
        <ListItem>
          {" "}
          Participación de los Representantes y toma de acuerdos{" "}
        </ListItem>
        <ListItem> Lectura y registro de acuerdos y </ListItem>
        <ListItem> Asuntos generales. </ListItem>
      </List>
      <Text>
        En el caso de las sesiones extraordinarias el orden del día propuesto
        incluirá:
      </Text>
      <List>
        <ListItem>
          {" "}
          En el caso de las sesiones extraordinarias el orden del día propuesto
          incluirá:{" "}
        </ListItem>
        <ListItem> Registro de asistentes y verificación del quórum </ListItem>
        <ListItem> Tema a tratar </ListItem>
        <ListItem>
          {" "}
          Participación de los Representantes y toma de acuerdos y{" "}
        </ListItem>
        <ListItem> Lectura y registro de acuerdos. </ListItem>
      </List>
      <Text>
        El acta de acuerdos será elaborada por el Asistente Técnico y una vez
        aprobada en la sesión subsecuente será suscrita por el Coordinador y el
        Asistente Técnico para constancia.
      </Text>
      <Text>
        <Bold name={"art41"}>Artículo 41.</Bold> Las resoluciones y acuerdos de
        los Comités Técnicos, se tomarán por mayoría simple de votos de los
        Representantes presentes en la sesión.
      </Text>
      <Text>Los Asistentes Técnicos de cada Comité serán los siguientes:</Text>
      <Tabla>
        <Thead>
          <Tr>
            <Th>Comité Técnico</Th>
            <Th>Asistente Técnico</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Legislación e Inspección y Vigilancia Forestal</Td>
            <Td>
              La persona titular de la Coordinación General Jurídica de la
              Comisión y/o de la Dirección General de Inspección y Vigilancia
              Forestal de la Procuraduría.
            </Td>
          </Tr>
          <Tr>
            <Td>Producción y Productividad Forestal</Td>
            <Td>
              La persona titular de la Coordinación General de Producción y
              Productividad de la Comisión y/o de la Dirección General de
              Gestión Forestal y de Suelos de la Secretaría.
            </Td>
          </Tr>
          <Tr>
            <Td>Protección y Conservación Forestal</Td>
            <Td>
              La persona titular de la Coordinación General de Conservación y
              Restauración de la Comisión.
            </Td>
          </Tr>
          <Tr>
            <Td>Educación, Cultura Forestal y Desarrollo Tecnológico</Td>
            <Td>
              La persona titular de la Unidad de Educación y Desarrollo
              Tecnológica de la Comisión.
            </Td>
          </Tr>
          <Tr>
            <Td>Técnicos Forestales</Td>
            <Td>
              La persona titular de la Coordinación General de Producción y
              Productividad de la Comisión.
            </Td>
          </Tr>
          <Tr>
            <Td>Cambio Climático y Bosques</Td>
            <Td>
              La persona titular de la Unidad de Asuntos Internacionales y
              Fomento Financiero de la Comisión y/o de la Dirección General de
              Política para el Cambio Climático de la Secretaría
            </Td>
          </Tr>
        </Tbody>
      </Tabla>
      <Text>
        Cada Asistente Técnico podrá nombrar un suplente con nivel no inferior a
        Subgerente y en el caso de la Secretaría y la Procuraduría con un nivel
        mínimo de Subdirector.
      </Text>
      <Text>
        {" "}
        <Bold name={"art42"}>Artículo 42.</Bold> Cuando algún asunto encomendado
        a un Comité Técnico tenga estrecha relación con los asuntos de la
        competencia de otro u otros Comités, el Coordinador del Comité
        correspondiente propondrá al Asistente Técnico realizar sesiones de
        trabajo conjuntas, informando a la Secretaría Técnica.
      </Text>
      <Text>
        {" "}
        En el caso de sesiones conjuntas, la coordinación recaerá en el
        Coordinador del Comité Técnico al cual el Consejo encomendó la atención
        del tema que se trate.
      </Text>
      <Text>
        <Bold name={"art43"}>Artículo 43.</Bold> Los Asistentes Técnicos de los
        Comités tendrán las funciones y obligaciones siguientes, las cuáles
        desarrollarán con el apoyo del Secretariado Técnico:
      </Text>
      <List>
        <ListItem>
          {" "}
          Asistir y participar en las sesiones del Comité Técnico que le
          corresponda{" "}
        </ListItem>
        <ListItem>
          {" "}
          Fungir como el vínculo institucional entre el Comité y las
          dependencias federales y estatales{" "}
        </ListItem>
        <ListItem>
          {" "}
          Proveer de información suficiente y actualizada a su Comité{" "}
        </ListItem>
        <ListItem>
          {" "}
          Colaborar en la organización y mantener actualizado el archivo,
          expedientes y el directorio de los Comités Técnicos, así como de los
          Grupos de Trabajo que se constituyan{" "}
        </ListItem>
        <ListItem>
          {" "}
          Convocar a petición del Coordinador del Comité a sesiones ordinarias y
          extraordinarias de los Comités Técnicos{" "}
        </ListItem>
        <ListItem>
          {" "}
          Preparar el orden del día, llevar el registro de asistencia y levantar
          las actas de las sesiones de los Comités Técnicos{" "}
        </ListItem>
        <ListItem>
          {" "}
          Elaborar las actas de acuerdos de las sesiones del Comité{" "}
        </ListItem>
        <ListItem>
          {" "}
          Organizar las sesiones y auxiliar a los Coordinadores en el desarrollo
          de las mismas{" "}
        </ListItem>
        <ListItem>
          {" "}
          Apoyar y dar seguimiento a los acuerdos de los Comités Técnicos{" "}
        </ListItem>
        <ListItem>
          {" "}
          Informar al Secretario Técnico del Consejo sobre el avance de acuerdos
          y de todos los asuntos de los Comités Técnicos{" "}
        </ListItem>
        <ListItem>
          {" "}
          Coordinar el trabajo de los Comités Técnicos y de los Grupos de
          Trabajo{" "}
        </ListItem>
        <ListItem>
          {" "}
          Establecer mecanismos de comunicación con los Consejeros y los Comités
          Técnicos{" "}
        </ListItem>
        <ListItem>
          {" "}
          Colaborar en la preparación del informe anual de actividades de la
          Secretaría Técnica sobre el desempeño de los Comités Técnicos{" "}
        </ListItem>
        <ListItem>
          {" "}
          Favorecer y apoyar la comunicación entre los Representantes de cada
          Representación y sus reuniones internas para el logro de consensos y
          opiniones que coadyuven a su buen desempeño y{" "}
        </ListItem>
        <ListItem>
          {" "}
          Las demás que le sean asignadas por el Secretario Técnico del Consejo
          que sean necesarias para el cumplimiento del propósito de los Comités
          Técnicos.{" "}
        </ListItem>
      </List>
      <Subtitle name={"transitorios"}>Transitorios</Subtitle>
      <Text>
        <Bold name={"primero"}>PRIMERO.</Bold> El presente Reglamento fue
        aprobado en la 51º Sesión del Consejo Nacional Forestal celebrada el 25
        de noviembre de 2019 entrando en vigor al día siguiente de su
        aprobación.
      </Text>
      <Text>
        <Bold name={"segundo"}>SEGUNDO.</Bold> Se abroga el Reglamento del
        Consejo Nacional Forestal emitido el 30 de junio de 2015.
      </Text>
      <Text>
        {" "}
        <Bold name="tercero">TERCERO.</Bold> Los Consejeros y Representantes
        ante los Comités Técnicos y Grupos de Trabajo continuarán en funciones
        hasta en tanto se aprueben la renovación de la Membresía del Consejo y
        sean designados los nuevos Consejeros, Representantes y Coordinadores.
      </Text>
      <Text style={{ textAlign: "center" }}>
        Ciudad de México a 25 de noviembre de 2019
      </Text>
      <p>Firmado al calce por el Presidente Suplente y Secretario Técnico del
        Consejo Nacional Forestal</p>
      <p>Fin del documento</p>
      <Reference href={'https://www.gob.mx/cms/uploads/attachment/file/539058/Reglamento_del_Consejo_Nacional_Forestal_CONAF.pdf'}>Descargar Reglamento del Consejo Nacional Forestal</Reference>
    </>
  );
};

export default Regulation;
