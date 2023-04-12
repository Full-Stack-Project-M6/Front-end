
import { GlobalStyle } from "./style/globalStyles";
import Routes from "./routes";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/footer";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Footer />
      <Routes />
    </>
  );
};

export default App;
