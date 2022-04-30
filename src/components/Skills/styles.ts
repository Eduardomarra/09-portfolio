import styled, { css } from 'styled-components'

export const Container = styled.div`
    max-width: 1090px;
    margin: 10rem auto 20rem ;
    text-align: center;

    @media screen and (max-width: 1024px) {
        margin: 10rem auto 10rem ;
    }
`

export const Content = styled.div`
   ${({ theme}) => css`
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: ${theme.spacings.xsmall};
        margin: 4rem 0;

        @media screen and (max-width: 1024px) {
            grid-template-columns: repeat(4, auto);
            padding: 0 ${theme.spacings.xsmall};
            gap: 1rem;
            margin: 4rem auto;
        }
        @media screen and (max-width: 600px) {
            grid-template-columns: repeat(3, 1fr);
            padding: 0 1em;
            gap: 1rem;
            margin: 5rem auto;
        }
        @media screen and (max-width: 1024px) {}
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

        @media screen and (max-width: 1024px) {
            width: 17rem;
        }
        @media screen and (max-width: 600px) {
            width: 10.5rem;
            height: 10.5rem;
            svg {
                width: 5rem;
                height: 5rem;
            }
        }
        @media screen and (max-width: 320px) {
            width: 9rem;
            height: 9rem;
            svg {
                width: 5rem;
                height: 5rem;
            }
        }
   `}
`
