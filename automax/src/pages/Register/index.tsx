import { useForm } from "react-hook-form";
import { iUserRequest } from "../../interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../schema";
import { NavBar } from "../../components/NavBar";
import Input from "../../components/Inputs/Input";
import TextArea from "../../components/Inputs/TextArea";
import Button from "../../components/Button";
import { UserContext } from "../../context/userContext";
import { useContext } from "react";
import { StyledBackgroundRegister, StyledFormRegister } from "./style";
import { Footer } from "../../components/footer";

export const RegisterPage = () => {
    
    const { userRegister, loading } = useContext(UserContext)
    
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
      } = useForm<iUserRequest>({
        resolver: yupResolver(registerSchema),
        mode: "onChange"
    }); 

    return (
        <>
            <NavBar />
            <StyledBackgroundRegister>
                <StyledFormRegister>
                    <h1>Cadastro</h1>
                    <p>Informações pessoais</p>
                    <label>Nome</label>
                    <Input placeholder="Ex: Samuel Leão" />
                    <label>Email</label>
                    <Input placeholder="Ex: samuel@kenzie.com" />
                    <label>CPF</label>
                    <Input placeholder="000.000.000-00" />
                    <label>Celular</label>
                    <Input placeholder="(DDD) 90000-0000" />
                    <label>Data de nascimento</label>
                    <Input placeholder="00/00/0000" />
                    <label>Descrição</label>
                    <TextArea placeholder="Digitar descrição"/>
                    <p>Informações de endereço</p>
                    <label>CEP</label>
                    <Input placeholder="00000.000" />
                    <div className="divContain">
                        <div>
                            <label>Cidade</label>
                            <Input placeholder="Digitar cidade" />
                        </div>
                        <div>
                            <label>Estado</label>
                            <Input placeholder="Digitar estado" />
                        </div>
                    </div>
                    <label>Rua</label>
                    <Input placeholder="Digitar rua" />
                    <div className="divContain">
                        <div>
                            <label>Número</label>
                            <Input placeholder="Digitar número" />
                        </div>
                        <div>
                            <label>Completo</label>
                            <Input placeholder="Ex: apart 307" />
                        </div>
                    </div>
                    <p>Tipo de conta</p>
                    <div className="divContain">
                        <Button className="brand1">{"Comprador"}</Button>
                        <Button className="outline1">{"Anunciante"}</Button>
                    </div>
                    <label>Senha</label>
                    <Input placeholder="Digitar senha" />
                    <label>Confirmar senha</label>
                    <Input placeholder="Digitar senha" />
                    <Button className="brand1">
                        {"Finalizar cadastro"}
                    </Button>
                </StyledFormRegister>
            </StyledBackgroundRegister>
            <Footer />
        </>
    )
}