import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { FaFigma } from 'react-icons/fa'
import { HiOutlineDeviceMobile } from 'react-icons/hi'

import { Container, Content, Card } from "./styles";
import { AnimationOnScroll } from 'react-animation-on-scroll';


export function Works() {
    return (
        <>
            <Container id="servicos">
                <h1>Serviços</h1>
                <Content>
                    <AnimationOnScroll animateIn="animate__flipInX" animateOut="animate__flipOutX">
                        <Card>
                            <div>
                                <MdKeyboardArrowLeft /><MdKeyboardArrowRight />
                            </div>
                            <p>Criação<br /> de sites</p>
                        </Card>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__flipInX" animateOut="animate__flipOutX">
                        <Card>
                            <div>
                                <FaFigma />
                            </div>
                            <p>UI<br /> Designer</p>
                        </Card>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__flipInX" animateOut="animate__flipOutX">
                        <Card>
                            <div>
                                <HiOutlineDeviceMobile />
                            </div>
                            <p>Sites<br /> Responsivos</p>
                        </Card>
                    </AnimationOnScroll>
                </Content>
            </Container>
        </>
    )
}
