import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Event from '../../components/Events/Event';
import Adapter from 'enzyme-adapter-react-15'
import toJson from 'enzyme-to-json'
import moment from 'moment'


Enzyme.configure({ adapter: new Adapter() });

test('EditModal component should render as expected: ', () => {
  const event = {
    text: "some text for the event",
    where: "location for the event",
    date: moment('20171018'),
    time: moment('10:14')
  };
  const component = shallow(<Event event={event} />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
