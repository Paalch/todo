import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EventContainer from '../../components/Events/EventContainer';
import Adapter from 'enzyme-adapter-react-15'
import toJson from 'enzyme-to-json'

Enzyme.configure({ adapter: new Adapter() });

test('Todo component should render as expected', () => {
  const component = shallow(<EventContainer/>);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});