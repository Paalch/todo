import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import TodoInput from '../../components/Todo/TodoInput';
import Adapter from 'enzyme-adapter-react-15'
import toJson from 'enzyme-to-json'

Enzyme.configure({ adapter: new Adapter() });

test('Todo component should render as expected', () => {
  const component = shallow(<TodoInput/>);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();

});

const todoInput = shallow(<TodoInput/>);
const instance = todoInput.instance();

test('TodoInputs state should change when onChange is called', () => {
  expect(instance.state.text).toBe("");
  const value = "some text";
  instance.onChange("", {value});
  expect(instance.state.text).toBe("some text");
});