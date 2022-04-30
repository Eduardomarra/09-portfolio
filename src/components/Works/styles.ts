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

        @media screen and (max-width: 1024px) {
            padding: 0 ${theme.spacings.xsmall};
        }
        @media screen and (max-width: 600px) {
            padding: 0 1rem;
        }
        @media screen and (max-width: 400px) {
            grid-template-columns: repeat(2,auto);
            gap: 1rem;
        }
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

        @media screen and (max-width: 1024px) {
            max-width: 25rem;
            height: 16rem;
            padding: 2rem;

            div {
                height: 4rem;

                svg {
                    width: 4rem;
                    height: 4rem;
                }
            }

            p {
                font-weight: 500;
                font-size: ${theme.font.sizes.large};
                line-height: ${theme.font.sizes.xlarge};
            }
        }

        @media screen and (max-width: 600px) {
            width: 12rem;
            height: 16rem;
            padding: 2rem 0.5rem;

            div {
                height: 5rem;
                width: 5rem;
                display: flex;

                svg {
                    width: 2.5rem;
                    height: 2.5rem;
                    margin-right: 0.3rem;
                }
            }

            p {
                font-size: ${theme.font.sizes.small};
                line-height: ${theme.font.sizes.medium};
                margin-top: 1rem;
            }
        }

        @media screen and (max-width: 400px) {
            width: 14rem;
            height: 16rem;
            padding: 2rem 0.5rem;
            margin: 0 auto;

            div {
                height: 8rem;
                width: 8rem;
                display: flex;

                svg {
                    width: 4rem;
                    height: 4rem;
                    margin-right: 0.3rem;
                }
            }

            p {
                font-size: ${theme.font.sizes.medium};
                line-height: ${theme.font.sizes.large};
                margin-top: 0rem;
            }
        }
    `}
`
