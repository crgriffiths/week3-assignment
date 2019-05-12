import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import ListingDetails from '../ListingDetails';

configure({adapter: new Adapter()});
describe('Listing Details', () => {
  it('Should render listing details', () => {
    const component = shallow(<ListingDetails />);
    expect(component).toMatchSnapshot();
  })
})
