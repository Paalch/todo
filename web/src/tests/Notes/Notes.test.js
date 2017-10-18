import React from 'react';
import {mount, shallow} from 'enzyme';
import toJson from 'enzyme-to-json'
import moment from 'moment'

import Note from '../../components/Notes/Notes';

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-15";

Enzyme.configure({adapter: new Adapter()});

test('Note component should render as expected: ', () => {
  const note = {
    title: "Big title",
    content: "Some notis",
    date: moment('20171018')
  }
  const component = shallow(<Note
    note={note}
    key={note.date}/>);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});



