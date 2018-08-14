import { injectGlobal } from 'styled-components';

export default () => injectGlobal`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #main {
        height: 100%;
    }

    body {
        background-color: #0186b2;
    }
`;
