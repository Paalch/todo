import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import ViewNoteModal from '../../components/Notes/ViewNoteModal';
import Adapter from 'enzyme-adapter-react-15'
import toJson from 'enzyme-to-json'
import moment from 'moment'

Enzyme.configure({ adapter: new Adapter() });

test('EditNoteModal component should render as expected when isOpen is true', () => {

  const component = shallow(<ViewNoteModal
    isOpen={true}
    title={"Some random title"}
    content={"This is content"}
    date={moment('20171018')} />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});

test('EditNoteModal component should render as expected when isOpen is true', () => {

  const component = shallow(<ViewNoteModal isOpen={false}/>);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});