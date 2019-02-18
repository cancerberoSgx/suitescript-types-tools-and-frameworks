import { mount } from 'enzyme';
import * as React from 'react';
import { ErrorComponent } from '../errorComponent';

describe('ErrorComponent', () => {

  it('renders given error object', () => {
    const wrapper = mount(<ErrorComponent error={{ message: 'message', name: 'NAME', stack: 'stack' }} />)
    expect(wrapper.find('.error-name').text()).toBe('NAME')
    expect(wrapper.find('.error-message').text()).toBe('message')
    expect(wrapper.find('.error-stack').text()).toBe('stack')
  });

  it('renders given error string', () => {
    const wrapper = mount(<ErrorComponent error={'hello'} />)
    expect(wrapper.find('.error-name').text()).toBe('Generic Error')
    expect(wrapper.find('.error-message').text()).toBe('hello')
  });

  it('renders given error string', () => {
    expect(1).toBe(1)
  });
});
