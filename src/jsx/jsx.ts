export * from './createElement'

export type ReactLikeAttrs<ClassName extends string = string> = {
  [k: string]: any
  className?: ClassName|ClassName[]
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
  attrs: { [name: string]: any }
  children: NodeLike[]
  setAttribute(name: string, value: string): void
  dangerouslySetInnerHTML(s: string):void
  appendChild(c: NodeLike): void
}

export interface RenderConfig {
  indent?: boolean
  indentLevel?: number
  indentTabSize?: number
  /** render also the required utilities ClientCode registered by custom utilities. It will be rendered once, before the given root element */
  renderClientCode?: boolean
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

