import { GlobalStyle } from "./style/globalStyles";
import Routes from "./routes";
import ModalProvider from "./context/modalContext";
import { AnnounceProvider } from "./context/announceContext";
import { UserProvider } from "./context/userContext";
import ModalFormUpdateUser from "./components/Modal/FormUpdateUser";
import ModalFormUpdateAdrress from "./components/Modal/FormUpdateAdress";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <UserProvider>
        <AnnounceProvider>
          <ModalProvider>
            <Routes />
            <ModalFormUpdateUser />
            <ModalFormUpdateAdrress />
          </ModalProvider>
        </AnnounceProvider>
      </UserProvider>
    </>
  );
};

export default App;
