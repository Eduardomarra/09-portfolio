import styled, { css } from 'styled-components'

export const Navigation = styled.nav`
    ${({ theme }) => css`
    transition: all 0.5s;
        svg {
            color: ${theme.colors.white};
            cursor: pointer;
            transition: all 0.5s;
        }

        .menu {
            clip-path: polygon(100% 0, 100% 0, 100% 0, 100% 0);
            transition: all 0.5s;
        }
    `}
`

export const Menu = styled.ul`
    ${({ theme }) => css`
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        position: absolute;
        top: 8rem;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;
        background: ${theme.colors.dark};
        z-index: 50;
        transition: all 0.5s;

        li {
            padding: 2rem 0;

            a {
                font-weight: 400;
                font-size: ${theme.font.sizes.large};
                line-height: ${theme.font.sizes.xlarge};
                color: ${theme.colors.white};
                padding: 1rem;
                transition: all 0.3s;

                &:hover {
                    color: ${theme.colors.greenLight};
                }
            }
            a.active {
                color: ${theme.colors.greenLight};
            }
        }
    `}
`
