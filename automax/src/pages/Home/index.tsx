import { NavBar } from "../../components/NavBar"
import { StyledAnnounceList, StyledBannerDiv, StyledFilterDiv, StyledFiltersAside } from "./style"
import blacklogo from '../../assets/motorsShop.png'
import AdCard from "../../components/Cards/AdCard"
import { Footer } from "../../components/footer"
import Button from "../../components/Button"
import { useContext } from "react"
import { UserContext } from "../../context/userContext"

export const Home = () => {

    return (
        <>
            <NavBar />
            <StyledBannerDiv>
                <img src={blacklogo} alt="logo" />
                <p>
                    A melhor plataforma de anúncios de carros do país
                </p>
            </StyledBannerDiv>
            <StyledAnnounceList>
                <StyledFiltersAside>
                    <div>
                        <h2>Marca</h2>
                        <a href="">Geberal Motors</a>
                        <a href="">Fiat</a>
                        <a href="">Honda</a>
                        <a href="">Ford</a>
                        <a href="">Porsche</a>
                        <a href="">BMW</a>
                        <a href="">Volkswagen</a>
                        <a href="">Mercedez Benz</a>
                        <a href="">Audi</a>
                    </div>
                    <div>
                        <h2>Modelo</h2>
                        <a href="">Hatch</a>
                        <a href="">Sedan</a>
                        <a href="">SUV</a>
                        <a href="">Caminhonete</a>
                        <a href="">Coupé</a>
                        <a href="">Conversível</a>
                    </div>
                    <div>
                        <h2>Cor</h2>
                        <a href="">Azul</a>
                        <a href="">Branco</a>
                        <a href="">Cinza</a>
                        <a href="">Prata</a>
                        <a href="">Preto</a>
                        <a href="">Vermelho</a>
                    </div>
                    <div>
                        <h2>Ano</h2>
                        <a href="">2023</a>
                        <a href="">2022</a>
                        <a href="">2021</a>
                        <a href="">2020</a>
                        <a href="">2019</a>
                        <a href="">2018</a>
                        <a href="">2017</a>
                    </div>
                    <div>
                        <h2>Combustível</h2>
                        <a href="">Diesel</a>
                        <a href="">Etanol</a>
                        <a href="">Gasolina</a>
                        <a href="">Flex</a>
                        <a href="">Elétrico</a>
                    </div>
                    <div className="km">
                        <h2>Km</h2>
                        <div>
                            <Button className="negativeHover">
                                {"Mínimo"}
                            </Button>
                            <Button className="negativeHover">
                                {"Máximo"}
                            </Button>
                        </div>
                    </div>
                    <div className="km">
                        <h2>Preço</h2>
                        <div>
                            <Button className="negativeHover">
                                {"Mínimo"}
                            </Button>
                            <Button className="negativeHover">
                                {"Máximo"}
                            </Button>
                        </div>
                    </div>
                </StyledFiltersAside>
                <ul>
                    <AdCard />
                    <AdCard />
                    <AdCard />
                </ul>
            </StyledAnnounceList>
            <StyledFilterDiv>
                <Button className="brand1">
                    {"Filtros"}
                </Button>
                <div>
                    <span>1 de 45</span>
                    <Button className="brandOpacity">
                        {"Seguinte >"}
                    </Button>
                </div>
            </StyledFilterDiv>
            <Footer />
        </>
    )
}
