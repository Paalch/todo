import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15'
import toJson from 'enzyme-to-json'

import NewNoteModal from '../../components/Notes/NewNoteModal';

Enzyme.configure({ adapter: new Adapter() });

test('NewNoteModal component should render as expected when isOpen is true', () => {
  const component = shallow(<NewNoteModal isOpen={true}/>);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});

test('NewNoteModal component should render as expected when isOpen is true', () => {
  const component = shallow(<NewNoteModal isOpen={false}/>);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});