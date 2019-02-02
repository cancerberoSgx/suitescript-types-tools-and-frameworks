import { ReactLike, ReactLikeElement } from './createElement'

interface Apple { color: string }
const Apple = (props: { apple: Apple }) => <div className="apple">I'm a {props.apple.color} apple</div>
const List = (props: { children: any[] }) => <ul></ul>
const Main = (props: { apples: Apple[] }) => <div>
  <h1>A list of apples</h1>
  <List>
    {props.apples.map(a => <Apple apple={a}></Apple>)}
  </List>
</div>

export function reactLikeText() {
  const apples = [{ color: 'red' }, { color: 'blue' }]
  console.log(ReactLike.render(<Main apples={apples}></Main>, {indent: true}));
}


// this test can be executed in node with 
// npx ts-node -P tsconfig-node.json src/experiments/reactLike/test.tsx
// and uncommenting the following line:
reactLikeText()