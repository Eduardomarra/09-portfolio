import styled, { css, keyframes } from 'styled-components'

export const Container  =styled.div`
    ${({ theme}) => css`
        width: 1090px;
        height: calc(100vh - 122px);
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    `}
`

export const Apresentation  =styled.div`
    ${({ theme}) => css`
        h1 {
            font-weight: 700;
            font-size: calc(${theme.font.sizes.xxlarge} * 2);
            line-height: calc(${theme.font.sizes.xlarge} * 3);
            color: ${theme.colors.white};
        }

        h4 {
            font-weight: 500;
            font-size: ${theme.font.sizes.xlarge};
            line-height: ${theme.font.sizes.xlarge};
            color: ${theme.colors.gray};
            margin: ${theme.spacings.small} 0 ${theme.spacings.large};
        }

        animation: ${animatedApresentation} 1s forwards;
    `}
`

export const Button  =styled.div`
    ${({ theme}) => css`
        button{
            width: 20rem;
            background: ${theme.colors.greenLight};
            padding: ${theme.spacings.xsmall} ${theme.spacings.small};
            font-weight: 700;
            font-size: ${theme.font.sizes.small};
            letter-spacing: 1px;
            border-radius: 5px;

            & + button {
                margin-left: 3rem;
                background: transparent;
                border: 2px solid ${theme.colors.gray400};
                color: ${theme.colors.white};
                font-weight: 700;
                transition: all 0.5s;

                &:hover{
                    background-color: ${theme.colors.greenLight};
                    color: #000;
                }

            }

            &:hover{
                filter: brightness(0.8)
            }
        }
    `}
`

export const Picture  =styled.div`
    ${({ theme}) => css`

        -webkit-animation: ${animatedPicture} 1s;
                animation: ${animatedPicture} 1s;
    `}
`

const animatedApresentation = keyframes`
    from {
        transform: translateX(-300px);
        opacity: 0;
    }
    to {
        transform: translateX(0px);
        opacity: 1;
    }
`

const animatedPicture = keyframes`
    from {
        transform: translateX(300px);
        opacity: 0;
    }
    to {
        transform: translateX(0px);
        opacity: 1;
    }
`
