import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Todo from '../../components/Todo/Todo';

import Adapter from 'enzyme-adapter-react-15'
import toJson from 'enzyme-to-json'
import moment from 'moment'

Enzyme.configure({ adapter: new Adapter() });

test('Todo component should render as expected', () => {
  const todo = {date: moment('20120620')};
  const component = shallow(<Todo todo={todo} />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});


test('EditTodoModal prop isOpen should be false before toggleEditTodoButton has been clicked', () => {
  const todo = {date: moment('20120620')};

  const parentComponent = shallow(<Todo todo={todo} isOpen={true} content={"some text"} date={moment('20171018')}/>);
  let editTodo = parentComponent.find("EditTodoModal");

  expect(editTodo.prop("isOpen")).toBe(false);
});

test('EditTodoModal prop isOpen should be true after toggleEditTodoButton has been clicked', () => {
  const todo = {date: moment('20120620')};

  const parentComponent = shallow(<Todo todo={todo} isOpen={true} content={"some text"} date={moment('20171018')}/>);
  const toggleEditTodoButton = parentComponent.find("Button");
  toggleEditTodoButton.simulate('click');

  let editTodo = parentComponent.find("EditTodoModal");

  expect(editTodo.prop("isOpen")).toBe(true);

});

