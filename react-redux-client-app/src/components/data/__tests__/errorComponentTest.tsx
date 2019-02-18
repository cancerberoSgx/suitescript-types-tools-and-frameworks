import { mount } from 'enzyme';
import * as React from 'react';
import { ErrorComponent } from '../errorComponent';
import { initTest } from '../../../utils/test';

describe('ErrorComponent', () => {

  beforeAll(()=>{
    initTest()
  })

  it('renders given error object', () => {
    const wrapper = mount(<ErrorComponent error={{ message: 'message', name: 'NAME', stack: 'stack' }} />)
    expect(wrapper.find('.error-name').text()).toBe('NAME')
    expect(wrapper.find('.error-message').text()).toBe('message')
    expect(wrapper.find('.error-stack').text()).toBe('stack')
    wrapper.unmount()
  });

  it('renders given error string', () => {
    const wrapper = mount(<ErrorComponent error={'hello'} />)
    expect(wrapper.find('.error-name').text()).toBe('Generic Error')
    expect(wrapper.find('.error-message').text()).toBe('hello')
    wrapper.unmount()
  });

});
