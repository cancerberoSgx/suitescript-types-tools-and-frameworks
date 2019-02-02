import { describe, expect, fail, it, skip } from "../../spec/index";
import { ReactLike } from '../createElement'

export function jsxTests() {

  describe('ReactLike render', () => {
    it('support custom tags as functions', ()=>{
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

    it('supports typed css properties', ()=>{
      const Comp = ()=> <div className="apple" style={{border: '1px solid pink', background: 'blue'}}>i'm pink</div>
      const Main = () => <div>
        <Comp></Comp>
      </div>
      const s = ReactLike.render(<Main></Main>, { indent: true })
      expect(s).toContain('style="border: 1px solid pink; background: blue"')
      expect(s).toContain(`i'm pink22`)
      // console.log(s)
    })
    
    // console.log(ReactLike.render(<Main apples={apples}></Main>, { indent: true }));
  })


}