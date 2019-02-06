export * from './createElement'

export type ReactLikeAttrs = {
  [k: string]: any
}

export type ReactLikeChild = ReactLikeElement | string;

export type ReactLikeProps = ReactLikeAttrs & {
  children: ReactLikeChild[];
}

export type ReactLikeValue = string | boolean | number

export type ReactLikeElement = any // HTMLElement

export type ReactLikeComponent = {
  new(props: ReactLikeProps): ReactLikeComponent
  render(): ReactLikeElement
}

export type ReactLikeFunction = (props: ReactLikeProps) => ReactLikeElement

export type ReactLikeTag = string | ReactLikeComponent | ReactLikeFunction

export interface NodeLike {
  render(config?: RenderConfig): string
}

export interface TextNodeLIke extends NodeLike {
  content: string
}

export interface ElementLike extends NodeLike {
  tag: string
  attrs: { [name: string]: string }
  children: NodeLike[]
  setAttribute(name: string, value: string): void
  dangerouslySetInnerHTML(s: string):void
  appendChild(c: NodeLike): void
}

export interface RenderConfig {
  indent?: boolean
  indentLevel?: number
  indentTabSize?: number
}

export interface ReactLike {
  createElement(tag: ReactLikeTag, attrs: ReactLikeAttrs, ...children: ReactLikeChild[]): ElementLike
  render(el: JSX.Element, config?: RenderConfig): string
  registerClientCode(f: ClientCode): void
  getClientCode(): ClientCode[]
}

export interface ClientCode {
  name?: string, 
  code: string,
  description?: string
}

