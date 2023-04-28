import { createContext, useEffect, useState } from "react";
import { IRecoverUser, IRecoverPassword, iProviderProps, iUserContext } from "../interfaces";
import { useNavigate } from "react-router-dom";
import { instance } from "../services/apiKenzie";
import { IUser, IUserLogin, IUserRequest } from "../interfaces/user";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [listAnnounceUser, setListAnnounceUser] = useState<any>([]);
  const [userRecovering, setUserRecovering] = useState<IUser | null>(null);
  const [successRecover, setSuccessRecover] = useState(false)

  const navigate = useNavigate();

  useEffect(() => {
    async function userLoad() {
      const token = localStorage.getItem("@MotorsToken");
      const userID = localStorage.getItem("@UserId");
      if (token) {
        try {
          const { data } = await instance.get(`/users/${userID}`);
          navigate("/", { replace: true });
          setUser(data);
        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false);
    }
    userLoad();
  }, [navigate]);

  const userRegister = async (data: IUserRequest) => {
    const {city, CEP, street, complement, number, state, ...user } = data
    const address = {city, CEP, street, complement, number, state}
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

  const userLogin = async (data: IUserLogin) => {
    try {
      const response = await instance.post("/login", data);
      setUser(response.data.user);
      localStorage.setItem("@User_id", response.data.user.id);
      localStorage.setItem("@MotorsToken", response.data.token);

      localStorage.setItem("@UserId", response.data.user.id);
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@MotorsToken");
    localStorage.removeItem("@UserId");
    navigate("/login");
  };

  const renderListAnnounceUser = async () => {
    const id_user = localStorage.getItem("@User_id");
    const { data } = await instance.get(`/announce/all/${id_user}`);

    setListAnnounceUser(data);
  };

  const recoverUser = async (email: IRecoverUser ) => {
    setUserRecovering(null)
    try {
     const { data }  = await instance.get(`/users/recover_user/${email.email}`)
      setUserRecovering(data)
    } catch (error) {
      setUserRecovering(null)
      console.log(error);
    }
  }

  const recoverPassword = async (password: IRecoverPassword) => {
    try {
      const newPassword = {password: password.password}
      await instance.patch(`/users/recover_password/${userRecovering?.id}`, newPassword)
      setSuccessRecover(true)
    } catch (error) {
      console.log(error);
    }
  }

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
        recoverUser,
        recoverPassword,
        successRecover,
        userRecovering
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
