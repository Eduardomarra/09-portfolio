import { FiSmile, FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import { AnimationOnScroll } from 'react-animation-on-scroll';

import { Container, Content, Icons } from './styles'

export function About() {
    return (
        <>
            <Container id="sobreMim">
                <Content>
                    <h1>Sobre Mim</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident
                    </p>
                    <Icons>
                        <AnimationOnScroll animateIn="animate__fadeIn">
                            <div>
                                <div className="bg-icon">
                                    <FiSmile />
                                </div>
                                <h3 className="mobile">Meu nome</h3>
                                <h4>Eduardo Marra</h4>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeIn" delay={200}>
                            <div>
                                <a  href="https://github.com/Eduardomarra"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className="bg-icon">
                                        <FiGithub />
                                    </div>
                                </a>
                                <h3>GitHub</h3>
                                <h4>github.com/Eduardomarra</h4>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeIn" delay={400}>
                            <div>
                                <a  href="https://www.linkedin.com/in/eduardomarra/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className="bg-icon">
                                        <FiLinkedin />
                                    </div>
                                </a>
                                <h3>Linkedin</h3>
                                <h4>linkedin/in/eduardomarra</h4>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeIn" delay={600}>
                            <div>
                                <a  href="mailTo:eduardomarra@gmail.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className="bg-icon">
                                        <FiMail />
                                    </div>
                                </a>
                                <h3>E-mail</h3>
                                <h4>eduardomarra@gmail.com</h4>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeIn" delay={800}>
                            <div>
                                <a  href="https://api.whatsapp.com/send?phone=61993707468"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className="bg-icon">
                                        <FiPhone />
                                    </div>
                                </a>
                                <h3>Telefone</h3>
                                <h4>+55 61 99370-7468</h4>
                            </div>
                        </AnimationOnScroll>
                    </Icons>
                </Content>
            </Container>
        </>
    )
}
