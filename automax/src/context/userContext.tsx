import { createContext, useEffect, useState } from "react";
import {
  iProviderProps,
  iUser,
  iUserContext,
  iUserLogin,
  iUserRequest,
} from "../interfaces";
import { useNavigate } from "react-router-dom";
import { instance } from "../services/apiKenzie";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iProviderProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function userLoad() {
      const token = localStorage.getItem("@KenzieToken");
      if (token) {
        try {
          const { data } = await instance.get("/profile");
          navigate("/Deashboard", { replace: true });
          setUser(data);
        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false);
    }
    userLoad();
  }, []);

  const userRegister = async (data: iUserRequest) => {
    try {
      await instance.post("/users", data);
      setLoading(true);
    //   toast.success("Usuário cadastrado com sucesso");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      userLogin(data);
    }
  };

  const userLogin = async (data: iUserLogin) => {
    try {
      const response = await instance.post("/sessions", data);
      setUser(response.data.user);
      localStorage.setItem("@KenzieToken", response.data.token);
      navigate("/Deashboard", { replace: true });
    //   toast.success("Login efetuado com sucesso");
    } catch (error) {
      console.log(error);
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@KenzieToken");
    navigate("/");
  };
  return (
    <UserContext.Provider
      value={{
        userRegister,
        userLogin,
        user,
        setUser,
        loading,
        userLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
