"use strict";
// import { formatDate } from "../../misc/formatDate";
// import { array } from '../../misc/misc';
// import { ReactLike } from '../createElement';
// import { StatelessComponent } from '../StatelessComponent';
// export interface BindInputValueProps {
//   bindInputId?: string
//   bindListenerId?: string
// }
// type InputValue = string | number | Date | boolean | string[] | number[]
// export class BindInputValue extends StatelessComponent<BindInputValueProps>{
//   render(): JSX.Element {
//     const c = this.firstChildElement()
//     if (c && this.props.bindInputId) {
//       c.attrs['data-bind-value-id'] = this.props.bindInputId
//     }
//     else if (c && this.props.bindListenerId) {
//       c.attrs['data-bind-value-id'] = this.props.bindListenerId
//     }
//     return <span></span>
//   }
//   public checkRegisteredCode(): any {
//     if (!BindInputValue.registered) {
//       ReactLike.registerClientCode({
//         name: 'getBindInputValue',
//         code: getBindInputValue.toString(),
//         description: `Gets the current input value declared with wrapper <BindInputValue><input...`
//       })
//       ReactLike.registerClientCode({
//         name: 'formatDate', 
//         code: `${formatDate.toString()}; var dateUtil_1 = {formatDate: formatDate}; `,
//         description: `Gets the current input value declared with wrapper <BindInputValue><input...`
//       })
//       ReactLike.registerClientCode({
//         name: 'array', 
//         code: `${array.toString()}; var misc_1 = {array: array}; `,
//         description: ``
//       })
//       BindInputValue.registered = true
//     }
//   }
//   protected static registered = false
// }
// function getBindInputValue<T extends InputValue= string>(listenerEl: HTMLElement, config: {
//   asString?: boolean,
// } = {}): T | undefined {
//   const id = listenerEl.getAttribute('data-bind-value-id')
//   const el = document.querySelector<HTMLInputElement>(`[data-bind-value-id="${id}"]`)
//   if (el) {
//     if (el.type === 'date') {
//       return config.asString ? formatDate(el.valueAsDate, 'MM/DD/YYYY') : el.valueAsDate
//     }
//     else if (el.type === 'number') {
//       return config.asString ? (el.valueAsNumber + '') : el.valueAsNumber as any
//     }
//     else if (el.type === 'checkbox') {
//       return config.asString ? (el.checked ? 'T' : 'F') : !!el.checked as any
//     }
//     else if (el.tagName.toLowerCase() === 'select') {
//       const selectedOptions = (el as any as HTMLSelectElement).selectedOptions
//       if (selectedOptions && !el.getAttribute('multiple')) {
//         return config.asString ? (selectedOptions.item(0)!.value + '') : selectedOptions.item(0)!.value as any
//       }
//       else if ((selectedOptions && el.getAttribute('multiple')) || !selectedOptions.length) {
//         const a = array(selectedOptions.length).map(i => selectedOptions.item(i)!.value)
//         return config.asString ? JSON.stringify(a) : a as any
//       }
//     }
//     return config.asString ? (el.value + '') : el.value as any
//   }
// }
