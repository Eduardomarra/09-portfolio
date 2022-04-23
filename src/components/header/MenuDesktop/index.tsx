import { Navigation, Menu } from "./styles";

export function MenuDesktop() {
    return (
        <>
            <Navigation className="desktop">
                <Menu className="active">
                    <li><a href='#sobreMim'>Sobre Mim</a></li>
                    <li><a href='#projetos'>Projetos</a></li>
                    <li><a href='#servicos'>Serviços</a></li>
                    <li><a href='#skills'>Minhas Skills</a></li>
                </Menu>
            </Navigation>
        </>
    )
}
