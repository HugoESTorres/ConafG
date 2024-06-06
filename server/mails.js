const nodemailer = require("nodemailer");
const mails = require("../src/data/cnfdirectory.json");

const mailers = mails.filter((mail) => mail.correo);

async function main() {
  let transporter = nodemailer.createTransport({
    host: "10.254.253.1",
    port: 2525,
    secure: false,
    pool: true,
    maxConnections: 800,
  });

  const mailSender = mailers.map(async (integrante) => {
    return await transporter.sendMail(
      {
        from: '"Nestor Eduardo Gonzalez De La Cerda" <nestor.gonzalez@conafor.gob.mx>"',
        to: integrante.correo.trim(),
        subject:
          "Encuesta de calidad de los mecanismos de participación en el sector ambiental",
        html: `<table style="margin: 20px 0"> <tbody> <tr> <th scope="col"> <b>Estimado(a) integrante del Consejo Nacional Forestal.</b> </th> </tr></tbody></table><table style="margin: 20px 0"> <tbody> <tr> <td scope="row"> <p> Hago referencia al Programa Sectorial de Medio Ambiente y Recursos Naturales 2020-2024, en específico al objetivo prioritario 5 “Fortalecer la gobernanza ambiental a través de la participación ciudadana libre, efectiva, significativa y corresponsable en las decisiones de política pública, asegurando el acceso a la justicia ambiental con enfoque territorial y de derechos humanos y promoviendo la educación y cultura ambiental”, el cual contempla el <b>Índice de Participación Ciudadana (IPC)</b> en el sector ambiental, como parámetro que integra el indicador de seguimiento para señalado objetivo prioritario. </p></td></tr></tbody></table><table> <tbody> <tr style="margin: 15px 0"> <td scope="row"> <p> A este respecto, el IPC mide la participación ciudadana en el sector ambiental a través de tres variables específicas: </p></td></tr></tbody></table><table> <tbody> <tr> <td scope="row"> <ol> <li> La existencia de protocolos de atención reglamentados en los mecanismos de participación ciudadana del sector ambiental; </li><li>La efectividad de la participación, y</li><li> La satisfacción de la ciudadanía por la calidad de los mecanismos de participación. </li></ol> </td></tr></tbody></table><table style="margin: 15px 0"> <tbody> <tr> <td> <p> Para la tercer variable, se elaboró una encuesta para ser aplicada a los participantes en cada mecanismo, para este caso, la <b >encuesta está dirigida a las personas que integran el Consejo Nacional Forestal </b>señalados en los artículos 152 y 153 de la Ley General de Desarrollo Forestal Sustentable. </p></td></tr></tbody></table><table style="margin: 15px 0"> <tbody> <tr> <td> <p> Por lo anterior, atentamente <b >solicito su apoyo para responder la breve encuesta a través del siguiente enlace</b >, misma que requiere máximo 5 minutos para completarla, con la finalidad de recabar la información para el Índice de Participación Ciudadana (IPC) respecto al 2022, y con ello contribuir a fortalecer los mecanismos de participación ciudadana instituidos en el Sector Medio Ambiente y Recursos Naturales. Cabe señalar que la encuesta estará disponible hasta el viernes 13 de enero de 2023. </p></td></tr></tbody></table><table style="margin: 15px 0"> <tbody> <tr> <td scope="row"> <a href="https://conaf.cnf.gob.mx/encuesta/${integrante.id}" >Da click aquí para ingresar a la encuesta</a > </td></tr></tbody></table><table style="margin: 15px 0"> <tbody> <tr> <td scope="row"> <p> En caso de requerir información adicional respecto al IPC o sobre el llenado de la encuesta, quedo disponible a través del correo electrónico nestor.gonzalez@conafor.gob.mx, o bien, por el teléfono 33 3777 7000 extensión 4930. </p></td></tr></tbody></table><table style="margin: 15px 0"> <tbody> <tr> <td scope="row"><p>Saludos.</p></td></tr></tbody></table><table> <tbody> <tr> <ul style="list-style: none; padding-inline-start: 0;"> <li>Néstor Eduardo González de la Cerda</li><li>Subgerencia de Participación Social</li><li> Comisión Nacional Forestal</li></ul></tr></tbody></table>`,
      },
      async function (err, responseStatus) {
        (await err) ? console.log(err) : console.log(responseStatus.accepted);
        transporter.close();
      }
    );
  });
}

main().catch(console.error);
