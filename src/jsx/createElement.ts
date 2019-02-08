import { ElementLikeImpl, isNode, isReactLikeComponent, TextNodeLikeImpl, isElementLike } from './elementImpl';
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

const Module = {
  // _domIds: {} as { [k: string]: ElementLike },
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
          // let tlkKeyExtraCode = ''
          // if (!(Module._renderConfig&&Module._renderConfig.disableDomIdsAssociation)) { // TODO: users could add other properties to this besides this.props, for ex, this.state, or even methods.
            // const rlkey = element.attrs && element.attrs['data-rlk'] || `${Module._counter++}`
            // element.setAttribute('data-rlk', rlkey)
            // element.setAttribute('data-data', )
            // Module._domIds[rlkey] = element
            // tlkKeyExtraCode = `__ReactLike_Root_Ids['${rlkey}'] = {}`
          // }
          const code = `(${value.toString()}).apply(this, arguments)`
          const escaped = code.replace(/\"/gmi, '&quot;');
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
        element.appendChild(child)
      }
      else if (Array.isArray(child)) {
        child.forEach(c => {
          if (typeof c === 'string') {
            element.appendChild(new TextNodeLikeImpl(c))
          }
          else if (isNode(c)) {
            element.appendChild(c)
          }
          else {
            debug(`Child is not a node or string: ${c} , tag: ${tag}`)
          }
        })
      }
      else {
        element.appendChild(new TextNodeLikeImpl(child))
      }
    })
    return element
  },

  _renderConfig: undefined as RenderConfig | undefined,

  render(el: JSX.Element, config: RenderConfig = {}): string {
    // if (!Module._renderConfig) {
    //   ReactLike.registerClientCode({
    //     name: 'ReactLike rendered element root ids',
    //     code: `__ReactLike_Root_Ids={};`
    //   })
    // }
    // Module._renderConfig = config || {}
    // const renderedNode = `${(el as any as NodeLike).render(config)}`
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

  // _counter: 0

  indent: function(config: RenderConfig) {
    // return config.indent ? _indent(config.indentLevel || 0, config.indentTabSize || 2) : ''
    // const tabSize = config.indentTabSize || 2
    const L = (config.indentLevel || 0) * (config.indentTabSize || 2)
    const a=[]
    for (let i = 0; i < L; i++) {
      a.push(' ')
    }
    return a.join('')
  },

}

const clientCode: ClientCode[] = []

export const ReactLike: ReactLikeType = Module

//@ts-ignore
ReactLike = Module // creates a global variable needed so emitted .js calls work. See tsconfig.json `"jsxFactory": "ReactLike.createElement",`
