import { describe, it, expect } from "../../spec/index";
import { create} from 'N/search';
import { run } from '../results';

export function resultsTest (){

  describe('search/results', ()=>{
    
    it('Array.isArray(run()) should be true', ()=>{
      expect(Array.isArray(run(create({type: 'website'})))).toBe(true)
    })
    
    it('run() should return something that has .length, .map and .filter', ()=>{
      const a = run(create({type: 'website'}))
      expect(typeof a.length !=='undefined').toBe(true)
      expect(typeof a.map !=='undefined').toBe(true)
      expect(typeof a.filter !=='undefined').toBe(true)
    })

  }) 
}