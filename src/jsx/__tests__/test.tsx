import { ReactLike } from "../createElement";
import { StatelessComponent, StatelessComponentProps } from '../StatelessComponent';

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
   <button onClick={e=>{alert('foo')}}>click me</button>
        <button onClick={e => { alert("foo\nhello") }}>click me22</button>
  </div>
  const s = ReactLike.render(main, { indent: true })
  console.log(s);
}


functionAttributes()


// this test can be executed in node with 
// npx ts-node -P tsconfig-node.json src/experiments/reactLike/test.tsx
// and un comment the following line:
// reactLikeText()