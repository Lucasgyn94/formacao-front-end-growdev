import styled from 'styled-components';

export const Wrapper = styled.main`
    margin: 60px 0;
    display: flex;
    justify-content: center;
`;

export const Container = styled.div`
    width: 1250px;
    padding: 0 25px;
`;

export const Title = styled.div`
    margin-bottom: 45px;

    h1 {
        color: #000000;
        font-size: 36px;
        line-height: 45px;
        letter-spacing: -1px;
    }

    span {
        color: #94979e;
        font-size: 16px;
        line-height: 24px;
    }
`;

export const Posts = styled.div`
    display: grid;
    grid-template-columns: 3, 1fr;
    gap: 30px;
`;
