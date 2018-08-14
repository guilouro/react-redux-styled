import React from 'react';
import { shallow } from 'enzyme';
import Root from '../src/root';

describe('<Root />', () => {
    it('Should render correctly', () => {
        const wrapper = shallow(<Root />);
        expect(wrapper).toMatchSnapshot();
    });
});
