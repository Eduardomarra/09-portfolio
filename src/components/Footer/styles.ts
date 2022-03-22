import styled, { css } from "styled-components"

export const Wrapper = styled.div`
    ${({ theme}) => css`
        background: ${theme.colors.gray400};
    `}
`

export const Container = styled.div`
    ${({ theme}) => css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1090px;
        margin: 0 auto;
        padding: 2rem 0;

        p {
            font-weight: normal;
            font-size: ${theme.font.sizes.medium};
            line-height: 1.9rem;
            color: ${theme.colors.white};
            & + p {
                display: flex;
                align-items: center;
                a {
                    margin-left: 1rem;
                    color: ${theme.colors.greenLight};
                    cursor: pointer;
                }
            }
    `}
`
