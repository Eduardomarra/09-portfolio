import { Container, Menu } from './styles'


export function Header() {
    return (
        <>
          <Container>
                <h1>Portfólio</h1>
                <nav>
                    <Menu>
                        <li><a href='/'>Sobre Mim</a></li>
                        <li><a href='/'>Serviços</a></li>
                        <li><a href='/'>Minhas Skills</a></li>
                        <li><a href='/'>Projetos</a></li>
                    </Menu>
                </nav>
          </Container>
        </>
    )
}
