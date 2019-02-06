import { indent as _indent } from '../misc/misc'
import { ReactLikeComponent, NodeLike, ElementLike, TextNodeLIke, RenderConfig } from './jsx'


export function isReactLikeComponent(c: any): c is ReactLikeComponent {
  return c.prototype && c.prototype.render
}

export function isNode(n: any): n is NodeLike {
  return isTextNodeLike(n) || isElementLike(n)
}

export function isElementLike(n: any): n is ElementLike {
  return n && n.setAttribute
}

export function isTextNodeLike(n: any): n is TextNodeLIke {
  return n && n.content && !isElementLike(n)
}

export class TextNodeLikeImpl implements TextNodeLIke {
  constructor(public content: string) { }
  render(config: RenderConfig = defaultRenderConfig): string {
    return `${this.content}`
  }
}

export class ElementLikeImpl implements ElementLike {
  private innerHtml: string | undefined
  attrs: {
    [name: string]: string
  }
  children: NodeLike[]
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
  render(config: RenderConfig = defaultRenderConfig): string {
    const newLine = config.indent ? `\n` : ``
    const content = this.innerHtml || `${newLine}${indent({ ...config, indentLevel: (config.indentLevel || 0) + 1 })}${this.children
      .map(c => `${c.render({ ...config, indentLevel: (config.indentLevel || 0) + 1 })}`).
      join('')}${newLine}${indent(config)}`
    return `<${this.tag}${Object.keys(this.attrs).map(a => ` ${a}="${this.attrs[a]}"`).join('')}>${content}</${this.tag}>`
  }
  dangerouslySetInnerHTML(s: string): void {
    this.innerHtml = s
  }
}

const defaultRenderConfig = { indentLevel: 0, indentTabSize: 2 }

function indent(config: RenderConfig = defaultRenderConfig) {
  return config.indent ? _indent(config.indentLevel || 0, config.indentTabSize || 2) : ''
}


