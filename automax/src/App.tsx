import { GlobalStyle } from "./style/globalStyles";
import Routes from "./routes";
import ModalProvider from "./context/modalContext";
import { AnnounceProvider } from "./context/announceContext";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AnnounceProvider>
        <ModalProvider>
          <Routes />
        </ModalProvider>
      </AnnounceProvider>
    </>
  );
};

export default App;
