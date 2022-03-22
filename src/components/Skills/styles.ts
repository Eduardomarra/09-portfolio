import styled, { css } from 'styled-components'

export const Container = styled.div`
    max-width: 1090px;
    margin: 10rem auto 20rem ;
    text-align: center;
`

export const Content = styled.div`
   ${({ theme}) => css`
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: ${theme.spacings.xsmall};
        margin: 4rem 0;
    `}
`

export const Card = styled.div`
   ${({ theme}) => css`
        width: 15rem;
        height: 15rem;
        background: ${theme.colors.gray400};
        border-radius: 5px;

        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            color: ${theme.colors.greenLight};
            width: 7rem;
            height: 7rem;
        }
   `}
`
