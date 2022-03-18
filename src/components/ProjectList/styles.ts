import styled, { css } from 'styled-components'

export const Card = styled.div`
    ${({ theme}) => css`
        padding: ${theme.spacings.small};
        background: ${theme.colors.gray400};
        text-align: left;
        border-radius: 5px;

        div {
            width: 300px;
            height: 130px;
            margin-bottom: ${theme.spacings.xsmall};

            img {
                width: 100%;
                height: 100%;
            }
        }

        h3 {
            font-weight: 500;
            font-size: ${theme.font.sizes.large};
            line-height:  ${theme.font.sizes.xlarge};
            color: ${theme.colors.white};
            margin-bottom: ${theme.spacings.xsmall};
        }

        h4 {
            font-size: ${theme.font.sizes.small};
            line-height: ${theme.font.sizes.large};
            color: ${theme.colors.gray};

            span {
                color: ${theme.colors.greenLight};
            }
        }
    `}
`
