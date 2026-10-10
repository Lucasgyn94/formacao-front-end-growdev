import styled from 'styled-components';

export const Button = styled.button`
    flex: 0 0 auto;
    padding: 10px 20px;
    border: 0;
    border-radius: 6px;
    color: ${({ theme }) => theme.colors.backgroundColor};
    font-size: 1rem;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;

    &:hover {
        filter: brightness(0.95);
    }
`;
