import { Wrapper, Container } from "./styles";


export function Footer() {
    return (
        <>
            <Wrapper>
                <Container>
                    <p>@ {new Date().getFullYear()} - Eduardo Marra</p>
                    <p>
                        Design criado por
                        <a
                            href="https://www.figma.com/file/Yb9IBH56g7T1hdIyZ3BMNO/Desafios---Codel%C3%A2ndia?node-id=39316%3A686"
                            target="_blank"
                            rel="noreferrer"
                        >
                            IuriCode
                        </a>
                    </p>

                </Container>
            </Wrapper>
        </>
    )
}
