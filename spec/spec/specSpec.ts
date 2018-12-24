import { describe as ssDescribe, it as ssIt, expect as ssExpect, SpecRunner, fail as ssFail } from '../../src/spec'
// import { TextReporter } from '../../src/spec/textReporter';
describe('spec', () => {
    // it('basic', () => {
    //     ssDescribe('Fruit', () => {
    //         ssIt('can be eaten', () => {
    //             ssExpect([1, 2, 3]).toContain(2)
    //         })

    //         ssIt('can walk', () => {
    //             ssExpect('asdas').toContain('as')
    //             ssExpect(Math.random() > 2).toBe(true)
    //         })

    //     })
    //     const result = SpecRunner.getInstance().run()
    //     const results = result.results
    //     // console.log(JSON.stringify(results,null, 2));

    //     // console.log(   new TextReporter().render({result}).output)

    //     expect(results.length).toBe(1) // a single root describe
    //     expect(results[0].specs.length).toBe(0) // no internal describes

    //     expect(results[0].name).toBe('Fruit')
    //     expect(results[0].results.length).toBe(2) // 2 its

    //     expect(results[0].results[0].name).toBe('can be eaten')
    //     expect(results[0].results[0].results.length).toBe(1) // one expect in the first it
    //     expect(results[0].results[0].results[0].message).toBe('Expected [1, 2, 3] to contain "2"')
    //     expect(results[0].results[0].results[0].type).toBe('pass')

    //     expect(results[0].results[1].name).toBe('can walk')
    //     expect(results[0].results[1].results.length).toBe(2) // 2 expects in the second it()
    //     expect(results[0].results[1].results[0].message).toBe('Expected \"asdas\" to contain \"as\"')
    //     expect(results[0].results[1].results[0].type).toBe('pass')
    //     expect(results[0].results[1].results[1].message).toBe('Expected \"false\" to be \"true\"')
    //     expect(results[0].results[1].results[1].type).toBe('fail')
    // })

    fdescribe('fail', () => {
        let flag = 1, flag2 = 1
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
            const result = SpecRunner.getInstance().run()
            const results = result.results
            console.log(JSON.stringify(results, null, 2));
        fit('should make the it fail, not keep executing the it , but the following yes ', () => {
            
            const result = SpecRunner.getInstance().run()
            const results = result.results
            expect(results[0].results[0].results[0].type).toBe('pass')
            expect(results[0].results[0].results[1].type).toBe('fail')
            expect(results[0].results[0].results.length).toBe(2) // should not exec the next ex


            expect(flag).toBe(1)
            // debugger
            // console.log(results[0].results[]w);

        })
        xit('should  not keep executing the it or nothinc , but the following yes ', () => {
            expect(results[0].results[0].results.length).toBe(2) // should not exec the next ex
            expect(flag).toBe(1)
        })
        fit('should keep exec the following its() ', () => {
            expect(results[0].results[1].results.length).toBe(1) // should not exec the next ex
        })
    })
})
