import { Container } from './styles'

import { MenuDesktop } from './MenuDesktop'
import { MenuMobile } from './MenuMobile'

export function Header() {
    return (
        <>
          <Container>
                <h1>Portfólio</h1>
                <MenuDesktop />
                <MenuMobile />
          </Container>
        </>
    )
}
