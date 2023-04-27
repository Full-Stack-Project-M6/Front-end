import { createContext, useEffect, useState } from "react";
import { iProviderProps, iUser, iUserContext, iUserLogin } from "../interfaces";
import { useNavigate } from "react-router-dom";
import { instance } from "../services/apiKenzie";
import { IUserRequest, IUserUpdate } from "../interfaces/user";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iProviderProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [listAnnounceUser, setListAnnounceUser] = useState<any>([]);
  const id_user = localStorage.getItem("@User_id");
  const [idAnnounce, setIdAnnounce] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    async function userLoad() {
      const token = localStorage.getItem("@MotorsToken");
      if (token) {
        try {
          const { data } = await instance.get(`/users/${id_user}`);
          setUser(data);
        } catch (error) {
          navigate("/", { replace: true });
          console.error(error);
        }
      }
      setLoading(false);
    }
    userLoad();
  }, []);

  const userRegister = async (data: IUserRequest) => {
    const { city, CEP, street, complement, number, state, ...user } = data;
    const address = { city, CEP, street, complement, number, state };
    try {
      await instance.post("/users", user);
      setLoading(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      userLogin(data);
    }
  };

  const userLogin = async (data: iUserLogin) => {
    try {
      const response = await instance.post("/login", data);
      setUser(response.data.user);
      localStorage.setItem("@User_id", response.data.user.id);
      localStorage.setItem("@MotorsToken", response.data.token);
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@MotorsToken");
    localStorage.removeItem("@User_id");
    setUser(null);
    navigate("/login");
  };

  const renderListAnnounceUser = async () => {
    const { data } = await instance.get(`/announce/all/${id_user}`);

    setListAnnounceUser(data);
  };

  const updateUser = async (dateForm: IUserUpdate) => {
    const { data } = await instance.patch(`/users/${id_user}`, dateForm);

    setUser(data);
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
        renderListAnnounceUser,
        listAnnounceUser,
        updateUser,
        idAnnounce,
        setIdAnnounce,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
