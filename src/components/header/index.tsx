import { Container, Menu } from './styles'


export function Header() {
    return (
        <>
          <Container>
                <h1>Portfólio</h1>
                <nav>
                    <Menu>
                        <li><a href='#sobreMim'>Sobre Mim</a></li>
                        <li><a href='#projetos'>Projetos</a></li>
                        <li><a href='#servicos'>Serviços</a></li>
                        <li><a href='#skills'>Minhas Skills</a></li>
                    </Menu>
                </nav>
          </Container>
        </>
    )
}
