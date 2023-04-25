import { GlobalStyle } from "./style/globalStyles";
import Routes from "./routes";
import ModalProvider from "./context/modalContext";
import { AnnounceProvider } from "./context/announceContext";
import { UserProvider } from "./context/userContext";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <UserProvider>
        <AnnounceProvider>
          <ModalProvider>
            <Routes />
          </ModalProvider>
        </AnnounceProvider>
      </UserProvider>
    </>
  );
};

export default App;
