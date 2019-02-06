import { ElementLikeImpl, isNode, isReactLikeComponent, TextNodeLikeImpl } from './elementImpl';
import { ClientCode, ElementLike, NodeLike, ReactLike as ReactLikeType, ReactLikeAttrs, ReactLikeChild, ReactLikeTag, RenderConfig } from './jsx';
import * as jsx from './declarations/domElementDeclarations'



const throwOnUnrecognized = false
function debug(err: string) {
  if (throwOnUnrecognized) {
    throw err
  }
  else {
    console.error(err);

  }
}

const Module: ReactLikeType = {
  createElement(tag: ReactLikeTag, attrs: ReactLikeAttrs = {}, ...children: ReactLikeChild[]): ElementLike {
    var element: ElementLike;
    if (typeof tag === 'string') {
      element = new ElementLikeImpl(tag)
    }
    else {
      if (isReactLikeComponent(tag)) {
        element = new tag({ ...attrs, children: children }).render()
      }
      else {
        element = tag({ ...attrs, children: children })
      }
      attrs = {}
    }
    for (let name in attrs) {
      if (name && attrs.hasOwnProperty(name)) {
        var value: any = attrs[name]
        if (typeof value === 'boolean') {
          if (value === true) {
            element.setAttribute(name, name)
          }
        }
        else if (typeof value === 'function') {
          const code = `(${value.toString()}).apply(this, arguments)`
          const escaped = escapeHtmlAttribute(code)
          element.setAttribute(name, escaped)
        }
        else if (value !== false && value != null) {
          if (name === 'className') {
            if (typeof value === 'string') {
              element.setAttribute('class', value)
            }
            else if (Array.isArray(value) && value.length && typeof value[0] === 'string') {
              element.setAttribute('class', value.join(' '))
            }
            else {
              debug(`unrecognized className value ${typeof value} ${value}`)
            }
          }
          else {
            element.setAttribute(name, value.toString())
          }
        }
        else if (typeof value === 'object') {
          if (name === 'style') {
            element.setAttribute('style', `${Object.keys(value).map(p => `${p}: ${value[p]}`).join('; ')}`)
          }
          else if (name === 'dangerouslySetInnerHTML' && value && typeof value.__html === 'string') {
            element.dangerouslySetInnerHTML(value.__html)
          }
          else {
            debug(`unrecognized object attribute "${name}" - the only object attribute supported is "style"`)
          }
        }
        else {
          debug(`unrecognized attribute "${name}" with type ${typeof value}`)
        }
      }
    }

    children.filter(c => c).forEach(child => {
      if (isNode(child)) {
        element.appendChild(child);
      }
      else if (Array.isArray(child)) {
        child.forEach(c => {
          if (typeof c === 'string') {
            element.appendChild(new TextNodeLikeImpl(c));
          }
          else if (isNode(c)){
            element.appendChild(c);
          }
          else {
            debug(`Child is not a node or string: ${c} , tag: ${tag}`)
          }
        })
      }
      else {
        element.appendChild(new TextNodeLikeImpl(child));
      }
    })
    return element
  },

  render(el: JSX.Element, config: RenderConfig = {}): string {
    return `
${config.renderClientCode ? `<script>${Module.getClientCode().map(c => c.code).join('\n')}</script>` : ``}
${(el as any as NodeLike).render(config)}
`.trim()
  },

  registerClientCode(f: ClientCode) {
    clientCode.push(f)
  },

  getClientCode(): ClientCode[] {
    return clientCode
  },


} as ReactLikeType

const clientCode: ClientCode[] = []

export const ReactLike: ReactLikeType = Module


//@ts-ignore
ReactLike = Module // creates a global variable needed so emitted .js calls work. See tsconfig.json `"jsxFactory": "ReactLike.createElement",`



export function escapeHtmlAttribute(code: string) {
  return code.replace(/\"/gmi, '&quot;');
}
export function unEscapeHtmlAttribute(code: string) {
  return code.replace(/\&quot\;/gmi, '"');
}

