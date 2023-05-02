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
import { IAddress } from "../interfaces/address";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IProviderProps) => {
  const [user, setUser] = useState<IUser | undefined>();
  const [loading, setLoading] = useState(true);
  const [userRecovering, setUserRecovering] = useState<IUser | null>(null);
  const [successRecover, setSuccessRecover] = useState(false);
  const id_user = localStorage.getItem("@User_id");
  const token = localStorage.getItem("@MotorsToken");

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

      instance.defaults.headers.common.authorization = `Bearer ${token}`;

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
        updateAddress,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
