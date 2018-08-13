import React from 'react';
import { render } from 'react-dom';
import Root from './root';
import globalStyle from './styles/global.style';

globalStyle();

render(
    <Root />,
    document.getElementById('main'),
);

if (module.hot) {
    module.hot.accept('./root', () => {
        const NextApp = require('./root').default; // eslint-disable-line
        render(
            <NextApp />,
            document.getElementById('main'),
        );
    });
}
