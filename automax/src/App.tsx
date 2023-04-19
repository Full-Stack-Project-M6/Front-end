import { GlobalStyle } from "./style/globalStyles";
import Routes from "./routes";
import ModalProvider from "./context/modalContext";


const App = () => {
  return (
    <>
      <GlobalStyle />
      
      <ModalProvider>
        <Routes />
      </ModalProvider>
    </>
  );
};

export default App;
