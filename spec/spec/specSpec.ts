import { describe as ssDescribe, expect as ssExpect, fail as ssFail, it as ssIt, SpecRunner } from '../../src/spec';
// import { TextReporter } from '../../src/spec/textReporter';
describe('spec', () => {
    it('basic', () => {
        // function test(){


        SpecRunner.getInstance().reset()
        ssDescribe('Fruit', () => {
            ssIt('can be eaten', () => {
                ssExpect([1, 2, 3]).toContain(2)
            })

            ssIt('can walk', () => {
                ssExpect('asdas').toContain('as')
                ssExpect(Math.random() > 2).toBe(true)
            })

        })
        const results = SpecRunner.getInstance().run().results
        // }
        // const result = 
        expect(results.length).toBe(1) // a single root describe
        expect(results[0].specs.length).toBe(0) // no internal describes

        expect(results[0].name).toBe('Fruit')
        expect(results[0].results.length).toBe(2) // 2 its

        expect(results[0].results[0].name).toBe('can be eaten')
        expect(results[0].results[0].results.length).toBe(1) // one expect in the first it
        expect(results[0].results[0].results[0].message).toBe('Expected [1, 2, 3] to contain "2"')
        expect(results[0].results[0].results[0].type).toBe('pass')

        expect(results[0].results[1].name).toBe('can walk')
        expect(results[0].results[1].results.length).toBe(2) // 2 expects in the second it()
        expect(results[0].results[1].results[0].message).toBe('Expected \"asdas\" to contain \"as\"')
        expect(results[0].results[1].results[0].type).toBe('pass')
        expect(results[0].results[1].results[1].message).toBe('Expected \"false\" to be \"true\"')
        expect(results[0].results[1].results[1].type).toBe('fail')
    })

    describe('fail', () => {
        let flag = 1, flag2 = 1
        function test() {
            SpecRunner.getInstance().reset()
            ssDescribe('d1', () => {
                ssIt('must fail', () => {
                    ssExpect(1).toBe(1)
                    ssFail('reason1')
                    flag = 2
                    ssExpect(2).toBe(2)
                })
                ssIt('must not fail2', () => {
                    ssExpect(1).toBe(1)
                    flag2 = 2
                })
            })
            return SpecRunner.getInstance().run().results
        }
        it('should make the it fail and not interfere with previous ones', () => {
            const results = test()
            expect(results[0].results[0].results[0].type).toBe('pass')
            expect(results[0].results[0].results[1].type).toBe('fail')
        })
        it('should  not keep executing the following its or statements', () => {
            const results = test()
            expect(results[0].results[0].results.length).toBe(2)
            expect(flag).toBe(1)
            expect(results[0].results[0].results[0].error).toBeUndefined()
            expect(results[0].results[0].results[1].error).not.toBeUndefined()
            expect(results[0].results[0].error).not.toBeUndefined()
        })
        it('should keep exec the following its() ', () => {
            const results = test()
            expect(results[0].results[1].error).toBeUndefined()
            expect(results[0].results[1].results.length).toBe(1)
            expect(flag2).toBe(2)
        })
    })
})
