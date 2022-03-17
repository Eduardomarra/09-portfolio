import styled, { css } from 'styled-components'

export const Container = styled.div`
    ${({ theme}) => css`
        max-width: 1090px;
        margin: 0 auto;
        padding: 4rem 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        h1 {

        }
    `}
`

export const Menu = styled.ul`
    ${({ theme}) => css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 5rem;

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
    `}
`
