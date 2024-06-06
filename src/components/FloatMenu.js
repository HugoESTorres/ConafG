import styled from "styled-components";
import { Link } from "react-scroll";

const data = [
  {
    capitulo: {
      path: "cap1",
      name: "Capítulo I",
    },
    articles: [
      {
        path: "art1",
        name: "Art 1",
      },
      {
        path: "art2",
        name: "Art 2",
      },
      {
        path: "art3",
        name: "Art 3",
      },
    ],
  },
  {
    capitulo: {
      path: "cap2",
      name: "Capitulo II",
    },
    articles: [
      {
        path: "art4",
        name: "Art 4",
      },
    ],
  },
  {
    capitulo: {
      path: "cap3",
      name: "Capitulo III",
    },
    articles: [
      {
        path: "art5",
        name: "Art 5",
      },
      {
        path: "art6",
        name: "Art 6",
      },
      {
        path: "art7",
        name: "Art 7",
      },
      {
        path: "art8",
        name: "Art 8",
      },
      {
        path: "art9",
        name: "Art 9",
      },
      {
        path: "art10",
        name: "Art 10",
      },
      {
        path: "art11",
        name: "Art 11",
      },
      {
        path: "art12",
        name: "Art 12",
      },
    ],
  },
  {
    capitulo: {
      path: "cap4",
      name: "Capitulo IV",
    },
    articles: [
      {
        path: "art13",
        name: "Art 13",
      },
      {
        path: "art14",
        name: "Art 14",
      },
      {
        path: "art15",
        name: "Art 15",
      },
      {
        path: "art16",
        name: "Art 16",
      },
      {
        path: "art17",
        name: "Art 17",
      },
      {
        path: "art18",
        name: "Art 18",
      },
    ],
  },
  {
    capitulo: {
      path: "cap5",
      name: "Capítulo V",
    },
    articles: [
      {
        path: "art19",
        name: "Art 19",
      },
      {
        path: "art20",
        name: "Art 20",
      },
      {
        path: "art21",
        name: "Art 21",
      },
      {
        path: "art22",
        name: "Art 22",
      },
      {
        path: "art23",
        name: "Art 23",
      },
      {
        path: "art24",
        name: "Art 24",
      },
      {
        path: "art25",
        name: "Art 25",
      },
    ],
  },
  {
    capitulo: {
      path: "cap6",
      name: "Capítulo VI",
    },
    articles: [
      {
        path: "art26",
        name: "Art 26",
      },
      {
        path: "art27",
        name: "Art 27",
      },
      {
        path: "art28",
        name: "Art 28",
      },
      {
        path: "art29",
        name: "Art 29",
      },
      {
        path: "art30",
        name: "Art 30",
      },
      {
        path: "art31",
        name: "Art 31",
      },
      {
        path: "art32",
        name: "Art 32",
      },
      {
        path: "art33",
        name: "Art 33",
      },
      {
        path: "art34",
        name: "Art 34",
      },
      {
        path: "art35",
        name: "Art 35",
      },
      {
        path: "art36",
        name: "Art 36",
      },
      {
        path: "art37",
        name: "Art 37",
      },
      {
        path: "art38",
        name: "Art 38",
      },
      {
        path: "art39",
        name: "Art 39",
      },
      {
        path: "art40",
        name: "Art 40",
      },
      {
        path: "art41",
        name: "Art 41",
      },
      {
        path: "art42",
        name: "Art 42",
      },
      {
        path: "art43",
        name: "Art 43",
      },
    ],
  },
];

const Wrapper = styled.div`
  width: 15%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  position: fixed;
  top: 20%;
  left: 80%;
  border-radius: 4px;
`;

const FloatWrapper = styled.div`
  width: 100%;
  margin: 10px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const FloatTitle = styled(Link)`
  border-bottom: 1px dotted var(--dark-grey);
  font-weight: 600;
  font-size: 16px;
  margin: 10px 0;
  cursor: pointer;
  display: block;

  &:hover {
    color: var(--dark-yellow);
  }
  @media screen and (min-width: 1701px) and (max-width: 1920px) {
    font-size: 20px;
  }
`;
const FloatLink = styled(Link)`
  font-size: 7px;
  width: 50px;
  text-decoration: none;
  margin: 0;
  display: block;
  cursor: pointer;
  background-color: var(--wine);
  color: #fff;
  padding: 1px 0;
  text-align: center;
  border-radius: 0 10px 0 10px;

  &:hover {
    background-color: var(--dark-yellow);
  }
  @media screen and (min-width: 1701px) and (max-width: 1920px) {
    width: 30px;
    font-size: 8px;
  }
  @media screen and (min-width: 1920px) and (max-width: 2100px) {
    width: 40px;
    font-size: 10px;
  }
`;

const FloatMenu = () => {
  return (
    <>
      <Wrapper>
        {data.map((cap) => (
          <div key={Math.random()}>
            <FloatTitle smooth offset={-50} to={cap.capitulo.path}>
              {cap.capitulo.name}
            </FloatTitle>
            <FloatWrapper >
              {cap.articles.map((art) => (
                <FloatLink
                  smooth
                  offset={-50}
                  to={art.path}
                  key={Math.random()}
                >
                  {art.name}
                </FloatLink>
              ))}
            </FloatWrapper>
          </div>
        ))}
      </Wrapper>
    </>
  );
};

export default FloatMenu;
