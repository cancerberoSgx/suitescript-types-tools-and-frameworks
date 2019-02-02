import { ElementNodeLikeImpl, isReactLikeComponent, isNode, TextNodeLikeImpl } from './elementImpl';
import { ReactLikeTag, ReactLike as ReactLikeType, ReactLikeAttrs, ReactLikeChild, ElementNodeLike, RenderConfig, NodeLike } from './jsx';
import * as decls from './declarations/domElementDeclarations' // this needs to be here!

const Module: ReactLikeType = {
  createElement(tag: ReactLikeTag, attrs: ReactLikeAttrs = {}, ...children: ReactLikeChild[]): ElementNodeLike {
    const originalAttrs = attrs;
    var element: ElementNodeLike;
    if (typeof tag === 'string') {
      element = new ElementNodeLikeImpl(tag);
    }
    else {
      if (isReactLikeComponent(tag)) {
        element = new tag({ ...attrs, children: children }).render();
      }
      else {
        element = tag({ ...attrs, children: children });
      }
      attrs = {};
    }
    for (let name in attrs) {
      if (name && attrs.hasOwnProperty(name)) {
        var value: any = attrs[name];
        if (value === true) {
          element.setAttribute(name, name);
        }
        else if (typeof value === 'function') {
          throw 'Function attributes not supported';
        }
        else if (value !== false && value != null && typeof value !== 'object') {
          if (name === 'className') {
            name = 'class';
          }
          element.setAttribute(name, value.toString());
        }
        else if(typeof value ==='object'){
          if(name === 'style'){
            element.setAttribute('style', `${Object.keys(value).map(p=>`${p}: ${value[p]}`).join('; ')}`)
          }
          else {
            throw `unrecognized object attribute "${name}" - the only object attribute supported is "style"`
          }
        }
        else {
          throw `unrecognized attribute "${name}" with type ${typeof value}`
        }
      }
    }
    children.filter(c => c).forEach(child => {
      if (isNode(child)) {
        element.appendChild(child);
      }
      else if (Array.isArray(child)) {
        child.forEach(c => {
          if (!isNode(c)) {
            throw new Error('Child is not a node: ' + c + ', tag: ' + tag + ', originalAttrs: ' + originalAttrs);
          }
          element.appendChild(c);
        });
      }
      else {
        element.appendChild(new TextNodeLikeImpl(child));
      }
    });
    return element;
  },
  render(el: JSX.Element, config?: RenderConfig): string {
    return (el as any as NodeLike).render(config);
  }
} as ReactLikeType;


export const ReactLike: ReactLikeType = Module;


//@ts-ignore
ReactLike = Module; // creates a global variable needed so emitted .js calls work. See tsconfig.json `"jsxFactory": "ReactLike.createElement",`


