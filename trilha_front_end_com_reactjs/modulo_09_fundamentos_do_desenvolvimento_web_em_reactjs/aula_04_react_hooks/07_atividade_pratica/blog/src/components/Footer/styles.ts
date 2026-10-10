import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    text-align: center;
    padding: 20px 10px;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    color: ${({ theme }) => theme.colors.textColor};

    p {
        margin: 5px 0;
    }
`;
