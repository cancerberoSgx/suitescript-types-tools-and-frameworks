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
        ...clickEventAttributes,
        currentTarget: w.getDOMNode(),
        srcElement: w.getDOMNode(),
        target: w.getDOMNode(),
        toElement: w.getDOMNode(),
        type: event,
        view: window,

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
  currentTarget: document,
  composed: true,
  which: 0,
  isTrusted: true,
  cancelBubble: false,
  cancelable: true,
  bubbles: true,
  returnValue: true,
  metaKey: null,
  altKey: null,
  ctrlKey: null,
  shiftKey: null,
  button: 0
};
export async function check(wrapper: ReactWrapper, checked: boolean) {
  wrapper.update()
  // await wait(10);
  // console.log('check 1' ,  {checked, check: html(wrapper), checkedAttr: wrapper.getDOMNode().getAttribute('checked')});


  if(checked){
    wrapper.getDOMNode().setAttribute('checked', 'checked');
    (wrapper.getDOMNode() as any).checked = true
  }
  else {
    // (wrapper.getDOMNode() as any).checked = undefined
    wrapper.getDOMNode().removeAttribute('checked');
    (wrapper.getDOMNode() as any).checked = false
    // wrapper.getDOMNode().setAttribute('checked', '');

  }
  // (wrapper.getDOMNode() as any).checked=checked

  // (wrapper.getDOMNode() as any).checked = checked
  // wrapper.update()
  // console.log('check 2' ,  {checked, check: html(wrapper), checkedAttr: wrapper.getDOMNode().getAttribute('checked'), checkedProp: (wrapper.getDOMNode() as any).checked});

  await change(wrapper);
  // await click(wrapper);
  // wrapper.simulate('change', eventta)

  // wrapper.update()
  // await wait(10);
  // console.log('check 3' ,  {checked, check: html(wrapper), checkedAttr: wrapper.getDOMNode().getAttribute('checked')});
  // return wrapper.update()

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
