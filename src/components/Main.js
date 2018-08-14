import React from 'react';
import { Container, Title } from '../styles/Main.style';
import reactLogo from '../../images/react.png';

const Main = () => (
    <Container>
        <img src={reactLogo} alt="React" />
        <Title>
            React
            <span>App</span>
        </Title>
        <i>is running...</i>
    </Container>
);

export default Main;
