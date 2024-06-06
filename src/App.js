import GlobalStyle from "./globalStyles";
import NavBar from "./components/NavBar.js";
import Container from "./components/Container.js";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import News from "./components/News";
import ScrollButton from "./components/ScrollButton";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Banner />
      <News />
      <Container>
        <Outlet />
      </Container>
      <Footer />
      <ScrollButton />
    </>
  );
};

export default App;
