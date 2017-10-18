import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import EditTodoModal from '../../components/Todo/EditTodoModal';
import Adapter from 'enzyme-adapter-react-15'
import toJson from 'enzyme-to-json'
import moment from 'moment'

Enzyme.configure({adapter: new Adapter()});

test('EditTodoModal component should render as expected when isOpen is true', () => {
  const component = shallow(<EditTodoModal
    content={"You should do this thing right now"}
    date={moment('20171018')}
    isOpen={true}/>);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});

test('EditTodoModal component should not render at all when isOpen is false', () => {
  const component = shallow(<EditTodoModal isOpen={false}/>);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});


