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
  IUserContext,
} from "../interfaces/user";
import { toast } from "react-toastify"
import { IAddress } from "../interfaces/address";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IProviderProps) => {
  const [user, setUser] = useState<IUser | undefined>();
  const [loading, setLoading] = useState(true);
  const [userRecoveringToken, setUserRecoveringToken] = useState<
    string | undefined
  >(undefined);
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
  }, [{}]);

  const userRegister = async (data: IUserRequest) => {
    const { city, cep, street, complement, number, estate, ...user } = data;
    const address = { city, cep, street, complement, number, estate };
    const userDataRegister = { ...user, address };
    try {
      await instance.post("/users", userDataRegister);
      toast.success("Conta criada com sucesso!")
      setLoading(true);
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message)
    } finally {
      setLoading(false);
      userLogin(data);
    }
  };

  const userLogin = async (dataForm: IUserLogin) => {
    try {
      const { data } = await instance.post("/login", dataForm);

      instance.defaults.headers.common.authorization = `Bearer ${data.token}`;

      localStorage.setItem("@User_id", data.user.id);
      localStorage.setItem("@MotorsToken", data.token);
      toast.success("Login feito com sucesso")
      setTimeout(() => {
        setUser(data.user);
        navigate("/", { replace: true });
      }, 1000);
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message)
    }
  };

  const userLogout = () => {
    setUser(undefined);
    localStorage.removeItem("@User_id");
    localStorage.removeItem("@MotorsToken");
    navigate("/login");
    window.location.reload();
  };

  const updateUser = async (dateForm: IUserUpdate) => {
    try {
      const { data } = await instance.patch(`/users/${id_user}`, dateForm);
      toast.success("Atualização feita com sucesso!")
      setUser(data);
    } catch (error: any) {
      toast.error(error.response.data.message)
      console.log(error);
    }
  };

  const updateAddress = async (dateForm: IAddress) => {
    const id_address = user?.address.id;
    try {
      await instance.patch(`/address/${id_address}`, dateForm);
      toast.success("Atualização feita com sucesso!")
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message)
    }
    
  };

  const sendResetToken = async (email: ISendReset) => {
    try {
      await instance.post("/users/sendReset", email);
      toast.success("Email enviado.")

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
      toast.success("senha alterada com sucesso!");
      setUserRecoveringToken(undefined);
      setSuccessReset(true);
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message)
    } finally {
      setTimeout(() => {
        navigate("/login");
        setSuccessReset(false);
      }, 5000);
    }
  };

  const deleteUser = async (idUser: string | undefined) => {
    try {
      await instance.delete(`/users/${idUser}`);
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message)
    }
    localStorage.removeItem("@User_id");
    localStorage.removeItem("@MotorsToken");
    setUser(undefined);
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
        updateUser,
        sendResetToken,
        resetPassword,
        setUserRecoveringToken,
        successRecover,
        userRecoveringToken,
        setSuccessRecover,
        updateAddress,
        successReset,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
