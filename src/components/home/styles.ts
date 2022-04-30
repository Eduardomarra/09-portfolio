import styled, { css, keyframes } from 'styled-components'

export const Container  =styled.div`
    ${({ theme}) => css`
        max-width: 1090px;
        height: calc(100vh - 122px);
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        overflow: hidden;

        @media screen and (max-width:  700px){
            flex-direction: column;
            justify-content: center;
            width: 100%;
        }
    `}
`

export const Apresentation  =styled.div`
    ${({ theme}) => css`
        animation: ${animatedApresentation} 1s forwards;
        h1 {
            font-weight: 700;
            font-size:${theme.font.sizes.huge};
            line-height: calc(${theme.font.sizes.huge} + 4rem);
            color: ${theme.colors.white};
        }

        h4 {
            font-weight: 500;
            font-size: ${theme.font.sizes.xlarge};
            line-height: ${theme.font.sizes.xlarge};
            color: ${theme.colors.gray};
            margin: ${theme.spacings.small} 0 ${theme.spacings.large};
        }

        @media screen and (max-width:  700px){
            h1 {
                font-size: ${theme.font.sizes.xxlarge};
                line-height: calc(${theme.font.sizes.xxlarge} + 1rem);
                margin: 0 1rem;
            }

            h4 {
                font-size: ${theme.font.sizes.large};
                line-height: ${theme.font.sizes.xlarge};
                margin: 0 1rem;
            }
        }
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

            @media screen and (max-width:  700px){

            }
        }
        @media screen and (max-width:  700px){
            display: grid;
            grid-template-columns: 1fr;
            margin: 5rem 1rem;

            button{
                width: 100%;

                & + button {
                    margin: 2rem 1rem 0rem 0rem;
                }

            }
        }
    `}
`

export const Picture  =styled.div`
    ${({ theme}) => css`
        -webkit-animation: ${animatedPicture} 1s;
        animation: ${animatedPicture} 1s;

        @media screen and (max-width:  700px){
            position: absolute;
            top: -3rem;
            bottom: 0;
            right: 0;
            left: 2rem;
            width: 20rem;
            height: 20rem;
            opacity: 0.3;
            z-index: -1;
        }

        @media screen and (min-width: 701px) and (max-width:  1024px){
            position: absolute;
            top: 35rem;
            bottom: 0;
            right: 0;
            left: 40rem;
            width: 40rem;
            height: 40rem;
            opacity: 0.3;
            z-index: -1;
            img {
                svg {
                    width: 40rem;
                    height: 40rem;
                }
            }
        }
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
