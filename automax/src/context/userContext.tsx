import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { instance } from "../services/apiKenzie";
import {
  IUser,
  IUserLogin,
  IUserRequest,
  IUserUpdate,
  IRecoverUser,
  IRecoverPassword,
  IProviderProps,
  IUserContext,
} from "../interfaces/user";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IProviderProps) => {
  const [user, setUser] = useState<IUser | undefined>();
  const [loading, setLoading] = useState(true);
  const [userRecovering, setUserRecovering] = useState<IUser | null>(null);
  const [successRecover, setSuccessRecover] = useState(false);
  const id_user = localStorage.getItem("@User_id");

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

  const userLogin = async (data: IUserLogin) => {
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
    navigate("/login");
  };

  const updateUser = async (dateForm: IUserUpdate) => {
    const { data } = await instance.patch(`/users/${id_user}`, dateForm);

    setUser(data);
  };

  const recoverUser = async (email: IRecoverUser) => {
    setUserRecovering(null);
    try {
      const { data } = await instance.get(`/users/recover_user/${email.email}`);
      setUserRecovering(data);
    } catch (error) {
      setUserRecovering(null);
      console.log(error);
    }
  };

  const recoverPassword = async (password: IRecoverPassword) => {
    try {
      const newPassword = { password: password.password };
      await instance.patch(
        `/users/recover_password/${userRecovering?.id}`,
        newPassword
      );
      setSuccessRecover(true);
    } catch (error) {
      console.log(error);
    }
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
        updateUser,
        recoverUser,
        recoverPassword,
        successRecover,
        userRecovering,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
