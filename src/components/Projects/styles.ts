import styled, { css } from 'styled-components'

export const Container = styled.div`
    ${({ theme}) => css`
        max-width: 1090px;
        text-align: center;
        margin: 0 auto;
        padding-top: ${theme.spacings.large};
    `}
`
export const Content = styled.div`
    ${({ theme}) => css`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: ${theme.spacings.large};
        margin: ${theme.spacings.xxlarge} 0;
    `}
`

