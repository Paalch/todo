import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import toJson from 'enzyme-to-json'

import NoteContainer from '../../components/Notes/NoteContainer';

require("jest-localstorage-mock");


Enzyme.configure({ adapter: new Adapter() });


test('NoteContainer component should render as expected: ', () => {
  const component = shallow(<NoteContainer />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});

