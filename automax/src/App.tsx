
import { GlobalStyle } from "./style/globalStyles";
import Routes from "./routes";
import { Home } from "./pages/Home";

const App = () => {
  return (
    <>
      <Home />
      <GlobalStyle />
      <Routes />
    </>
  );
};

export default App;
