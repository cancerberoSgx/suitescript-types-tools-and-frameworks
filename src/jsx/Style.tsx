
import { ReactLike } from './createElement'
import { indent as indentImpl } from '../misc/misc';
import { RenderConfig } from './jsx';



/** build a styles and classnames from a class styles mapped object so is easy to type-check classnames and use them  */
export function Styles<T extends {[k:string]: ClassRule}>(styles: T): {styles: T, classes: {[k in keyof T]: k}} {
  const classes: any = {}
  Object.keys(styles).forEach(k=>{
    classes[k] = k
  })
  return {
    styles, classes
  }
}

export type ClassRule = Partial<CSSStyleDeclaration> & {selectorPostfix?: string}
interface StyleProps {
  classes: { [name: string]: ClassRule },
  renderConfig?: RenderConfig
}

/** Render the <style> tag with all classes and styles inside. */
export const Style = (props: StyleProps) => {
  function indent(n: number): string {
    return props.renderConfig && props.renderConfig.indent ? indentImpl(n) : ''
  }
  return <style>{Object.keys(props.classes).map(c =>
    /* class selector */
    `${indent(1)}.${c}${(props.classes[c]&& props.classes[c].selectorPostfix ? props.classes[c].selectorPostfix : '')} {
      ${Object.keys(props.classes[c]).map(p =>
        /* property values */
      `${indent(2)}${p}: ${props.classes[c][p as any]};`
    ).join(`\n`)}
      ${indent(1)}}`).join(';\n')}
  </style>
}