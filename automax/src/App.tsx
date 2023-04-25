import { GlobalStyle } from "./style/globalStyles";
import Routes from "./routes";
import ModalProvider  from "./context/modalContext"
import { UserProvider } from "./context/userContext";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <UserProvider>
        <ModalProvider>
          <Routes />
        </ModalProvider>
      </UserProvider>
      
    </>
  );
};

export default App;
