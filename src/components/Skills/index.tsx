import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiBootstrap,
    SiFirebase,
    SiReact,
    SiTypescript,
    SiWordpress,
    SiGit
} from 'react-icons/si'

import { Container, Content, Card } from './styles'

export function Skills() {
    return (
        <>
            <Container id="skills">
                <h1>Skills</h1>
                <Content>
                    <Card>
                        <SiHtml5 />
                    </Card>
                    <Card>
                        <SiCss3 />
                    </Card>
                    <Card>
                        <SiJavascript />
                    </Card>
                    <Card>
                        <SiBootstrap />
                    </Card>
                    <Card>
                        <SiFirebase />
                    </Card>
                    <Card>
                        <SiReact />
                    </Card>
                    <Card>
                        <SiTypescript />
                    </Card>
                    <Card>
                        <SiWordpress />
                    </Card>
                    <Card>
                        <SiGit />
                    </Card>
                </Content>
            </Container>
        </>
    )
}
