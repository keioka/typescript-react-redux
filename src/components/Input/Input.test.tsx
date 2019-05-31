import * as React from 'react';
import Input from './Input';
import { shallow, mount, render } from 'enzyme';
describe('<Input />', () => {
  it('should render <label>', () => {
    const wrapper = shallow(<Input placeholder="email" />);
    console.log(wrapper);
    expect(wrapper.find(<label />)).toBe(true);
  });
});
