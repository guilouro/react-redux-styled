import React from 'react';
import { shallow } from 'enzyme';
import Routes from '../src/Routes';

describe('<Routes />', () => {
    it('Should render correctly', () => {
        const wrapper = shallow(<Routes />);
        expect(wrapper).toMatchSnapshot();
    });
});
