import { Card } from "./styles";

import project from '../../assets/projeto.jpg'

type CardProjectProps = {
    id: number
    title: string
    stack: string
}

export function ProjectList({title, stack}: CardProjectProps) {
    return (
        <>
            <Card>
                <div>
                    <img src={project} alt="" />
                </div>
                <h3>{title}</h3>
                <h4>Tecnologias: <span>{stack}</span></h4>
            </Card>
        </>
    )
}
