import { describe, expect, fail, it, skip } from "../../spec/index";
import { ReactLike } from '../createElement'
import { StatelessComponent } from '../StatelessComponent';

export function jsxTests() {

  describe('ReactLike render', () => {
    it('support custom tags as functions', () => {
      interface Apple { color: string }
      const Apple = (props: { apple: Apple }) => <div className="apple">I'm a {props.apple.color} apple</div>
      const Main = (props: { apples: Apple[] }) => <div>
        <h1>A list of apples</h1>
        <ul>
          <li>{props.apples.map(a => <Apple apple={a}></Apple>)}</li>
        </ul>
      </div>
      const apples = [{ color: 'red' }, { color: 'blue' }]
      const s = ReactLike.render(<Main apples={apples}></Main>, { indent: true })
      expect(s).toContain('<div class="apple">')
      expect(s).toContain(`I'm a red apple`)
      // console.log(s)
    })

    it('supports typed css properties', () => {
      const Comp = () => <div className="apple" style={{ border: '1px solid pink', background: 'blue' }}>i'm pink</div>
      const Main = () => <div>
        <Comp></Comp>
      </div>
      const s = ReactLike.render(<Main></Main>, { indent: true })
      expect(s).toContain('style="border: 1px solid pink; background: blue"')
      expect(s).toContain(`i'm pink`)
      // console.log(s)
    })

    it('stateless component', () => {
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
      const s = ReactLike.render(main, { indent: true })
      expect(s).toContain('Name: flo')
      expect(s).toContain('Name: seba')
      // console.log(s);
    })

    it('function attributes', () => {
      const main = <div>
        <button onClick={e => { alert("foo\nhello") }}>click me</button>
      </div>
      const s = ReactLike.render(main, { indent: true })
      // console.log(s); // to be tested in the browser
    })

    // console.log(ReactLike.render(<Main apples={apples}></Main>, { indent: true }));
  })


}