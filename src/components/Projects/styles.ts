import styled, { css } from 'styled-components'

export const Container = styled.div`
    ${({ theme}) => css`
        max-width: 1090px;
        text-align: center;
        margin: 10rem auto;

    `}
`
export const Content = styled.div`
    ${({ theme}) => css`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: ${theme.spacings.xsmall};
        margin: ${theme.spacings.xxlarge} 0;

        @media screen and (max-width: 1024px) {
            grid-template-columns: repeat(2, auto);
            padding: 0 ${theme.spacings.xsmall};
        }
        @media screen and (max-width: 600px) {
            grid-template-columns: repeat(1, auto);
        }
        @media screen and (max-width: 320px) {
            grid-template-columns: repeat(1, 290px);
        }
    `}
`

