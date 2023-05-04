import { GlobalStyle } from "./style/globalStyles";
import Routes from "./routes";
import ModalProvider from "./context/modalContext";
import { AnnounceProvider } from "./context/announceContext";
import { UserProvider } from "./context/userContext";
import ModalFormUpdateUser from "./components/Modal/FormUpdateUser";
import ModalFormUpdateAdrress from "./components/Modal/FormUpdateAdress";
import ModalFormUpdateAnnounce from "./components/Modal/FormUpdateAnnounce";
import ModalDeleteAnnounce from "./components/Modal/DeleteAnnounce";
import { CommentsProvider } from "./context/commentsContext";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <UserProvider>
        <AnnounceProvider>
          <CommentsProvider>
            <ModalProvider>
              <Routes />
              <ModalFormUpdateUser />
              <ModalFormUpdateAdrress />
              <ModalFormUpdateAnnounce />
              <ModalDeleteAnnounce />
            </ModalProvider>
          </CommentsProvider>
        </AnnounceProvider>
      </UserProvider>
    </>
  );
};

export default App;
