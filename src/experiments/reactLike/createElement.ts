import * as decls from './declarations/domElementDeclarations'
import { repeat, indent as _indent } from '../../misc/misc';

export type ReactLikeAttrs = {
  [k: string]: any;
};
export type ReactLikeChild = ReactLikeElement | string;
export type ReactLikeProps = ReactLikeAttrs & {
  children: ReactLikeChild[];
};
export type ReactLikeValue = string | boolean | number;
export type ReactLikeElement = any // HTMLElement;
export type ReactLikeComponent = {
  new(props: ReactLikeProps): ReactLikeComponent;
  render(): ReactLikeElement;
};
export type ReactLikeFunction = (props: ReactLikeProps) => ReactLikeElement;
export type ReactLikeTag = string | ReactLikeComponent | ReactLikeFunction

interface NodeLike {
  render(config?: RenderConfig): string
}
interface TextNodeLIke extends NodeLike {
  content: string
}
interface ElementNodeLike extends NodeLike {
  tag: string
  attrs: { [name: string]: string }
  children: NodeLike[]
  setAttribute(name: string, value: string): void
  appendChild(c: NodeLike): void
}
interface RenderConfig {
  indent?: boolean
  indentLevel?: number
  indentTabSize?: number
}
interface ReactLike {
  createElement(tag: ReactLikeTag, attrs: ReactLikeAttrs, ...children: ReactLikeChild[]): ElementNodeLike
  render(el: JSX.Element, config: RenderConfig): string
}



function isReactLikeComponent(c: any): c is ReactLikeComponent {
  return c.prototype && c.prototype.render
}
function isNode(n: any): n is NodeLike {
  return n && n.render
}
function isElementNodeLIke(n: any): n is ElementNodeLike {
  return n && n.setAttribute
}
function isTextNodeLIke(n: any): n is TextNodeLIke {
  return n && !n.setAttribute && n.content
}
class TextNodeLikeImpl implements TextNodeLIke {
  constructor(public content: string) { }
  render(config: RenderConfig = defaultRenderConfig): string { 
    return `${this.content}` 
  }
}

class ElementNodeLikeImpl implements ElementNodeLike {
  attrs: { [name: string]: string; };
  children: NodeLike[];
  constructor(public tag: string) {
    this.attrs = {}
    this.children = []
  }
  setAttribute(name: string, value: string): void {
    this.attrs[name] = value
  }
  appendChild(c: NodeLike): void {
    this.children.push(c)
  }
  render(config: RenderConfig=defaultRenderConfig): string {
    const newLine = config.indent?`\n`:``
    return `<${this.tag}${
      Object.keys(this.attrs).map(a => ` ${a}="${this.attrs[a]}"`).join('')}>${newLine}${indent({...config, indentLevel: (config.indentLevel||0)+1})}${
        this.children.map(c =>`${c.render({ ...config, indentLevel: (config.indentLevel||0) + 1 })}`).join('')
      }${newLine}${indent(config)}</${this.tag}>`
  }
}
const defaultRenderConfig = {indentLevel: 0, indentTabSize: 2}
function indent(config: RenderConfig = defaultRenderConfig) {
  return config.indent ? _indent(config.indentLevel || 0, config.indentTabSize || 2) : ''
}


const Module: ReactLike = {

  createElement(tag: ReactLikeTag, attrs: ReactLikeAttrs = {}, ...children: ReactLikeChild[]): ElementNodeLike {
    const originalAttrs = attrs;
    var element: ElementNodeLike;
    if (typeof tag === 'string') {
      element = new ElementNodeLikeImpl(tag)
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
          throw 'Function attributes not supported'
        }
        else if (value !== false && value != null && typeof value !== 'object') {
          if (name === 'className') {
            name = 'class';
          }
          element.setAttribute(name, value.toString());
        }
        else {
          console.log('ignoring attribute type ', typeof value, value);
        }
      }
    }
    children.filter(c => c).forEach(child => {
      if (isNode(child)) {
        element.appendChild(child)
      }
      else if (Array.isArray(child)) {
        child.forEach(c => {
          if (!isNode(c)) {
            throw new Error('Child is not a node: ' + c + ', tag: ' + tag + ', originalAttrs: ' + originalAttrs);
          }
          element.appendChild(c)
        });
      }
      else {
        element.appendChild(new TextNodeLikeImpl(child))
      }
    });
    return element;
  },

  render(el: JSX.Element, config?: RenderConfig): string {
    return (el as any as NodeLike).render(config)
  }
} as ReactLike



//@ts-ignore
ReactLike = Module

export const ReactLike = Module

