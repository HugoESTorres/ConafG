import styled from "styled-components";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Wrapper = styled.div`
  width: 100%;
  background-color: var(--dark-green);
  display: flex;
  justify-content: space-evenly;
  padding-top: 70px;
  gap: 100px;

  @media screen and (max-width: 767px) {
    height: 1000px;
    padding: 30px 60px;
    flex-direction: column;
    gap: 50px;
  }

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    gap: 30px;
    padding: 30px 15px;
  }

  @media screen and (min-width: 1024px) {
    height: 30%;
    padding: 30px 25px;
    gap: 50px;
  }
`;

const Enlaces = styled.div`
  color: white;
  width: 10%;
`;

const List = styled.ul`
  text-decoration: none;
  color: #fff;
  list-style: none;
`;

const ListItem = styled.li`
  color: white;
`;

const Title = styled.h2`
  color: white;
  margin-bottom: 20px;

  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
`;
const Text = styled.p`
  color: white;
  margin-bottom: 15px;

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    font-size: 14px;
  }

  @media (min-width: 997px) {
    font-size: 16px;
  }
`;

const Anchor = styled.a`
  color: #fff;
  text-decoration: none;

  @media screen and (max-width: 767px) {
  }

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    font-size: 12px;
  }

  @media (min-width: 1024px) {
    font-size: 14px;
  }
`;

const Portales = styled.div`
  color: white;

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1024px);
`;

const Contacto = styled.div`
  color: white;

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    font-size: 14px;
  }
`;

const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
`;
const Icon = styled.div`
  margin: 5px;
  & > a {
    text-decoration: none;
    color: white;
    cursor: pointer;
  }
`;

const DeepLine = styled.div`
  background-color: var(--green);
  width: 100%;
  height: 50px;
`;

const Logo = styled.img.attrs({
  src: "https://framework-gb.cdn.gob.mx/landing/img/logoheader.svg",
  alt: 'Logo Gobierno de México'
})`
  width: 200px;
  align-self: start;

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    width: 200px;
  }
  @media screen and (min-width: 1024px) {
    padding: 30px 0 0 20px;
    width: 300px;
  }
`;

const Footer = () => {
  return (
    <>
      <Wrapper>
        <Logo />
        <Enlaces>
          <Title>Enlaces</Title>
          <List>
            <ListItem>
              <Anchor target={"_blank"} href="https://datos.gob.mx/">
                Datos
              </Anchor>
            </ListItem>
            <ListItem>
              <Anchor target={"_blank"} href="https://www.gob.mx/publicaciones">
                Publicaciones
              </Anchor>
            </ListItem>
            <ListItem>
              <Anchor
                target={"_blank"}
                href="http://www.conafor.gob.mx/transparencia/transparencia.html"
              >
                Transparencia
              </Anchor>
            </ListItem>
            <ListItem>
              <Anchor
                target={"_blank"}
                href="https://www.infomex.org.mx/gobiernofederal/home.action"
              >
                PNT
              </Anchor>
            </ListItem>
            <ListItem>
              <Anchor target={"_blank"} href="http://www.inai.org.mx/">
                INAI
              </Anchor>
            </ListItem>
            <ListItem>
              <Anchor
                target={"_blank"}
                href="https://alertadores.funcionpublica.gob.mx/"
              >
                Alerta
              </Anchor>
            </ListItem>
            <ListItem>
              <Anchor
                target={"_blank"}
                href="https://sidec.funcionpublica.gob.mx/#!/"
              >
                Denuncia
              </Anchor>
            </ListItem>
          </List>
        </Enlaces>
        <Portales>
          <Title>¿Qué es gob.mx?</Title>
          <Text>
            Es el portal único de trámites, información y participación
            ciudadana.
          </Text>
          <List>
            <ListItem>
              <Anchor target={"_blank"} href="https://www.gob.mx/accesibilidad">
                Declaración de Accesibilidad
              </Anchor>
            </ListItem>
            <ListItem>
              <Anchor
                target={"_blank"}
                href="https://www.gob.mx/aviso_de_privacidad"
              >
                Aviso de privacidad
              </Anchor>
            </ListItem>
            <ListItem>
              <Anchor
                target={"_blank"}
                href="https://www.gob.mx/privacidadsimplificado"
              >
                Aviso de privacidad simplificado
              </Anchor>
            </ListItem>
            <ListItem>
              <Anchor target={"_blank"} href="https://www.gob.mx/terminos">
                Términos y Condiciones
              </Anchor>
            </ListItem>
            <ListItem>
              <Anchor
                target={"_blank"}
                href="https://www.gob.mx/terminos#medidas-seguridad-informacion"
              >
                Política de seguridad
              </Anchor>
            </ListItem>
            <ListItem>
              <Anchor target={"_blank"} href="http://www.ordenjuridico.gob.mx/">
                Marco jurídico
              </Anchor>
            </ListItem>
            <ListItem>
              <Anchor target={"_blank"} href="https://www.gob.mx/sitemap">
                Mapa de sitio
              </Anchor>
            </ListItem>
          </List>
        </Portales>
        <Contacto>
          <Title>Contacto</Title>
          <p>Dudas e información a:</p> 
          <Anchor href="mailto:conaf.tecnica@conafor.gob.mx">
            conaf.tecnica@conafor.gob.mx
          </Anchor>
          <Text>Siguenos en:</Text>
          <IconWrapper>
            <Icon>
              <Anchor
                href="https://www.facebook.com/CONAFOR.Central/"
                target={"_blank"}
                rel={"noopener"}
              >
                <FaFacebookF size={30} />
              </Anchor>
            </Icon>
            <Icon>
              <Anchor
                href="https://twitter.com/conafor"
                target={"_blank"}
                rel={"noopener"}
              >
                <FaXTwitter size={30} />
              </Anchor>
            </Icon>
            <Icon>
              <Anchor
                href="https://www.youtube.com/user/conaforgob"
                target={"_blank"}
                rel={"noopener"}
              >
                <FaYoutube size={30} />
              </Anchor>
            </Icon>
          </IconWrapper>
        </Contacto>
      </Wrapper>
      <DeepLine />
    </>
  );
};

export default Footer;
