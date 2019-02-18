import { ReactWrapper } from 'enzyme';
import { wait, print } from ".";
import { html } from './text';

export async function click(wrapper: ReactWrapper, dontUpdate = false) {
  return trigger(wrapper, 'click', dontUpdate);
}
export async function trigger(wrapper: ReactWrapper, event: string, dontUpdate = false) {
  dontUpdate || wrapper.update();
  wrapper
    .filterWhere(w => !!w && !!w.getDOMNode())
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
  // wrapper.update()
  // await wait(10);
  console.log('check 1' ,  {checked, check: html(wrapper), checkedAttr: wrapper.getDOMNode().getAttribute('checked')});


  if(checked){
    wrapper.getDOMNode().setAttribute('checked', '');
    // (wrapper.getDOMNode() as any).checked = 'checked'
  }
  else {
    wrapper.getDOMNode().removeAttribute('checked');
    // (wrapper.getDOMNode() as any).checked = undefined
    // wrapper.getDOMNode().setAttribute('checked', '');
  }
  // (wrapper.getDOMNode() as any).checked=checked

  // (wrapper.getDOMNode() as any).checked = checked
  // wrapper.update()
  console.log('check 2' ,  {checked, check: html(wrapper), checkedAttr: wrapper.getDOMNode().getAttribute('checked')});

  await change(wrapper, true);
  await click(wrapper, true);

  await wait(10);
  console.log('check 3' ,  {checked, check: html(wrapper), checkedAttr: wrapper.getDOMNode().getAttribute('checked')});
// (wrapper.getDOMNode() as any).checked=checked

// if(checked){
//   wrapper.getDOMNode().setAttribute('checked', 'checked');
// }
// else {
//   wrapper.getDOMNode().removeAttribute('checked')
//   // wrapper.getDOMNode().setAttribute('checked', '');
// }

  // if(checked){
  //   wrapper.getDOMNode().setAttribute('checked', 'checked');
  // }
  // else {
  //   // wrapper.getDOMNode().setAttribute('checked', '');
  //   wrapper.getDOMNode().removeAttribute('checked')
  //   console.log({wrapper: html(wrapper)});
  // }
}

export async function value(wrapper: ReactWrapper, value: string) {
  wrapper.getDOMNode().setAttribute('value', value);
  await change(wrapper);
  await click(wrapper);
}
