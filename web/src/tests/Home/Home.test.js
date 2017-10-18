import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import HomeContainer from '../../components/Home/HomeContainer';
import Adapter from 'enzyme-adapter-react-15'
import toJson from 'enzyme-to-json'

Enzyme.configure({ adapter: new Adapter() });

test('HomeContainer component should render as expected', () => {
  const component = shallow(<HomeContainer />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});

