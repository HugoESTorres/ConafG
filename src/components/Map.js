

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const TitleMap = styled.span`
  font-size: 24px;
  color: var(--wine);
  font-weight: 600;
`;


  const URL = image;
  const MAP = coords;

  const [state, setState] = useState("");
  const [hover, setHover] = useState("Coloque el cursor en el mapa");

  const handlerClick = ({ clave }) => {
    setState(clave);
  };

  const handleMouseEnter = ({ name }) => {
    setHover(name);
  };

<TitleContainer>
          <TitleMap>{hover}</TitleMap>
        </TitleContainer>
        <Container>
          <Link smooth offset={-250} to={"container"}>
            <ImageMapper
              map={MAP}
              src={URL}
              fillColor={"rgba(35,91,78)"}
              strokeColor={"rgba(0,0,0)"}
              onClick={handlerClick}
              onMouseEnter={handleMouseEnter}
              width={1024*0.85}
              imgWidth={663}
            />
          </Link>
        </Container>
