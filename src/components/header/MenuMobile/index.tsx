import { useState } from "react";
import { ImMenu3, ImMenu4 } from "react-icons/im";

import { Menu, Navigation } from "./styles";

export function MenuMobile() {
    const [isOpen, setIsOpen] = useState('menu');

    function handleClick() {
        setIsOpen(isOpen === 'menu' ? 'active' : 'menu');
    }

    return (
        <>
            <Navigation className="mobile">
                {(isOpen === 'menu'? <ImMenu3 size={40} onClick={handleClick} /> : <ImMenu4 size={40} onClick={handleClick} />)}
                <Menu className={isOpen}>
                    <li><a href='#sobreMim'>Sobre Mim</a></li>
                    <li><a href='#projetos'>Projetos</a></li>
                    <li><a href='#servicos'>Serviços</a></li>
                    <li><a href='#skills'>Minhas Skills</a></li>
                </Menu>
            </Navigation>
        </>
    )
}
