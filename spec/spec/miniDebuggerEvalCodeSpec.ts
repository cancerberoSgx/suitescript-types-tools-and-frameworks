
import { evalCode } from "../../src/app/__tests__/miniDebuggerEvalCode";

describe('first spec of ss2 test', () => {
  it('it should TODO', () => {
    const { logs, errors } = evalCode(`LOG('Use LOG()', ['function'], { to: 'print', anyKind: function ofValue() { } })`);
    expect(logs).toEqual(['Use LOG(), [function], {to:print, anyKind:ofValue}'])
    expect(errors).toEqual([])
    // expect(1).toBe(2)
  })
})


