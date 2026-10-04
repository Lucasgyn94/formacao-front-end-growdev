import styled, { css } from 'styled-components';

interface ButtonProps {
    primary?: boolean;
}

export const Avatar = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
`;

export const Button = styled.button<ButtonProps>`
    // FORMA 1
    /* background-color: ${(props) => props.primary ? '#3295b4' : 'white'};
    color: ${(props) => props.primary ? 'white' : '3295b4'};*/
    // FORMA 2
    /* ${({ primary }) => css`
        background-color: ${primary ? '#3295b4' : 'white'};
        color: ${primary ? 'white' : '#3295b4'};
    `} */
    // FORMA 3
    background-color: white;
    color: #3295b4;

    ${({ primary }) =>
        primary &&
        css`
            background-color: #3295b4;
            color: white;
        `}
    font-size: 1em;
    margin: 1em 0.5rem 1rem 0;
    padding: 0.25em 1em;
    border: 2px solid #3295b4;
    cursor: pointer;

`;
