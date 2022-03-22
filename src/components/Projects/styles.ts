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
    `}
`

