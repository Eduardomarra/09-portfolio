import { AnimationOnScroll } from 'react-animation-on-scroll'
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
                    <AnimationOnScroll
                        animateIn="animate__flipInX"
                        animateOut="animate__flipOutX"
                    >
                        <Card>
                            <SiHtml5 />
                        </Card>
                    </AnimationOnScroll>
                    <AnimationOnScroll
                        animateIn="animate__flipInX"
                        animateOut="animate__flipOutX"
                        delay={100}
                    >
                        <Card>
                            <SiCss3 />
                        </Card>
                    </AnimationOnScroll>
                    <AnimationOnScroll
                        animateIn="animate__flipInX"
                        animateOut="animate__flipOutX"
                        delay={200}
                    >
                        <Card>
                            <SiJavascript />
                        </Card>
                    </AnimationOnScroll>
                    <AnimationOnScroll
                        animateIn="animate__flipInX"
                        animateOut="animate__flipOutX"
                        delay={300}
                    >
                        <Card>
                            <SiBootstrap />
                        </Card>
                    </AnimationOnScroll>
                    <AnimationOnScroll
                        animateIn="animate__flipInX"
                        animateOut="animate__flipOutX"
                        delay={400}
                    >
                        <Card>
                            <SiFirebase />
                        </Card>
                    </AnimationOnScroll>
                    <AnimationOnScroll
                        animateIn="animate__flipInX"
                        animateOut="animate__flipOutX"
                        delay={500}
                    >
                        <Card>
                            <SiReact />
                        </Card>
                    </AnimationOnScroll>
                    <AnimationOnScroll
                        animateIn="animate__flipInX"
                        animateOut="animate__flipOutX"
                        delay={600}
                    >
                        <Card>
                            <SiTypescript />
                        </Card>
                    </AnimationOnScroll>
                    <AnimationOnScroll
                        animateIn="animate__flipInX"
                        animateOut="animate__flipOutX"
                        delay={700}
                    >
                        <Card>
                            <SiWordpress />
                        </Card>
                    </AnimationOnScroll>
                    <AnimationOnScroll
                        animateIn="animate__flipInX"
                        animateOut="animate__flipOutX"
                        delay={800}
                    >
                        <Card>
                            <SiGit />
                        </Card>
                    </AnimationOnScroll>
                </Content>
            </Container>
        </>
    )
}
