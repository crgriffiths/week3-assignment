import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import ListingDetails from '../ListingDetails';

configure({adapter: new Adapter()});
describe('Listing Details', () => {
  it('Should render listing details', () => {
    const component = shallow(<ListingDetails 
      index={0}
      houseType="Apartment"
      location="New York"
      title="Centrally-located Manhattan studio"
      payment={
        {
          "cost": 105,
          "description": "Free cancellation"
        }
      }
      host={
        {
          "name": "Robert",
          "isSuperhost": true
        }
      }
      rating={
        {
          "stars": 3,
          "reviews": 133
        }
      }
    />);
    expect(component).toMatchSnapshot();
  });
})
