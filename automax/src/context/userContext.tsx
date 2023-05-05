import { createContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { instance } from "../services/apiKenzie";
import {
  IUser,
  IUserLogin,
  IUserRequest,
  IUserUpdate,
  ISendReset,
  IResetPassword,
  IProviderProps,
  IUserContext
} from "../interfaces/user";
import { IAddress } from "../interfaces/address";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IProviderProps) => {
  const [user, setUser] = useState<IUser | undefined>();
  const [loading, setLoading] = useState(true);
  const [userRecoveringToken, setUserRecoveringToken] = useState<string | undefined>(undefined);
  const [successRecover, setSuccessRecover] = useState(false);
  const [successReset, setSuccessReset] = useState(false);
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
    const { city, cep, street, complement, number, estate, ...user } = data;
    const address = { city, cep, street, complement, number, estate };
    const userDataRegister = { ...user, address };
    try {
      await instance.post("/users", userDataRegister);
      setLoading(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      userLogin(data);
    }
  };

  const getUser = async (idUser: string) => {
    try {
      const { data } = await instance.get(`/users/${idUser}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const userLogin = async (dataForm: IUserLogin) => {
    try {
      const { data } = await instance.post("/login", dataForm);

      instance.defaults.headers.common.authorization = `Bearer ${data.token}`;

      setUser(data.user);
      localStorage.setItem("@User_id", data.user.id);
      localStorage.setItem("@MotorsToken", data.token);
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@MotorsToken");
    localStorage.removeItem("@User_id");
    setUser(undefined);
    navigate("/login");
  };

  const updateUser = async (dateForm: IUserUpdate) => {
    const { data } = await instance.patch(`/users/${id_user}`, dateForm);

    setUser(data);
  };

  const updateAddress = async (dateForm: IAddress) => {
    const id_address = user?.address.id;

    await instance.patch(`/address/${id_address}`, dateForm);
  };

  const sendResetToken = async (email: ISendReset) => {
    try {
      await instance.post("/users/sendReset", email);

      setSuccessRecover(true);
    } catch (error) {
      console.log(error);
    }
  };

  const resetPassword = async (password: IResetPassword) => {
    try {
      const newPassword = { password: password.password };

      await instance.patch(
        `/users/reset_password/${userRecoveringToken}`,
        newPassword
      );
      console.log("senha alterada com sucesso!");
      setUserRecoveringToken(undefined);
      setSuccessReset(true)
    } catch (error) {
      console.log(error);
    }finally {
      setTimeout(() => {
        navigate("/login")
        setSuccessReset(false)
      }, 5000)
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
        sendResetToken,
        resetPassword,
        setUserRecoveringToken,
        successRecover,
        userRecoveringToken,
        setSuccessRecover,
        updateAddress,
        successReset
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
