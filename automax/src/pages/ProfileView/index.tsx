import AnnouncerCard from "../../components/Cards/AnnouncerCard"
import { NavBar } from "../../components/NavBar"
import { Footer } from "../../components/footer"

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
        <section>
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
            <div>
                <p>1 de 2</p>
                <h2>Seguinte</h2>
            </div>
        </section>
        <Footer/>
        </>
    )
}