import { injectGlobal } from 'styled-components';

export default () => injectGlobal`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;