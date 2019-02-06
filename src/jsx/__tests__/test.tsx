import { indent } from '../../misc/misc';
import { escapeHtmlAttribute, ReactLike } from "../createElement";
import { ReactLikeChild } from '../jsx';
import { StatelessComponent, StatelessComponentProps } from '../StatelessComponent';
import { writeFileSync } from 'fs';
import { Bind } from '../util/Bind';

function cssTest1() {
  const Comp = () => <div className="apple" style={{ border: '1 px solid pink', background: 'blue' }}>i'm pink</div>
  const Main = () => <div>
    <Comp></Comp>
  </div>
  const s = ReactLike.render(<Main></Main>, { indent: true })
  console.log(s)
}

export function reactLikeText() {
  interface Apple { color: string }
  const Apple = (props: { apple: Apple }) => <div className="apple">I'm a {props.apple.color} apple</div>
  const List = (props: { children: any[] }) => <ul></ul>
  const Main = (props: { apples: Apple[] }) => <div>
    <h1>A list of apples</h1>
    <List>
      {props.apples.map(a => <Apple apple={a}></Apple>)}
    </List>
  </div>
  const apples = [{ color: 'red' }, { color: 'blue' }]
  console.log(ReactLike.render(<Main apples={apples}></Main>, { indent: true }));
}


export function statelessComponentTest() {
  interface PersonModel {
    name: string,
    friends: PersonModel[]
  }
  class Person extends StatelessComponent<PersonModel>{
    render(): JSX.Element {
      return <div>
        <div>Name: {this.props.name}</div>
        <div>Friends:
        <ul>
            {this.props.friends.map(f => <Person name={f.name} friends={f.friends}></Person>)}
          </ul>
        </div>
      </div>
    }
  }
  const p0 = { name: 'flo', friends: [] }
  const p1 = { name: 'seba', friends: [p0] }
  const persons: PersonModel[] = [p0, p1]
  const main = <div>
    <p>Some people:</p>
    {persons.map(p => <Person name={p.name} friends={p.friends}></Person>)}
  </div>
  console.log(ReactLike.render(main, { indent: true }));
}


export function functionAttributes() {
  const main = <div>
    <button onClick={e => { alert('foo') }}>click me</button>
    <button onClick={e => { alert("foo\nhello") }}>click me22</button>
  </div>
  // const s = ReactLike.render(main, { indent: true })
  writeFileSync('src/jsx/__tests__/test.html', renderInHTMLDocument(main))
  // console.log(s);
}
functionAttributes()

export function renderInHTMLDocument(e: JSX.Element): string {
  return `
  <!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>title</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  ${ReactLike.render(e, { indent: true, indentLevel: 1 , renderClientCode: true})}
</body>
</html>
`
}

export function moreOnCss() {
  interface Class extends Partial<CSSStyleDeclaration> { }
  interface IClasses {
    [k: string]: Class
    button: Class,
    primaryButton: Class
  }
  const button: Class = {
    border: '2px solid pink',
    padding: '5px'
  }
  // this class extends another:
  const primaryButton: Class = {
    ...button,
    color: 'red',
    fontWeight: 'bolder'
  }
  const styles: IClasses = {
    button,
    primaryButton
  }
  // this tag will force users to use discrete classNames only
  const Button = (props: { className?: 'button' | 'primaryButton', children?: ReactLikeChild | ReactLikeChild[] }) => <button className={props.className || ''}></button>

  const main = <div><Button className="button">click me</Button></div>

  // this will render the <style> tag with all classes and styles inside.
  const Styles = <style>{Object.keys(styles).map(c =>
    `${indent(1)}.${c}: {
${Object.keys(styles[c]).map(p => `${indent(2)}${p}: ${styles[c][p as any]};`).join(`\n`)}
${indent(1)}}`).join('\n')}
  </style>

  const s = `
${ReactLike.render(Styles, { indent: true })}
${ReactLike.render(main, { indent: true })}
`
  console.log(s);
}
// moreOnCss()


export function customComponentAffectChild() {
  interface Props {
    data: { [k: string]: string }
  }
  class Data extends StatelessComponent<Props>{
    render(): JSX.Element {
      const el = <span></span>
      // if(!this.props.children){return el }
      this.addDataToChildren('addedfromparent', escapeHtmlAttribute(JSON.stringify(this.props.data)), this.props);
      return el
    }
    addDataToChildren(dataName: string, data: string, props: StatelessComponentProps<any>) {
      this.childrenElementsAsArray().forEach(c => {
        c.attrs[`data-${dataName}`] = data
      });
    }
  }
  const main = <Data data={{ g: 'asd' }}><span className="child1">hello</span></Data>
  console.log(ReactLike.render(main, { indent: true }));

  interface BindValueProps {
    bindId: string
  }
  class BindInputValue extends StatelessComponent<BindValueProps>{
    protected static counter = 0
    render(): JSX.Element {
      BindInputValue.checkRegisteredCode()
      const c = this.firstChildElement()
      if (c && c.tag === 'input') {
        c.attrs['data-bind-value-id'] = 'bind-value-' + BindInputValue.counter++
      }
      return <span></span>
    }
    private static checkRegisteredCode(): any {
      function getBindInputValue(id: string): string | undefined {
        const el = document.querySelector<HTMLInputElement>(`[data-bind-value-id]="${id}"`)
        if (el) {
          return el.value
        }
      }
      if (!BindInputValue.registered) {
        ReactLike.registerClientCode({
          name: 'BindInputValue',
          code: getBindInputValue.toString(),
          description: `Gets the current input value declared with wrapper <BindInputValue><input...`
        })
        BindInputValue.registered = true
      }
    }
    private static registered = false
  }

  const test = <BindInputValue bindId="id1"><input></input></BindInputValue>
  const s = ReactLike.render(test, { indent: true })
  console.log(s, ReactLike.getClientCode().map(c => c.code).join('\n'));


  // writeFileSync('src/jsx/__tests__/test.html',renderInHTMLDocument(test))

}
// customComponentAffectChild()





declare function getBindInputValue<T extends InputValue, InputValue extends string | number | Date | boolean | string[] | number[]=  string | number | Date | boolean | string[] | number[], ElType extends HTMLInputElement & HTMLSelectElement = HTMLInputElement & HTMLSelectElement>(listenerElementOrInputElementOrKeyOrInputElementSelector: ElType | string, config?: {
  asString?: boolean,
}): T | undefined
declare function getBindData<T>(key: string): T | undefined
declare function getBindDataOrThrow<T>(key: string): T

export function testBind() {




  // interface Props {onBindEvent: (e:any)=>any}
  // class Custom<State extends {}={}> extends StatelessComponent<Props>{

  //   stateGet(s:string):Raro
  //   constructor(props: Props, protected state: State){
  //     super(props) 
  //   }
  //   render(): JSX.Element {      
  //     return <p>{this.stateGet('value')}</p>
  //   }
  // }



  const obj = { foo: 1234, bar: [1, 2, 3, 4] }
  const m = <div>
    <Bind name="1" data={obj}></Bind>
    <button onClick={e => {
      const d = getBindDataOrThrow<typeof obj>('1')
      const v = getBindInputValue<string>('i1')
      alert(`${d.foo} - ${v}`)
    }}>click</button>


<Bind name="i1" ><input></input></Bind>  
<Bind name="2"><input></input></Bind>

{/* <Bind emit="2"><Custom onBindEvent={e=>{this.setState({...this.getState(), value: e.inputValue})}}></Custom></Bind> */}
idea!

{/* <input></input> */}

  </div>
  writeFileSync('src/jsx/__tests__/test.html', renderInHTMLDocument(m))


  // writeFileSync('src/jsx/__tests__/test.html',renderInHTMLDocument(test))

// customComponentAffectChild()




}

testBind()