import { ReactWrapper } from 'enzyme';
import { wait } from "./waitUtil";

export async function click(wrapper: ReactWrapper, dontUpdate = false) {
  return trigger(wrapper, 'click', dontUpdate);
}
export async function trigger(wrapper: ReactWrapper, event: string, dontUpdate = false) {
  dontUpdate || wrapper.update();
  wrapper
    // .filterWhere(w => !!w && !!w.getDOMNode())
    .forEach(w => {
      w.simulate(event, {
        currentTarget: w.getDOMNode(),
        ...clickEventAttributes
      });
    });
  if (!dontUpdate) {
    await wait(10);
    wrapper.update();
  }
  return wrapper;
}
export async function change(wrapper: ReactWrapper, dontUpdate = false) {
  return trigger(wrapper, 'change', dontUpdate);
}
const clickEventAttributes = {
  defaultPrevented: false,
  preventDefault() { this.defaultPrevented = true; },
  metaKey: null,
  altKey: null,
  ctrlKey: null,
  shiftKey: null,
  button: 0
};
export async function check(wrapper: ReactWrapper, checked: boolean) {
  wrapper.getDOMNode().setAttribute('checked', checked ? 'checked' : '');
  await change(wrapper);
  await click(wrapper);
}
export async function value(wrapper: ReactWrapper, value: string) {
  wrapper.getDOMNode().setAttribute('value', value);
  await change(wrapper);
  await click(wrapper);
}
