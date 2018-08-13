import React from 'react';
import { shallow } from 'enzyme';
import Main from '../../src/components/Main';

describe('Should render correctly', () => {
    it('Should render correctly', () => {
        const wrapper = shallow(<Main />);
        expect(wrapper).toMatchSnapshot();
    });
});
