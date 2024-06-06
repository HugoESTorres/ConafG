import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  --red: #9F2241;
  --dark-red: #691C32;
  --green: #235B4E;
  --dark-green: #10312B;
  --yellow: #DDC9A3;
  --dark-yellow: #BC955C;
  --grey: #98989A;
  --dark-grey: #6F7271;
  --wine: rgb(78, 35, 46);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }

  body {
    font-family: Montserrat, Helvetica, Sans-Serif;
    line-height: 1.428;
  }

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: inherit;
  font-weight: 600;
  line-height: 1.1;
  color: inherit;
  margin-top: 20px;
  margin-bottom: 12.5px;
}

h1 {
    font-size: 22px;
    font-weight: 600;

    @media screen and (min-width: 767px) and (max-width: 1024px) {
      font-size: 28px;
    }

    @media screen and (min-width: 1024px) {
      font-size: 32px;
    }
}

h2 {
    font-size: 20px;
    font-weight: 600;

    @media screen and (min-width: 767px) and (max-width: 1024px) {
      font-size: 22px;
    }

    @media screen and (min-width: 1024px) {
      font-size: 28px;
    }
}

h3 {
    font-size: 16px;
    font-weight: 600;

    @media screen and (min-width: 767px) and (max-width: 1024px) {
      font-size: 18px;
    }

    @media screen and (min-width: 1024px) {
      font-size: 24px;
    }
}

h4 {
    font-size: 14px;
    font-weight: 600;

    @media screen and (min-width: 767px) and (max-width: 1024px) {
      font-size: 16px;
    }

    @media screen and (min-width: 1024px) {
      font-size: 22px;
    }

h5 {
    font-size: 12;
    font-weight: 600;

    @media screen and (min-width: 767px) and (max-width: 1024px) {
      font-size: 14px;
    }

    @media screen and (min-width: 1024px) {
      font-size: 20px;
    }
}

  p {
    font-size: 10px;
    text-align: justify;
    margin: 5px 0;

    @media screen and (min-width: 767px) and (max-width: 1024px) {
      font-size: 14px;
      margin: 15px 0;
    }

    @media screen and (min-width: 1024px) {
      font-size: 18px;
      margin: 15px 0;
    }
  }

  hr {
    box-sizing: content-box;
    height: 0;
    border: 0;
    margin: 40px 0;
  }

  ul ol > li {
    font-size: 10px;
    text-align: justify;
    margin: 5px 0;

    @media screen and (min-width: 767px) and (max-width: 1024px) {
      font-size: 14px;
      margin: 15px 0;
    }

    @media screen and (min-width: 1024px) {
      font-size: 16px;
      margin: 15px 0;
    }  }
`;

export default GlobalStyle;
