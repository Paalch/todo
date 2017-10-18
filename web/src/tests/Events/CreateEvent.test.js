import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import CreateEvent from '../../components/Events/CreateEvent';
import Adapter from 'enzyme-adapter-react-15'
import toJson from 'enzyme-to-json'

Enzyme.configure({ adapter: new Adapter() });

test('CreateEvent component should render as expected', () => {
  const component = shallow(<CreateEvent/>);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});

