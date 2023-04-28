import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../schema";
import { NavBar } from "../../components/NavBar";
import Input from "../../components/Inputs/Input";
import TextArea from "../../components/Inputs/TextArea";
import { UserContext } from "../../context/userContext";
import { useContext, useState } from "react";
import { StyledBackgroundRegister, StyledFormRegister } from "./style";
import { Footer } from "../../components/footer";
import { StyledButton } from "../../components/Button/styles";
import { IUserRequest } from "../../interfaces/user";



export const RegisterPage = () => {
    
    const { userRegister, loading } = useContext(UserContext)
    const [classNameActive, setClassNameActive] = useState("brand1")
    const [classNameDeactive, setClassNameDeactive] = useState("outline1")  

    
    const {
        register,
        unregister,
        handleSubmit,
        formState: { errors, isValid },
      } = useForm<IUserRequest>({
        resolver: yupResolver(registerSchema),
    }); 

    return (
        <>
            <NavBar />
            <StyledBackgroundRegister>
                <StyledFormRegister onSubmit={handleSubmit(userRegister)} >
                    <h1>Cadastro</h1>
                    <p>Informações pessoais</p>
                    <label htmlFor="name">Nome</label>
                    <Input register={register} name="name" placeholder="Ex: Samuel Leão" />
                    {errors.name && (<p>{errors.name.message}</p>)}

                    <label>Email</label>
                    <Input register={register} name="email" placeholder="Ex: samuel@kenzie.com" />
                    {errors.email && (<p>{errors.email.message}</p>)}

                    <label>CPF</label>
                    <Input register={register} name="cpf" placeholder="000.000.000-00" />
                    {errors.cpf && (<p>{errors.cpf.message}</p>)}

                    <label>Celular</label>
                    <Input register={register} name="cellphone" placeholder="(DDD) 90000-0000" />
                    {errors.cellphone && (<p>{errors.cellphone.message}</p>)}

                    <label>Data de nascimento</label>
                    <Input register={register} name="date_birth" placeholder="00/00/0000" />
                    {errors.date_birth && (<p>{errors.date_birth.message}</p>)}

                    <label>Descrição</label>
                    <TextArea register={register} name="description" placeholder="Digitar descrição"/>
                    {errors.cellphone && (<p>{errors.cellphone.message}</p>)}

                    <p>Informações de endereço</p>
                    <label>CEP</label>
                    <Input register={register} name="cep" placeholder="00000.000" />
                    {errors.cep && (<p>{errors.cep.message}</p>)}

                    <div className="divContain">
                        <div>
                            <label>Cidade</label>
                            <Input register={register} name="city" placeholder="Digitar cidade" />
                            {errors.city && (<p>{errors.city.message}</p>)}
                        </div>
                        <div>
                            <label>Estado</label>
                            <Input register={register} name="estate" placeholder="Digitar estado" />
                            {errors.estate && (<p>{errors.estate.message}</p>)}
                        </div>
                    </div>
                    <label>Rua</label>
                    <Input register={register} name="street" placeholder="Digitar rua" />
                    {errors.street && (<p>{errors.street.message}</p>)}

                    <div className="divContain">
                        <div>
                            <label>Número</label>
                            <Input register={register} name="number" placeholder="Digitar número" />
                            {errors.number && (<p>{errors.number.message}</p>)}
                        </div>
                        <div>
                            <label>Completo</label>
                            <Input register={register} name="complement" placeholder="Ex: apart 307" />
                            {errors.complement && (<p>{errors.complement.message}</p>)}
                        </div>
                    </div>
                    <p>Tipo de conta</p>
                    <div className="divContain">
                        <StyledButton 
                        type="button" 
                        className={classNameActive}
                        onClick={() => {
                            setClassNameActive(() => "brand1")
                            setClassNameDeactive(() => "outline1")
                            unregister("account_type", {})
                            register("account_type", {value: true})
                        }}
                        >
                        Comprador</StyledButton>

                        <StyledButton 
                        type="button" 
                        className={classNameDeactive}
                        onClick={() => {
                            setClassNameActive(() => "outline1")
                            setClassNameDeactive(() => "brand1")
                            unregister("account_type", {})
                            register("account_type", {value: false})
                        }}
                        >Anunciante</StyledButton>

                    </div>
                    <label>Senha</label>
                    <Input register={register} name="password" placeholder="Digitar senha" />
                    {errors.password && (<p>{errors.password.message}</p>)}

                    <label>Confirmar senha</label>
                    <Input register={register} name="confirmPassword" placeholder="Digitar senha" />

                    <StyledButton type="submit" className="brand1">
                        Finalizar cadastro
                    </StyledButton>
                </StyledFormRegister>
            </StyledBackgroundRegister>
            <Footer />
        </>
    )
}