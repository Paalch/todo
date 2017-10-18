import React from 'react';
import { MemoryRouter } from 'react-router'
import Adapter from 'enzyme-adapter-react-15'
import Enzyme, { mount } from 'enzyme';

import HomeContainer from '../../components/Home/HomeContainer';
import TodoContainer from '../../components/Todo/TodoContainer';
import NoteContainer from "../../components/Notes/NoteContainer";
import EventContainer from "../../components/Events/EventContainer";
import App from './App';
import NotFound from "../../components/NotFound";

Enzyme.configure({ adapter: new Adapter() });

test('The Home component should be rendered when it is visited: ', () => {
  const component = mount(
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      <App/>
    </MemoryRouter>
  );

  expect(component.find(HomeContainer).length).toBe(1);

});

test('The Todo component should be rendered when it is visited: ', () => {
  const component = mount(
    <MemoryRouter initialEntries={['/todos']} initialIndex={0}>
      <App/>
    </MemoryRouter>
  );

  expect(component.find(TodoContainer).length).toBe(1);

});

test('The Note component should be rendered when it is visited: ', () => {
  const component = mount(
    <MemoryRouter initialEntries={['/notes']} initialIndex={0}>
      <App/>
    </MemoryRouter>
  );

  expect(component.find(NoteContainer).length).toBe(1);

});

test('The Event component should be rendered when it is visited: ', () => {
  const component = mount(
    <MemoryRouter initialEntries={['/events']} initialIndex={0}>
      <App/>
    </MemoryRouter>
  );

  expect(component.find(EventContainer).length).toBe(1);

});

test('The NotFound component should be rendered when it is visited: ', () => {
  const component = mount(
    <MemoryRouter initialEntries={['/non_existing_path']} initialIndex={0}>
      <App/>
    </MemoryRouter>
  );

  expect(component.find(NotFound).length).toBe(1);

});