
import { ReactLike } from './createElement'
import { indent as indentImpl } from '../misc/misc';
import { RenderConfig } from './jsx';

interface StyleProps {
  classes: { [name: string]: Partial<CSSStyleDeclaration> },
  renderConfig?: RenderConfig
}

/** Render the <style> tag with all classes and styles inside. */
export const Style = (props: StyleProps) => {
  function indent(n: number): string {
    return props.renderConfig && props.renderConfig.indent ? indentImpl(n) : ''
  }
  return <style>{Object.keys(props.classes).map(c =>
    /* class selector */
    `${indent(1)}.${c} {
      ${Object.keys(props.classes[c]).map(p =>
        /* property values */
      `${indent(2)}${p}: ${props.classes[c][p as any]};`
    ).join(`\n`)}
      ${indent(1)}}`).join(';\n')}
  </style>
}