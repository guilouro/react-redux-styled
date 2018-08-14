import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 30vh;
    /* justify-content: center; */
    align-items: center;
    color: #fff;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",
        Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    font-weight: normal;
`;

export const Title = styled.div`
    font-weight: 300;
    font-size: 5rem;
    margin-bottom: 1.5rem;
    span {
        color: #00688D;
    }
`;
