import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Listing from '../Listing';

configure({adapter: new Adapter()});
describe('Listing', () => {
  it('Should render a full listing', () => {
    const component = shallow(<Listing />);
    expect(component).toMatchSnapshot();
  })
})
