import styled, { css } from 'styled-components'


export const Container = styled.div`
    ${({ theme}) => css`
        max-width: 1090px;
        margin: 10rem auto;

        h1 {
            text-align: center;
        }
    `}
`

export const Content = styled.div`
    ${({ theme}) => css`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: ${theme.spacings.xsmall};
        margin: ${theme.spacings.large} 0 ${theme.spacings.xxlarge} 0;
    `}
`
export const Card = styled.div`
    ${({ theme}) => css`
        max-width: 35rem;
        height: 22rem;
        padding: 4rem;
        background: ${theme.colors.gray400};
        border-radius: 5px;

        div {
            height: 5rem;

            svg {
                width: 5rem;
                height: 5rem;
                margin-right: 0.8rem;
                color: ${theme.colors.greenLight};
            }
        }

        p {
            font-weight: 500;
            font-size: ${theme.font.sizes.xlarge};
            line-height: ${theme.font.sizes.xxlarge};
            color: #828282;

            margin-top: 3rem;
        }
    `}
`
