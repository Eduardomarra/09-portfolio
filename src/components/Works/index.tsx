import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { FaFigma } from 'react-icons/fa'
import { HiOutlineDeviceMobile } from 'react-icons/hi'

import { Container, Content, Card } from "./styles";


export function Works() {
    return (
        <>
            <Container id="servicos">
                <h1>Serviços</h1>
                <Content>
                    <Card>
                        <div>
                            <MdKeyboardArrowLeft /><MdKeyboardArrowRight />
                        </div>
                        <p>Criação<br /> de sites</p>
                    </Card>
                    <Card>
                        <div>
                            <FaFigma />
                        </div>
                        <p>UI<br /> Designer</p>
                    </Card>
                    <Card>
                        <div>
                            <HiOutlineDeviceMobile />
                        </div>
                        <p>Sites<br /> Responsivos</p>
                    </Card>
                </Content>
            </Container>
        </>
    )
}
