import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme'
import Login from './login';

Enzyme.configure({ adapter: new Adapter() });

it('render component', () => {
    const wrapper = shallow(<Login />)

    expect(wrapper).toBeDefined()
})

it('contains a form element', () => {
    const wrapper = shallow(<Login />)

    expect(wrapper.find('form').exists()).toBeTruthy()
})

it('contains a label #userName element and render Username text in the label', () => {
    const wrapper = shallow(<Login />)

    var renderedLabel = wrapper.find('#userName');

    expect(renderedLabel.exists()).toBeTruthy()
    expect(renderedLabel.text()).toEqual('Name :')
})

it('contains a input type text in label #userName element', () => {
    const wrapper = shallow(<Login />)

    var renderedLabel = wrapper.find('#userName').find('input');

    expect(renderedLabel.exists()).toBeTruthy()
    expect(renderedLabel.props().type).toEqual('text');
})

it('contains a input type password in label #password element', () => {
    const wrapper = shallow(<Login />)

    var renderedLabel = wrapper.find('#password').find('input');

    expect(renderedLabel.exists()).toBeTruthy()
    expect(renderedLabel.props().type).toEqual('password');
})

it('contains a label #Password element and render Password text in the label', () => {
    const wrapper = shallow(<Login />)

    var renderedLabel = wrapper.find('#password');
    
    expect(renderedLabel.exists()).toBeTruthy()
    expect(renderedLabel.text()).toEqual('Password :')
})

it('contains a input type submit ', () => {
    const wrapper = shallow(<Login />)

    var renderedLabel = wrapper.find('form').find('#Submit');

    expect(renderedLabel.props().type).toEqual('submit');
    expect(renderedLabel.props().value).toEqual('Submit');
})

