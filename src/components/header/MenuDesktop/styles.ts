import styled, { css } from 'styled-components'


export const Navigation = styled.nav`
    ${({ theme }) => css`
    `}
`
export const Menu = styled.ul`
${({ theme}) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5rem;
    z-index: 50;

    li {
        margin: 0 1rem;

        a {
        font-weight: 400;
        font-size: ${theme.font.sizes.medium};
        line-height: ${theme.font.sizes.xlarge};
        color: ${theme.colors.white};
        padding: 1rem 0;
        transition: all 0.3s;

            &:hover {
                color: ${theme.colors.greenLight};
            }
        }
        a.active {
            color: ${theme.colors.greenLight};
        }
    }
    .active {
        @media screen and (max-width: 700px) {
            flex-direction: column;
            justify-content: space-evenly;
            position: absolute;
            top: 8rem;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 50;
            background: ${theme.colors.dark};
            flex: 1;
            li {
                padding: 2rem 0;

                a {
                    font-size: ${theme.font.sizes.large};
                }
            }
        }
    }
`}
`
