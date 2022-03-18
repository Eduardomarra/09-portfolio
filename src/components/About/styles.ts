import styled, { css } from 'styled-components'

export const Container  =styled.div`
    ${({ theme}) => css`
        max-width: 1090px;
        margin: 0 auto;
    `}
`
export const Content  =styled.div`
    ${({ theme}) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: ${theme.spacings.large};

        p {
            max-width: 78rem;
            color: ${theme.colors.gray};
            font-size: ${theme.font.sizes.large};
            line-height: ${theme.font.sizes.xxlarge};
            text-align: center;
            margin-top: ${theme.spacings.xlarge};
        }
    `}
`
export const Icons  =styled.div`
    ${({ theme}) => css`
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: ${theme.spacings.large};
        margin-top: ${theme.spacings.xxlarge};

        div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: column;

            .bg-icon {
                width: 8rem;
                height: 8rem;
                display: flex;
                align-items: center;
                justify-content: center;
                background: ${theme.colors.gray400};
                border-radius: 50%;
                margin-bottom: ${theme.spacings.medium};

                svg {
                    width: 4rem;
                    height: 4rem;
                    color: ${theme.colors.greenLight};
                    stroke-width: 1;
                }
            }

            h3 {
                font-weight: 700;
                font-size: ${theme.font.sizes.large};
                line-height: ${theme.font.sizes.xlarge};
                color: ${theme.colors.white};
                margin-bottom: ${theme.spacings.xsmall};
            }

            h4 {
                font-size: ${theme.font.sizes.small};
                line-height: ${theme.font.sizes.large};
                color: ${theme.colors.gray};
                margin-bottom: ${theme.spacings.xxlarge};
            }
        }


    `}
`
