import pictureHome from '../../assets/pictureHome.svg'
import { Container, Apresentation, Button, Picture } from './styles'

export function Home(){
    return (
        <>
            <Container>
                <Apresentation>
                    <h1>
                        Olá, eu sou o<br />
                        Eduardo Marra
                    </h1>
                    <h4>Desenvolvedor Front-End | React - TypeScript</h4>
                    <Button>
                        <button type="submit">Download CV</button>
                        <button type="submit">Entre em contato</button>
                    </Button>
                </Apresentation>
                <Picture>
                    <img src={pictureHome} alt="" />
                </Picture>
            </Container>
        </>
    )
}
