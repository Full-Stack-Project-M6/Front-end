import AnnouncerCard from "../../components/Cards/AnnouncerCard"
import { NavBar } from "../../components/NavBar"
import { Footer } from "../../components/footer"
import { StyledShopWindow } from "./style"

export const ProfileView = () => {
    return (
        <>
        <NavBar variant="logged"/>
        <section>
        </section>
        <div>
            <p>SL</p>
            <div>
                <h4>Samuel Leão</h4>
                <button>Anunciante</button>
            </div>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
            <div>
                <button> Criar anuncio</button>
            </div>
        </div>
        <StyledShopWindow>
            <ul>
                <li>
                    <AnnouncerCard/>
                </li>
                <li>
                    <AnnouncerCard/>
                </li>
                <li>
                    <AnnouncerCard/>
                </li>
                <li>
                    <AnnouncerCard/>
                </li>
                <li>
                    <AnnouncerCard/>
                </li>
                <li>
                    <AnnouncerCard/>
                </li>
                <li>
                    <AnnouncerCard/>
                </li>
                <li>
                    <AnnouncerCard/>
                </li>
                <li>
                    <AnnouncerCard/>
                </li>
                <li>
                    <AnnouncerCard/>
                </li>
                <li>
                    <AnnouncerCard/>
                </li>
                <li>
                    <AnnouncerCard/>
                </li>
                <li>
                    <AnnouncerCard/>
                </li>
                <li>
                    <AnnouncerCard/>
                </li>
            </ul>
            <div className="pagination">
                <p><strong>1</strong>de 2</p>
                <button>Seguinte &gt;</button>
            </div>
        </StyledShopWindow>
        <Footer/>
        </>
    )
}