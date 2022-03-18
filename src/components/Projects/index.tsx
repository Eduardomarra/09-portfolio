import projectJson from '../../json/projectList.json'
import { ProjectList } from '../ProjectList';

import { Container, Content } from './styles';

export function Projects() {
    return (
        <>
            <Container id="projetos">
                <h1>Projetos</h1>
                <Content>
                    {projectJson.map((project) => (
                        <ProjectList key={project.id} {...project} />
                    ))}
                </Content>
            </Container>
        </>
    )
}
