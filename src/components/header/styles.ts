import styled, { css, keyframes } from 'styled-components'

export const Container = styled.div`
    ${({ theme}) => css`
        max-width: 1090px;
        margin: 0 auto;
        padding: 4rem 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;

        animation: ${animatedHeader} 2s;

        @media screen and (min-width:  701px) {
            .mobile {
                display: none;
            }
        }
        @media screen and (max-width:  700px) {
            .desktop {
                display: none;
            }
        }
    `}
`

const animatedHeader = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`
