import styled from 'styled-components';

export const FormWrapper = styled.form`
    display: flex;
    justify-content: center;

    margin: 30px 16px 0;
`;
export const Container = styled.div`
    display: flex;
    gap: 10px;
    /* width: 100%; */
    width: min(100%, 600px);
    /* max-width: 60px;
    padding: 0 15px; */

    input {
        box-sizing: border-box;
        min-width: 0;
        flex: 1;
        padding: 10px;
        border: 2px solid ${({ theme }) => theme.colors.border};
        border-radius: 6px;
        font-size: 1rem;
    }

    button {
        flex: 0 0 auto;
        padding: 10px 20px;
        border: 0;
        border-radius: 6px;
        color: ${({ theme }) => theme.colors.backgroundColor};
        font-size: 1rem;
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.primary};

        &:hover {
            filter: brightness(0.95);
        }
    }
    /* button:hover {
        background-color: #ec4239;
        filter: brightness(0.95);
    } */

    @media (max-width: 380px) {
        flex-direction: column;

        button {
            width: 100%;
        }
    }
`;
