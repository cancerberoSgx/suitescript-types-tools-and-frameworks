import { ReactLike } from "../createElement";

function cssTest1(){
  const Comp = ()=> <div className="apple" style={{border: '1 px solid pink', background: 'blue'}}>i'm pink</div>
  const Main = () => <div>
    <Comp></Comp>
  </div>
  const s = ReactLike.render(<Main></Main>, { indent: true })
  // expect(s).toContain('style="border: 1px solid pink"')
  // expect(s).toContain(`i'm pink`)
  console.log(s)
}
cssTest1()

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


// this test can be executed in node with 
// npx ts-node -P tsconfig-node.json src/experiments/reactLike/test.tsx
// and un comment the following line:
// reactLikeText()