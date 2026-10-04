import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

interface ButtonProps {
    primary?: boolean;
}

const pulse = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }

`

export const Avatar = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
`;

export const Button = styled.button<ButtonProps>`
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

    &:hover {
        background-color: white;
        color: #3295b4;

        animation: ${pulse} 0.6s ease-in-out
    }

    &::before {
        content: '⭐';
        display: inline-block;
        margin-right: 0.5rem;
    }
`;

export const RoundedButton = styled(Button)`
    border-radius: 20px;
    padding: 0.5em 1.5em;
    font-weight: bold;
`;

export const StyledLink = styled(Link)`
    color: #000;
    text-decoration: none;
`;

export const Article = styled.article`
    border: 1px solid #d7d7d7;
    padding: 20px;

    .category {
        font-size: 13px;
        margin: 20px 0;
        line-height: 20px;
        color: #3295b4;
        font-weight: bold;
    }
`;
