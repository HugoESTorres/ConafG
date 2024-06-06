import styled from 'styled-components'
import Marquee from 'react-fast-marquee'

const Container = styled(Marquee)`
  margin: 10px 0;
  border-bottom: 1px solid var(--grey);
  border-top: 1px solid var(--grey);
`

const Tag = styled.div`
  background-color: var(--wine);
  color: #fff;
  font-weight: 600;
  font-size: 8px;
  padding: 2px 5px;
  border-radius: 4px;
`
const Separador = styled.p`
  color: var(--wine);
  font-weight: 600;
  padding: 0 10px;
`

const Anchor = styled.a`
  padding: 5px 20px;
  margin: 0 5px;
  text-decoration: none;
  color: var(--green);
  line-weight: 1.5;
  font-weight: 600;

  &:hover {
    text-decoration: var(--wine) underline;
  }
`

const News = () => {
  return (
    <>
      <Container speed={50} pauseOnHover={true} gradientWidth={5}>
        <Tag>NUEVO!</Tag>
        <Anchor
          href={'https://conaf.cnf.gob.mx/sesiones'}
          rel={'noopener'}
          target={'_blank'}
        >
          Próxima Sesión del Consejo Nacional Forestal: 22 de febrero de 2024
        </Anchor>
        <Separador>|</Separador>
        <Anchor
          href={'http://www.conafor.gob.mx/transparencia/gobierno-abierto.html'}
          rel={'noopener'}
          target={'_blank'}
        >
          Conoce la evaluación al Consejo Nacional Forestal en el marco del
          Compromiso Incidencia Ciudadana para el Desarrollo Rural Sustentable,
          de la Alianza para el Gobierno Abierto.
        </Anchor>
        <Separador>|</Separador>
        <Anchor
          href={'https://www.diputados.gob.mx/LeyesBiblio/ref/lgdfs.htm'}
          rel={'noopener'}
          target={'_blank'}
        >
          Conoce las últimas reformas a la Ley General de Desarrollo Forestal
          Sustentable
        </Anchor>
        <Separador>|</Separador>
        <Anchor
          href={'../documents/programa.pdf'}
          rel={'noopener'}
          target={'_blank'}
        >
          Consulta el Programa de Actividades 2024 del Consejo Nacional Forestal
        </Anchor>
        <Separador>|</Separador>
      </Container>
    </>
  )
}

export default News
